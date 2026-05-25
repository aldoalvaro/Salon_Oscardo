import React from 'react';
import { 
  MdDashboard, MdPeople, MdBusiness, MdCreditCard, 
  MdSettings, MdMenuBook 
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { FiActivity, FiCheckSquare, FiBarChart2 } from 'react-icons/fi';

export default function Sidebar() {

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-colors ${
      isActive
        ? "bg-[#10b981] text-white shadow-sm" 
        : "text-slate-500 hover:bg-slate-50"   
    }`;

  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 font-bold text-lg border-b border-slate-100">
        Salon Oscardo
      </div>
      <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
        <NavLink to="/" className={menuClass}>
          <MdDashboard className="w-5 h-5" /> Dashboard
        </NavLink>
        <NavLink to="/karyawan" className={menuClass}>
          <MdPeople className="w-5 h-5" /> Karyawan
        </NavLink>
        <NavLink to="/companies" className={menuClass}>
          <MdBusiness className="w-5 h-5" /> Companies
        </NavLink>
        <NavLink to="/deals" className={menuClass}>
          <FiActivity className="w-5 h-5" /> Deals
        </NavLink>
        <NavLink to="/tasks" className={menuClass}>
          <FiCheckSquare className="w-5 h-5" /> Tasks
        </NavLink>
        <NavLink to="/reports" className={menuClass}>
          <FiBarChart2 className="w-5 h-5" /> Reports
        </NavLink>
        <NavLink to="/billing" className={menuClass}>
          <MdCreditCard className="w-5 h-5" /> Billing
        </NavLink>
        <NavLink to="/settings" className={menuClass}>
          <MdSettings className="w-5 h-5" /> Settings
        </NavLink>
        <NavLink to="/docs" className={menuClass}>
          <MdMenuBook className="w-5 h-5" /> Docs
        </NavLink>
      </nav>
    </aside>
  );
}