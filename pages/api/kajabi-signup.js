export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, name, answers, score } = req.body;

    const response = await fetch(`https://${process.env.KAJABI_SITE}/api/v1/people`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(process.env.KAJABI_API_KEY + ':').toString('base64')}`
      },
      body: JSON.stringify({
        person: {
          email,
          name,
          custom_fields: {
            assessment_score: score,
            assessment_answers: JSON.stringify(answers)
          }
        }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Kajabi');
    }

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}