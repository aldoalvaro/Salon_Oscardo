import React from 'react';

export default function PageHeader({ title, description }) {
  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
      <p className="text-slate-500 mt-1">{description}</p>
    </div>
  );
}