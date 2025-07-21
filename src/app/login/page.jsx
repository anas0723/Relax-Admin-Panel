"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/api";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const userData = await login(email, password);
      // Assuming the API returns a token or some user data on success
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userData", JSON.stringify(userData));
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Invalid Mail or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] relative">
      {/* Logo in top-left */}
      <div className="absolute top-6 left-6">
        <img src="/images/rellax-logo.png" alt="Rellax Logo" className="h-12 w-auto" />
      </div>
      <div className="w-full max-w-md p-8 bg-white border border-[var(--accent-teal)] rounded-2xl shadow-xl flex flex-col items-center">
        {/* Centered logo above the form */}
        <img src="/images/rellax-logo.png" alt="Rellax Logo" className="h-20 w-auto mb-6 mt-2" />
        <h1 className="text-2xl font-bold text-[var(--text-header)] mb-6 text-center">
          Sign in to your account
        </h1>
        <form className="space-y-5 w-full" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[var(--text-secondary)]"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[var(--background)] border border-[var(--accent-teal)] text-[var(--text-primary)] rounded-lg focus:ring-[var(--accent)] focus:border-[var(--accent)] block w-full p-2.5 placeholder-[var(--text-secondary)]"
              placeholder="name@company.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-[var(--text-secondary)]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-[var(--background)] border border-[var(--accent-teal)] text-[var(--text-primary)] rounded-lg focus:ring-[var(--accent)] focus:border-[var(--accent)] block w-full p-2.5 placeholder-[var(--text-secondary)]"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
     
          <button
            type="submit"
            className="w-full text-white bg-[var(--accent)] hover:bg-[var(--accent-teal)] focus:ring-4 focus:outline-none focus:ring-[var(--accent)] font-medium rounded-lg text-sm px-5 py-2.5 text-center transition"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        
        </form>
      </div>
    </section>
  );
};

export default LoginPage;

