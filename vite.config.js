import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function geminiApiPlugin() {
  return {
    name: 'gemini-api-dev',
    configureServer(server) {
      // POST /api/chat — proxy to Gemini text API
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        req.on('data', chunk => { body += chunk })
        req.on('end', async () => {
          try {
            const { query } = JSON.parse(body)
            const apiKey = process.env.GEMINI_API_KEY
            if (!apiKey) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'GEMINI_API_KEY not set in .env' }))
              return
            }

            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`
            const systemPrompt = `Bạn là gia sư Hóa học 12 chuyên sâu về chương 6: Đại cương Kim loại. 
            Nhiệm vụ: Trả lời ngắn gọn, súc tích, dễ hiểu. Dùng định dạng markdown để highlight. 
            Luôn định dạng các công thức hóa học rõ ràng, ví dụ H_2SO_4. Không dùng quá 300 từ unless được yêu cầu chi tiết.`

            const payload = {
              contents: [{ parts: [{ text: query }] }],
              systemInstruction: { parts: [{ text: systemPrompt }] },
              generationConfig: { temperature: 0.7 }
            }

            const controller = new AbortController()
            const timeoutId = setTimeout(() => controller.abort(), 30000)

            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
              signal: controller.signal
            })

            clearTimeout(timeoutId)

            if (!response.ok) {
              const errText = await response.text()
              console.error(`Gemini API returned ${response.status}:`, errText)
              res.statusCode = response.status
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Gemini API error', details: errText }))
              return
            }

            const result = await response.json()
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text || 'Không có phản hồi.'
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ text }))
          } catch (err) {
            console.error('Dev API error:', err)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Internal server error' }))
          }
        })
      })

      // POST /api/image — proxy to Pollinations for chemistry images
      server.middlewares.use('/api/image', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        req.on('data', chunk => { body += chunk })
        req.on('end', async () => {
          try {
            const { prompt } = JSON.parse(body)

            // Enhanced prompt for chemistry diagrams
            const lowerPrompt = prompt.toLowerCase()
            let diagramType = 'chemical diagram'
            if (lowerPrompt.includes('ăn mòn') || lowerPrompt.includes('corrosion')) {
              diagramType = 'electrochemical corrosion diagram with anode cathode electron flow arrows'
            } else if (lowerPrompt.includes('điện phân') || lowerPrompt.includes('electrolysis')) {
              diagramType = 'electrolysis cell diagram with electrodes ions current flow'
            } else if (lowerPrompt.includes('tinh thể') || lowerPrompt.includes('mạng')) {
              diagramType = '3D crystal lattice structure with atoms and bonds'
            } else if (lowerPrompt.includes('phản ứng') || lowerPrompt.includes('reaction')) {
              diagramType = 'chemical reaction diagram with reactants products arrows balanced equation'
            } else if (lowerPrompt.includes('dãy hoạt động') || lowerPrompt.includes('activity series')) {
              diagramType = 'metal activity series chart with reactivity order'
            } else if (lowerPrompt.includes('sơ đồ') || lowerPrompt.includes('diagram')) {
              diagramType = 'detailed educational chemistry schematic diagram'
            }

            const englishPrompt = `Professional educational chemistry ${diagramType} showing: ${prompt}. Clean white background, scientifically accurate, high detail, labeled components, clear annotations, textbook quality illustration style, no watermarks.`
            const seed = Math.floor(Math.random() * 1000000)
            const encoded = encodeURIComponent(englishPrompt)
            const imageUrl = `https://image.pollinations.ai/prompt/${encoded}?width=800&height=600&nologo=true&seed=${seed}`

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ imageUrl }))
          } catch (err) {
            console.error('Dev Image API error:', err)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ fallback: true, message: 'Tính năng vẽ sơ đồ hiện không khả dụng.' }))
          }
        })
      })

      // POST /api/grade-essay — proxy to Gemini for auto-grading
      server.middlewares.use('/api/grade-essay', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        let body = ''
        // Handle payload carefully since base64 files can be large
        req.on('data', chunk => { body += chunk })
        req.on('end', async () => {
          try {
            const { questionText, studentAnswer, files, rubric } = JSON.parse(body)
            const apiKey = process.env.GEMINI_API_KEY
            if (!apiKey) {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'GEMINI_API_KEY not set' }))
              return
            }

            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`
            
            const parts = [
              { text: `Bạn là một Giám khảo chấm thi Hoá học công tâm và chính xác. Dưới đây là Đề bài, Tiêu chí chấm điểm (Rubric) và Bài làm của học sinh (Bao gồm văn bản và hình ảnh/file đính kèm). Hãy chấm điểm chi tiết (cho điểm từng ý) và đưa ra nhận xét:\n\n---\n**Câu hỏi:** ${questionText}\n**Rubric:** ${rubric}\n**Bài làm Text của học sinh:** ${studentAnswer}` }
            ]

            if (files && files.length > 0) {
              files.forEach(f => {
                parts.push({
                  inlineData: {
                    mimeType: f.type,
                    data: f.data.split(',')[1]
                  }
                })
              })
            }

            const payload = {
              contents: [{ role: 'user', parts }]
            }

            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            })

            const responseData = await response.json()
            if (!response.ok) {
              res.statusCode = response.status
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Gemini API error', details: responseData }))
              return
            }

            const feedback = responseData.candidates[0].content.parts[0].text
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ feedback }))
          } catch (err) {
            console.error('Dev Grade API error:', err)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Lỗi trong quá trình chấm điểm', details: err.message }))
          }
        })
      })
    }
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env.GEMINI_API_KEY = env.GEMINI_API_KEY

  return {
    plugins: [react(), geminiApiPlugin()],
    server: {
      port: 3000
    }
  }
})
