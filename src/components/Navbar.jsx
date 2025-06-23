'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';


const pageTitles = {
  '/dashboard': 'Dashboard',
  '/users': 'Users',
  '/partners': 'Partners',
  '/sounds': 'Sounds',
  '/settings': 'Settings',
};

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-md border-b border-gray-200 dark:border-gray-700 rounded-b-2xl md:rounded-none">
  
    </nav>
  );
}
