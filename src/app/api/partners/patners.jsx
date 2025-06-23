'use client';
import { NextResponse } from 'next/server';

const partners = Array.from({ length: 25 }, (_, i) => ({
  name: `Partner ${i + 1}`,
  email: `partner${i + 1}@example.com`,
  status: i % 2 === 0 ? 'Active' : 'Inactive',
}));

export async function GET() {
  return NextResponse.json(partners);
}
