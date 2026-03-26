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

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${apiKey}`;
        const englishPrompt = `A detailed professional chemistry diagram/illustration showing: ${prompt}. Scientific style, clean white background, educational textbook quality.`;

        const payload = {
            instances: [{ prompt: englishPrompt }],
            parameters: { sampleCount: 1 }
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const result = await response.json();
            if (result.predictions?.[0]?.bytesBase64Encoded) {
                return res.status(200).json({ 
                    imageBase64: result.predictions[0].bytesBase64Encoded 
                });
            }
        }

        return res.status(200).json({ 
            fallback: true, 
            message: 'Tài khoản API này có thể chưa được kích hoạt Imagen (tạo ảnh). Thay vào đó, tôi có thể giải thích chi tiết quá trình đó bằng văn bản cho bạn nhé!' 
        });
    } catch (error) {
        console.error('Image API error:', error);
        return res.status(200).json({ 
            fallback: true, 
            message: 'Tạo hình ảnh không khả dụng lúc này. Thay vào đó, bạn có muốn tôi giải thích bằng chữ không?' 
        });
    }
}
