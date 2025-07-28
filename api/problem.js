export default function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { problemText } = req.body || {};
  
  if (!problemText) {
    return res.status(400).json({ error: 'Problem text is required' });
  }

  return res.status(200).json({ 
    analysis: `<p>SUCCESS! Problem: ${problemText}</p>` 
  });
}
