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
    <nav className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-slate-900/80 shadow-md backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
        {pageTitles[pathname] || 'Relax'}
      </div>
      <div className="flex items-center gap-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full p-2 bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-200 shadow hover:bg-indigo-200 dark:hover:bg-slate-600 transition"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-sun"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-moon"
              >
                <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.58 9.79z" />
              </svg>
            )}
          </button>
        )}
        <button
          className="md:hidden rounded-full p-2 bg-indigo-100 dark:bg-slate-700 text-indigo-600 dark:text-indigo-200 shadow hover:bg-indigo-200 dark:hover:bg-slate-600 transition"
          aria-label="Open sidebar"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
