export async function GET(req, res) {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://vi';
  try {
    const response = await fetch(`${apiBase}/stimuli`);
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch sounds' }), { status: 500 });
  }
}
