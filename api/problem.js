export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { problemText } = req.body || {};
  
  return res.status(200).json({ 
    analysis: `<p>Working! Problem: ${problemText}</p>` 
  });
}
