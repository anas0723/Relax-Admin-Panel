import React from 'react';

const LoginPage = () => {
  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-white/90 dark:bg-slate-800/90 rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sign in to your account</h2>
      <p className="text-gray-500 dark:text-gray-300 mb-6">Welcome back! Please enter your details.</p>
      <form className="w-full space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-900 dark:text-white"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-900 dark:text-white"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
