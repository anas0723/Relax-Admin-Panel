"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // If not logged in, redirect to login
    if (typeof window !== 'undefined' && !localStorage.getItem('isLoggedIn')) {
      router.replace('/login');
    } else {
      router.replace('/dashboard');
    }
  }, [router]);
  return null;
}


