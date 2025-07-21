"use client";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import { usePathname, useRouter } from "next/navigation";

export default function AppLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/login";
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn && !isLogin) {
        router.push("/login");
      }
    }
  }, [isClient, isLogin, pathname, router]);

  if (!isClient && !isLogin) {
    return null;
  }
  
  if (isClient && !isLogin) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      return null;
    }
  }

  return isLogin ? children : <Layout>{children}</Layout>;
}
