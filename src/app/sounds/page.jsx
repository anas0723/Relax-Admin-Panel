'use client';
import React, { useEffect, useState } from 'react';

const SoundsPage = () => {
  const [sounds, setSounds] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/server/sound')
      .then(res => res.json())
      .then(data => {
        setSounds(data);
        console.log('Fetched sounds:', data);
      })
      .catch(() => setError('Failed to fetch sounds'));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sounds</h1>
      {error && <div className="text-red-500">{error}</div>}
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">{JSON.stringify(sounds, null, 2)}</pre>
    </div>
  );
};

export default SoundsPage;
