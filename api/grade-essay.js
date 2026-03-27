export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured on server' });
    }

    try {
        const { questionText, studentAnswer, files, rubric } = req.body;

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        
        const parts = [
            { text: `Bạn là một Giám khảo chấm thi Hoá học công tâm và chính xác. Dưới đây là Đề bài, Tiêu chí chấm điểm (Rubric) và Bài làm của học sinh (Bao gồm văn bản và hình ảnh/file đính kèm). Hãy chấm điểm chi tiết (cho điểm từng ý) và đưa ra nhận xét:\n\n---\n**Câu hỏi:** ${questionText}\n**Rubric:** ${rubric}\n**Bài làm Text của học sinh:** ${studentAnswer}` }
        ];

        if (files && files.length > 0) {
            files.forEach(f => {
                parts.push({
                    inlineData: {
                        mimeType: f.type,
                        data: f.data.split(',')[1]
                    }
                });
            });
        }

        const payload = {
            contents: [{ role: 'user', parts }]
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const responseData = await response.json();
        
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Gemini API error', details: responseData });
        }

        const feedback = responseData.candidates[0].content.parts[0].text;
        return res.status(200).json({ feedback });
        
    } catch (error) {
        console.error('Grade Essay API error:', error);
        return res.status(500).json({ 
            error: 'Lỗi trong quá trình chấm điểm', 
            details: error.message 
        });
    }
}
