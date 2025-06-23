'use client';
import { NextResponse } from 'next/server';

const users = [
  { name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob', email: 'bob@example.com', role: 'User' },
  { name: 'Charlie', email: 'charlie@example.com', role: 'User' },
];

export async function GET() {
  return NextResponse.json(users);
}
