import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();
  // Example: Replace with your real authentication logic
  if (email === 'admin@relax.com' && password === 'admin123') {
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
