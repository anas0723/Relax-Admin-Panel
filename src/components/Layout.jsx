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
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col md:ml-64">
              <Navbar />
              <main className="flex-1 p-4 md:p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-lg shadow-lg mt-4 mx-2 md:mx-6">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
