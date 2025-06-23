'use client';
import { FiUsers, FiMusic, FiUserCheck, FiSettings } from 'react-icons/fi';
import Card from '../../components/Card';

const summary = [
  { title: 'Total Users', value: 1200, icon: <FiUsers /> },
  { title: 'Active Sounds', value: 340, icon: <FiMusic /> },
  { title: 'Partners', value: 15, icon: <FiUserCheck /> },
  { title: 'Settings Changed', value: 8, icon: <FiSettings /> },
];

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {summary.map((item, idx) => (
        <Card key={idx} title={item.title} value={item.value} icon={item.icon} />
      ))}
    </div>
  );
}
