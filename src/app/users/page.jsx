'use client';
import React, { useEffect, useState } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/server/user')
      .then(res => res.json())
      .then(data => {
        setUsers(data?.data || []);
        console.log('Fetched users:', data);
      })
      .catch(() => setError('Failed to fetch users'));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {error && <div className="text-red-500">{error}</div>}
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default UsersPage;