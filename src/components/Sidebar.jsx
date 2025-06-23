'use client';
import { FiHome, FiUsers, FiUserCheck, FiMusic, FiSettings } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: <FiHome /> },
  { href: '/users', label: 'Users', icon: <FiUsers /> },
  { href: '/partners', label: 'Partners', icon: <FiUserCheck /> },
  { href: '/sounds', label: 'Sounds', icon: <FiMusic /> },
  { href: '/settings', label: 'Settings', icon: <FiSettings /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <aside className={`transition-all duration-200 h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800 shadow-xl flex flex-col ${open ? 'w-64' : 'w-20'} fixed md:static z-40`}>
      <div className="flex items-center justify-between px-6 py-4">
        <span className={`text-2xl font-extrabold text-white tracking-wide transition-all ${open ? 'block' : 'hidden'}`}>Relax</span>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>
      </div>
      <nav className="flex-1 flex flex-col gap-2 mt-4">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-4 px-6 py-3 rounded-lg font-medium text-lg transition-all duration-150 cursor-pointer
              ${pathname === link.href ? 'bg-white bg-opacity-20 text-indigo-100 shadow-md' : 'text-white hover:bg-white hover:bg-opacity-10'}`}
          >
            <span className="text-2xl">{link.icon}</span>
            {open && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>
      <div className="flex-1" />
      <button
        className="mx-6 mb-6 mt-2 px-4 py-2 w-40 bg-white bg-opacity-20 text-indigo-100 rounded-lg font-semibold shadow hover:bg-opacity-30 transition self-end md:self-start"
        onClick={() => {
          // Clear any auth state here if needed
          window.location.href = '/login';
        }}
      >
        Logout
      </button>
      <div className="px-6 py-4 text-xs text-indigo-100 opacity-60">© 2025 Relax</div>
    </aside>
  );
}
