import React from 'react';
import { MdSearch, MdMenu } from 'react-icons/md';

export default function Header() {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-6 z-10 border-b border-slate-200">
      <div className="flex items-center w-full max-w-md relative">
        <MdSearch className="w-5 h-5 text-slate-400 absolute left-3" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="text-slate-500 hover:text-slate-700">
          <MdMenu className="w-6 h-6" />
        </button>
        <button className="flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors">
          <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
          <span className="text-sm font-medium pr-1">Account</span>
        </button>
      </div>
    </header>
  );
}