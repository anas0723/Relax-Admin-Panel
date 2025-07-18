"use client";
import '../app/globals.css'
import Sidebar from '../components/Sidebar';

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans min-h-screen" style={{ background: 'var(--background)' }}>
          <div className="flex min-h-screen w-full transition-colors duration-500" style={{ background: 'var(--background)' }}>
            <Sidebar />
            <div className="flex-1 flex flex-col w-full transition-all duration-300">
              <main className="flex-1 w-full p-2 sm:p-4 md:p-6 overflow-x-auto overflow-y-auto bg-white/80 rounded-tl-3xl md:rounded-tl-3xl shadow-xl mt-2 md:mt-3 mx-0 md:mx-4 transition-all duration-300">
                {children}
              </main>
            </div>
          </div>
      </body> 
    </html>
  );
}
