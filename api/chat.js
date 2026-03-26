export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured on server' });
    }

    try {
        const { query } = req.body;
        if (!query) {
            return res.status(400).json({ error: 'Missing query' });
        }

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
        const systemPrompt = `Bạn là gia sư Hóa học 12 chuyên sâu về chương 6: Đại cương Kim loại. 
        Nhiệm vụ: Trả lời ngắn gọn, súc tích, dễ hiểu. Dùng định dạng markdown để highlight. 
        Luôn định dạng các công thức hóa học rõ ràng, ví dụ H_2SO_4. Không dùng quá 300 từ unless được yêu cầu chi tiết.`;

        const payload = {
            contents: [{ parts: [{ text: query }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
            generationConfig: { temperature: 0.7 }
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.text();
            return res.status(response.status).json({ error: 'Gemini API error', details: errorData });
        }

        const result = await response.json();
        const text = result.candidates?.[0]?.content?.parts?.[0]?.text || 'Không có phản hồi.';
        
        return res.status(200).json({ text });
    } catch (error) {
        console.error('Chat API error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
