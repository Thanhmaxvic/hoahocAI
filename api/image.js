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

        // Enhanced prompt for chemistry diagrams with better accuracy
        const chemistryKeywords = [
            'molecular structure', 'chemical bonds', 'reaction mechanism',
            'electron transfer', 'electrochemical cell', 'crystal lattice',
            'periodic table element', 'oxidation reduction'
        ];
        
        // Detect type of chemistry diagram
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
        const seed = Math.floor(Math.random() * 1000000);
        const encoded = encodeURIComponent(englishPrompt);
        const imageUrl = `https://gen.pollinations.ai/image/${encoded}?width=800&height=600&nologo=true&seed=${seed}&model=flux`;
        
        return res.status(200).json({ imageUrl });
    } catch (error) {
        console.error('Image API error:', error);
        return res.status(200).json({ 
            fallback: true, 
            message: 'Tính năng vẽ sơ đồ hiện không khả dụng.' 
        });
    }
}
