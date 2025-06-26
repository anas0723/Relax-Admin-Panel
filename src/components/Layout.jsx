"use client";
import '../app/globals.css'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-slate-50 min-h-screen">
          <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-emerald-50 to-slate-100 transition-colors duration-500">
            <Sidebar />
            <div className="flex-1 flex flex-col md:ml-64 transition-all duration-300">
              <Navbar />
              <main className="flex-1 p-4 md:p-8 overflow-y-auto bg-white/80 rounded-tl-3xl md:rounded-tl-3xl shadow-xl mt-2 md:mt-6 mx-0 md:mx-4 transition-all duration-300">
                {children}
              </main>
            </div>
          </div>
      </body> 
    </html>
  );
}
