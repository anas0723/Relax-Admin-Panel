import 'server-only';

export async function GET() {
  const apiBase = process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL;
  const url = `${apiBase}/users?page=1&limit=10`;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add Authorization here if needed
      },
      // cache: 'no-store', // Uncomment if you want to disable caching
    });
    if (!response.ok) {
      const errorText = await response.text();
      return new Response(JSON.stringify({ error: 'Failed to fetch users', details: errorText }), { status: response.status }); 
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch users', details: error.message }), { status: 500 });
  }
}
