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
    <aside className={`transition-all duration-200 bg-gradient-to-b from-indigo-600 via-emerald-500 to-sky-500 shadow-xl flex flex-col h-full md:h-screen ${open ? 'w-64' : 'w-20'} fixed md:static z-40 rounded-r-2xl md:rounded-none`}> 
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
            className={`flex items-center gap-4 px-6 py-3 rounded-lg font-medium text-lg transition-all duration-150 cursor-pointer group
              ${pathname === link.href ? 'bg-white bg-opacity-20 text-emerald-100 shadow-md' : 'text-white hover:bg-emerald-100 hover:text-indigo-700 hover:scale-105'}
              `}
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
            {open && <span className="group-hover:underline group-hover:decoration-2">{link.label}</span>}
          </Link>
        ))}
      </nav>
      <div className="flex-1" />
      <div className="flex flex-col items-end md:items-end px-6 pb-4 gap-2">
        <button
          className="w-full md:w-auto px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg font-semibold shadow hover:bg-opacity-30 transition"
          onClick={() => { window.location.href = '/login'; }}
        >
          Logout
        </button>
        <div className="text-xs text-white opacity-70 mt-2">© 2025 Relax</div>
      </div>
    </aside>
  );
}
