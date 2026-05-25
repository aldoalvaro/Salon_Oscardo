import React from 'react';
import { MdSearch, MdMailOutline, MdPhone } from 'react-icons/md';

export default function Karyawan() {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header Halaman Contacts */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Karyawan</h1>
          <p className="text-slate-500 mt-1">Kelola data karyawan Salon Oscardo</p>
        </div>
        <button className="bg-[#10b981] hover:bg-emerald-600 text-white px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-sm">
          <span className="text-lg leading-none">+</span> Add Karyawan
        </button>
      </div>

      {/* Baris Pencarian */}
      <div className="relative">
        <MdSearch className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search contacts..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all shadow-sm"
        />
      </div>

      {/* Grid Kartu Kontak */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ContactCard initials="JD" name="John Doe" role="CEO at Acme Corp" email="john@acme.com" phone="+1 234 567 8900" />
        <ContactCard initials="JS" name="Jane Smith" role="CTO at Tech Solutions" email="jane@techsol.com" phone="+1 234 567 8901" />
        <ContactCard initials="MB" name="Mike Brown" role="Sales Director at InnovateCo" email="mike@innovate.com" phone="+1 234 567 8902" />
      </div>

    </div>
  );
}

// Sub-komponen untuk mempermudah pembuatan kartu
function ContactCard({ initials, name, role, email, phone }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start gap-5">
      <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#10b981] flex items-center justify-center font-bold text-xl shrink-0">
        {initials}
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="font-bold text-slate-800 text-lg">{name}</h3>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <MdMailOutline className="w-4 h-4" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <MdPhone className="w-4 h-4" />
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
}