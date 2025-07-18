'use client';
import { FiHome, FiUsers, FiUserCheck, FiMusic, FiSettings, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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
  const [showOverlay, setShowOverlay] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSidebarToggle = () => {
    setOpen(!open);
    setShowOverlay(!open);
  };

  return (
    <>
      {/* Mobile overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden transition-opacity duration-300"
          onClick={handleSidebarToggle}
        />
      )}
      <aside
        className={`transition-all duration-300 bg-[var(--sidebar-bg)] shadow-xl flex flex-col h-full md:h-screen ${open ? 'w-64' : 'w-20'} fixed md:static z-40 rounded-r-2xl md:rounded-none top-0 left-0 min-h-screen`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          {open ? (
            <img src="/images/rellax-logo.png" alt="Rellax Logo" className="h-10 w-auto transition-all" />
          ) : null}
          <button className="md:hidden text-[var(--text-white)]" onClick={handleSidebarToggle}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
          </button>
        </div>
        <nav className="flex-1 flex flex-col gap-2 mt-4">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex items-center gap-4 px-6 py-3 rounded-lg font-medium text-lg transition-all duration-150 cursor-pointer group
                ${pathname === link.href ? 'bg-[rgba(255,255,255,0.12)] text-[var(--accent)] shadow-md' : 'text-[var(--text-white)] hover:bg-[rgba(255,255,255,0.08)] hover:text-[var(--accent-teal)] hover:scale-105'}
                `}
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">
                {link.icon}
              </span>
              {open ? (
                <span className="group-hover:underline text-gray-700 group-hover:decoration-2">{link.label}</span>
              ) : (
                <span className="absolute left-full ml-2 px-2 py-1 rounded bg-[var(--sidebar-navy)] text-gray-600 text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-lg z-50">
                  {link.label}
                </span>
              )}
            </Link>
          ))}
        </nav>
        <div className="flex-1" />
        {/* Logout button, absolute on desktop, relative on mobile */}
        <div className="relative w-full">
          <button
            className="flex items-center gap-2 w-full md:w-auto px-4 py-2 bg-transparent bg-opacity-20 text-[var(--text-white)] rounded-lg font-semibold shadow hover:bg-[var(--accent)] hover:text-[var(--text-white)] transition absolute md:static bottom-6 right-4 md:bottom-auto md:right-auto"
            onClick={() => { window.location.href = '/login'; }}
          >
            <FiLogOut />
            {open && <span>Logout</span>}
          </button>
          <div className={`text-xs text-[var(--text-white)] opacity-70 mt-16 md:mt-2 text-right pr-4 md:pr-0 ${open ? '' : 'hidden md:block'}`}>
            © 2025 Relax
          </div>
        </div>
      </aside>
    </>
  );
}
