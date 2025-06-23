'use client';
import { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error('Invalid credentials');
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-emerald-500 to-slate-800 dark:from-slate-900 dark:via-indigo-900 dark:to-emerald-900">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white/90 dark:bg-slate-900/90 p-8 rounded-2xl shadow-2xl flex flex-col gap-6 backdrop-blur-md">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 dark:text-emerald-400 mb-2">Relax Admin Login</h2>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 dark:text-emerald-300">
              <FiMail />
            </span>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-indigo-200 dark:border-emerald-700 bg-indigo-50 dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-emerald-400 transition"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400 dark:text-emerald-300">
              <FiLock />
            </span>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-indigo-200 dark:border-emerald-700 bg-indigo-50 dark:bg-slate-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-emerald-400 transition"
            />
          </div>
        </div>
        {error && <div className="text-red-500 text-center text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-bold shadow-lg transition text-lg mt-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}
