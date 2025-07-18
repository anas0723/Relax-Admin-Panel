"use client";
import Layout from './Layout';
import { usePathname } from 'next/navigation';

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const isLogin = pathname === '/login';
  return isLogin ? children : <Layout>{children}</Layout>;
}
