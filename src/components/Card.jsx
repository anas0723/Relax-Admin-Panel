'use client';
import React from 'react';

const Card = ({ title, value, icon, color }) => (
  <div className={`flex items-center gap-4 p-6 rounded-2xl shadow-md bg-gradient-to-br ${color} text-white transition-transform hover:scale-105`}>
    <div className="text-4xl opacity-80">{icon}</div>
    <div>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  </div>
);

export default Card;
