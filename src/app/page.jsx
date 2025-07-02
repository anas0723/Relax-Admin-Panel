// "use client";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const isFirstLogin = localStorage.getItem('isFirstLogin');
//       if (isFirstLogin === 'true') {
//         router.push('/dashboard');
//       } else {
//         setLoading(false);
//         router.push('/login');
//       }
//     }
//   }, [router]);

//   if (loading) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <span>Loading...</span>
//       </div>
//     );
//   }

// }
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className=' '>anas</h1>
    </div>
  )
}

export default page
