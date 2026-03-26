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

            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            })

            if (!response.ok) {
              const errText = await response.text()
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

      // POST /api/image — proxy to Gemini Imagen API
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
            const apiKey = process.env.GEMINI_API_KEY
            if (!apiKey) {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ fallback: true, message: 'GEMINI_API_KEY not set' }))
              return
            }

            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${apiKey}`
            const englishPrompt = `A detailed professional chemistry diagram/illustration showing: ${prompt}. Scientific style, clean white background, educational textbook quality.`

            const payload = {
              instances: [{ prompt: englishPrompt }],
              parameters: { sampleCount: 1 }
            }

            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            })

            if (response.ok) {
              const result = await response.json()
              if (result.predictions?.[0]?.bytesBase64Encoded) {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ imageBase64: result.predictions[0].bytesBase64Encoded }))
                return
              }
            }

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ fallback: true, message: 'Tài khoản API này có thể chưa được kích hoạt Imagen. Thay vào đó, tôi có thể giải thích bằng văn bản cho bạn nhé!' }))
          } catch (err) {
            console.error('Dev Image API error:', err)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ fallback: true, message: 'Tạo hình ảnh không khả dụng lúc này.' }))
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
