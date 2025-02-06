export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, answers } = req.body;

    const formattedAnswers = Object.entries(answers)
      .map(([q, a]) => `Q${q}: ${a}`)
      .join(' | ');

    const response = await fetch(`https://${process.env.KAJABI_SITE}/api/v1/people`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${process.env.KAJABI_KEY}:${process.env.KAJABI_SECRET}`).toString('base64')}`
      },
      body: JSON.stringify({
        person: {
          email: email,
          custom_fields: {
            assessment_answers: formattedAnswers
          }
        }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Kajabi');
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to submit assessment' });
  }
}