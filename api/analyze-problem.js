export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { problemText } = req.body;

    if (!problemText) {
      return res.status(400).json({ error: 'Problem text is required' });
    }

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        system: `You are a statistics expert. Analyze word problems and extract key information for hypothesis testing.

Provide a PROBLEM SETUP section that includes:
1. Problem Type (what kind of statistical test)
2. Hypotheses (H₀ and H₁)
3. Test Selection (z-test or t-test)
4. Given Values (n, x̄, σ or s, α, μ₀)
5. Test Direction (lower tail, upper tail, or two-tailed)

Format your response as clean HTML that can be inserted into a div.`,
        messages: [{
          role: 'user',
          content: `Analyze this statistics problem and extract the setup information: ${problemText}`
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`Claude API error: ${response.status}`);
    }

    const data = await response.json();
    const analysis = data.content[0].text;

    return res.status(200).json({ analysis });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Failed to analyze problem' });
  }
}
