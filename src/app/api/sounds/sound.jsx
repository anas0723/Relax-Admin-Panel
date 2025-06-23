'use client';
import { NextResponse } from 'next/server';

const sounds = [
  { id: 1, title: 'Relaxing Ocean', category: 'Nature', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, title: 'Calm Forest', category: 'Nature', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 3, title: 'Soft Piano', category: 'Music', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
];

export async function GET() {
  return NextResponse.json(sounds);
}
