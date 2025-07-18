'use client';
import './globals.css';
import Layout from '../components/Layout';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname() ;
  const isLogin = pathname === '/login';

  return isLogin ? children : <Layout>{children}</Layout>;
}
