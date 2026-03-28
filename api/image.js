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

        // Enhanced prompt for chemistry diagrams
        const lowerPrompt = prompt.toLowerCase();
        let diagramType = 'chemical diagram';
        if (lowerPrompt.includes('ăn mòn') || lowerPrompt.includes('corrosion')) {
            diagramType = 'electrochemical corrosion diagram with anode cathode electron flow arrows';
        } else if (lowerPrompt.includes('điện phân') || lowerPrompt.includes('electrolysis')) {
            diagramType = 'electrolysis cell diagram with electrodes ions current flow';
        } else if (lowerPrompt.includes('tinh thể') || lowerPrompt.includes('mạng')) {
            diagramType = '3D crystal lattice structure with atoms and bonds';
        } else if (lowerPrompt.includes('phản ứng') || lowerPrompt.includes('reaction')) {
            diagramType = 'chemical reaction diagram with reactants products arrows balanced equation';
        } else if (lowerPrompt.includes('dãy hoạt động') || lowerPrompt.includes('activity series')) {
            diagramType = 'metal activity series chart with reactivity order';
        } else if (lowerPrompt.includes('sơ đồ') || lowerPrompt.includes('diagram')) {
            diagramType = 'detailed educational chemistry schematic diagram';
        }

        const englishPrompt = `Professional educational chemistry ${diagramType} showing: ${prompt}. Clean white background, scientifically accurate, high detail, labeled components, clear annotations, textbook quality illustration style, no watermarks.`;

        // Use Gemini API for image generation
        const model = 'gemini-3.1-flash-image-preview';
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

        const geminiResponse = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: englishPrompt }]
                }],
                generationConfig: {
                    responseModalities: ['TEXT', 'IMAGE']
                }
            })
        });

        if (!geminiResponse.ok) {
            const errText = await geminiResponse.text();
            console.error('Gemini API error:', geminiResponse.status, errText);
            return res.status(500).json({ 
                error: `Gemini API error: ${geminiResponse.status}`,
                details: errText
            });
        }

        const data = await geminiResponse.json();
        
        // Extract image from response parts
        const candidates = data.candidates;
        if (!candidates || candidates.length === 0) {
            return res.status(200).json({ 
                message: 'Không thể tạo hình ảnh cho yêu cầu này. Vui lòng thử lại với mô tả khác.' 
            });
        }

        const parts = candidates[0].content?.parts || [];
        let imageBase64 = null;
        let mimeType = 'image/png';

        for (const part of parts) {
            if (part.inlineData) {
                imageBase64 = part.inlineData.data;
                mimeType = part.inlineData.mimeType || 'image/png';
                break;
            }
        }

        if (imageBase64) {
            return res.status(200).json({ 
                imageBase64,
                mimeType
            });
        } else {
            // No image in response, return text message
            const textParts = parts.filter(p => p.text).map(p => p.text).join('\n');
            return res.status(200).json({ 
                message: textParts || 'Không thể tạo hình ảnh lúc này. Vui lòng thử lại.'
            });
        }
    } catch (error) {
        console.error('Image API error:', error);
        return res.status(200).json({ 
            fallback: true, 
            message: 'Tính năng vẽ sơ đồ hiện không khả dụng.' 
        });
    }
}
