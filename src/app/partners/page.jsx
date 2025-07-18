"use client";
import { useRouter } from "next/navigation";

export default function PartnersPage() {
  const router = useRouter();
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Partners</h1>
        <div className="flex-1 flex items-center">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </span>
            <input
              type="text"
              placeholder="Search Partner"
              className="w-full pl-10 pr-4 py-2 border border-gray-400  rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-700"
            />
          </div>
        </div>
        <button
          className="ml-4 flex items-center gap-2 px-6 py-2 bg-cyan-400 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors"
          onClick={() => router.push("/partners/new")}
        >
          <span className="text-xl leading-none">+</span> Add Partner
        </button>
      </div>
      {/* Partner list or table goes here */}
    </div>
  );
}