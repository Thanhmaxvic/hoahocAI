export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured on server' });
    }

    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Missing prompt' });
        }

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`
        const systemPrompt = `Dù bạn không thể xuất ra file ảnh thật, nhưng hãy miêu tả siêu chi tiết cấu trúc, sơ đồ hoặc phản ứng sau: ${prompt}. (Khuyến khích sử dụng sơ đồ ASCII, mã code Mermaid hoặc định dạng bảng chi tiết để người dùng hình dung rõ ràng nhất).`

        const payload = {
            contents: [{ role: 'user', parts: [{ text: systemPrompt }] }]
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const result = await response.json();
            const textMessage = result.candidates?.[0]?.content?.parts?.[0]?.text || "Không tạo được lời diễn giải.";
            return res.status(200).json({ 
                fallback: true, 
                message: textMessage 
            });
        }

        return res.status(200).json({ 
            fallback: true, 
            message: 'Lỗi thiết lập với AI khi tạo diễn giải sơ đồ.' 
        });
    } catch (error) {
        console.error('Image API error:', error);
        return res.status(200).json({ 
            fallback: true, 
            message: 'Tính năng vẽ sơ đồ hiện không khả dụng.' 
        });
    }
}
