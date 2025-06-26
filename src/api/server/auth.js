// Simple register endpoint for demonstration
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    // Simulate registration logic
    if (email && password) {
      res.status(200).json({ success: true, message: 'User registered', email });
    } else {
      res.status(400).json({ success: false, message: 'Missing email or password' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
