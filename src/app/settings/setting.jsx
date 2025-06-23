"use client";
import { useState } from 'react';

export default function SettingsPage() {
  const [name, setName] = useState('Admin');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();
    // Save settings logic here
    alert('Settings updated!');
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded shadow flex flex-col gap-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={darkMode} onChange={e => setDarkMode(e.target.checked)} id="darkMode" />
          <label htmlFor="darkMode">Enable Dark Mode</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={notifications} onChange={e => setNotifications(e.target.checked)} id="notifications" />
          <label htmlFor="notifications">Enable Notifications</label>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Save Settings</button>
      </form>
    </div>
  );
}
