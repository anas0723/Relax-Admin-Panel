// export async function GET(req, res) {
//   const apiBase = process.env.NEXT_PUBLIC_USERS_API 
//   const url = `${apiBase}?page=1&limit=10`;
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: ' nothing users' }), { status: 500 });
//   }
// }
