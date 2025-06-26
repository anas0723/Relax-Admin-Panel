// "use client";
// import React, { useState } from "react";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/server/auth", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
//       console.log("Register/Login result:", data);
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-[#1a2236]">
//       <div className="w-full max-w-md p-8 bg-[#232c43] border border-[#29304d] rounded-2xl shadow-xl">
//         <h1 className="text-2xl font-bold text-white mb-6">
//           Sign in to your account
//         </h1>
//         <form className="space-y-5" onSubmit={handleSubmit}>
//           <div>
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-white"
//             >
//               Your email
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               className="bg-[#232c43] border border-[#29304d] text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
//               placeholder="name@company.com"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block mb-2 text-sm font-medium text-white"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="••••••••"
//               className="bg-[#232c43] border border-[#29304d] text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember"
//                 type="checkbox"
//                 className="w-4 h-4 border border-[#29304d] rounded bg-[#232c43] focus:ring-2 focus:ring-blue-500"
//               />
//               <label
//                 htmlFor="remember"
//                 className="ml-2 text-sm text-gray-300"
//               >
//                 Remember me
//               </label>
//             </div>
//             <a
//               href="#"
//               className="text-sm text-blue-400 hover:underline"
//             >
//               Forgot password?
//             </a>
//           </div>
//           <button
//             type="submit"
//             className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
//           >
//             Sign in
//           </button>
//           <p className="text-sm text-gray-400 text-center">
//             Don’t have an account yet?{" "}
//             <a
//               href="#"
//               className="text-blue-400 hover:underline"
//             >
//               Sign up
//             </a>
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default LoginPage;
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className=' ' >anas</h1>
    </div>
  )
}

export default page

