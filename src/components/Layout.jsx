"use client";
import '../app/globals.css'
import { ThemeProvider } from 'next-themes';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-slate-50 dark:bg-slate-900 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-emerald-50 to-slate-100 dark:from-slate-900 dark:via-indigo-950 dark:to-emerald-950">
            <Sidebar />
            <div className="flex-1 flex flex-col md:ml-64">
              <Navbar />
              <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
