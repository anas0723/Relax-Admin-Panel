import { FiUsers, FiMusic, FiUserCheck, FiSettings } from 'react-icons/fi';
import Card from '../../components/Card';
import Link from 'next/link';

const summary = [
  { title: 'Total Users', value: 1200, icon: <FiUsers />, color: 'from-indigo-500 via-purple-500 to-pink-500' },
  { title: 'Active Sounds', value: 340, icon: <FiMusic />, color: 'from-emerald-500 via-teal-400 to-cyan-400' },
  { title: 'Partners', value: 15, icon: <FiUserCheck />, color: 'from-pink-500 via-fuchsia-500 to-indigo-500' },
  { title: 'Settings Changed', value: 8, icon: <FiSettings />, color: 'from-yellow-400 via-orange-400 to-rose-400' },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {summary.map((item, idx) => (
          <Card key={idx} title={item.title} value={item.value} icon={item.icon} color={`bg-gradient-to-br ${item.color}`} />
        ))}
      </div>  
    </div>
  );
} 