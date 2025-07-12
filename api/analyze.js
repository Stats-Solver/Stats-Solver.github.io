export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { problemText } = req.body;
    
    if (!problemText) {
      return res.status(400).json({ error: 'Problem text is required' });
    }

    // Simple test response first
    return res.status(200).json({ 
      analysis: `<p>Test analysis for: ${problemText}</p><p>This is working!</p>` 
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Failed to analyze problem' });
  }
}
