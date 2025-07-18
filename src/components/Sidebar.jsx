'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiMusic,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: <FiHome /> },
  { href: '/users', label: 'Users', icon: <FiUsers /> },
  { href: '/partners', label: 'Partners', icon: <FiUserCheck /> },
  { href: '/sounds', label: 'Sounds', icon: <FiMusic /> },
  { href: '/settings', label: 'Settings', icon: <FiSettings /> },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setShowOverlay(!isOpen);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {showOverlay && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-screen min-h-screen z-40 flex flex-col transition-all duration-300 rounded-r-2xl md:rounded-none shadow-xl
          ${isOpen ? 'w-64' : 'w-20'}
          bg-[var(--sidebar-bg)]
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-center px-6 py-4">
          {isOpen && <img src="/images/rellax-logo.png" alt="Logo" className="h-32 w-32 bg-dynamic-image bg-cover bg-center" />}
      
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 mt-4 px-2">
          {navLinks.map(({ href, label, icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
              className={`group flex items-center gap-4 px-4 py-3 rounded-lg font-medium text-base transition-all duration-150 
                  ${active ? 'bg-[var(--hover-bg)] text-[var(--accent)] shadow-md' : 'text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--hover-bg)]'}
                `}
              >
                <span className="text-2xl">{icon}</span>
                {isOpen ? (
                  <span className="group-hover:underline ">{label}</span>
                ) : (
                  <span className="absolute left-full ml-2 px-2 py-1 text-xs bg-[var(--sidebar-navy)] text-white opacity-0 group-hover:opacity-100 rounded shadow-lg transition-opacity">
                    {label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex-grow" />

        {/* Logout */}
        <div className="relative w-full px-4 pb-6">
          <button
            onClick={() => (window.location.href = '/login')}
            className="flex items-center gap-2 w-full px-4 py-2 bg-transparent border border-gray-300 rounded-lg hover:bg-[var(--accent)] text-[var(--text-secondary)] hover:text-white transition"
          >
            <FiLogOut />
            {isOpen && <span>Logout</span>}
          </button>

         
        </div>
      </aside>
    </>
  );
}
