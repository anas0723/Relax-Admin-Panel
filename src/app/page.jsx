"use client";

import { useEffect, useState } from 'react';
import { fetchAdminData } from '../utils/adminApi';


export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function getData() {
      setLoading(true);
      setError(null);
      try {
        // Replace 'realtime-data' with your actual endpoint
        const result = await fetchAdminData('realtime-data');
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    getData();
    // Optionally poll every 5 seconds for real-time updates
    const interval = setInterval(getData, 5000);
    return () => { isMounted = false; clearInterval(interval); };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      {loading && (
        <div className="flex items-center justify-center h-40">
          <span className="text-lg text-gray-500">Loading real-time data...</span>
        </div>
      )}
      {error && (
        <div className="text-red-500 mb-4">Error: {error}</div>
      )}
      {data && (
        <pre className="bg-white p-4 rounded shadow text-sm overflow-x-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );

}


