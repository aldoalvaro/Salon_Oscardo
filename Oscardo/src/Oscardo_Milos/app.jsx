// import React from 'react';
// // Menggunakan react-icons
// import { 
//   MdDashboard, MdPeople, MdBusiness, MdCreditCard, 
//   MdSettings, MdMenuBook, MdSearch, MdMenu, MdAttachMoney 
// } from 'react-icons/md';
// import { FiActivity, FiCheckSquare, FiBarChart2 } from 'react-icons/fi';

// import { 
//   AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
// } from 'recharts';

// // Data Mockup untuk Grafik
// const chartData = [
//   { name: 'Jan', total: 185000 },
//   { name: 'Feb', total: 198000 },
//   { name: 'Mar', total: 190000 },
//   { name: 'Apr', total: 225000 },
//   { name: 'May', total: 210000 },
//   { name: 'Jun', total: 235000 },
// ];

// export default function Dashboard() {
//   return (
//     <div className="flex h-screen bg-[#fafafa] font-sans text-slate-800">
      
//       {/* SIDEBAR */}
//       <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
//         <div className="h-16 flex items-center px-6 font-bold text-lg border-b border-slate-100">
//           Material Shadcn Vue
//         </div>
//         <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
//           <a href="#" className="flex items-center gap-3 bg-[#10b981] text-white px-4 py-2.5 rounded-lg shadow-sm font-medium">
//             <MdDashboard className="w-5 h-5" /> Dashboard
//           </a>
//           <a href="#" className="flex items-center gap-3 text-slate-500 hover:bg-slate-50 px-4 py-2.5 rounded-lg font-medium transition-colors">
//             <MdPeople className="w-5 h-5" /> Contacts
//           </a>
//           <a href="#" className="flex items-center gap-3 text-slate-500 hover:bg-slate-50 px-4 py-2.5 rounded-lg font-medium transition-colors">
//             <MdBusiness className="w-5 h-5" /> Companies
//           </a>
//           <a href="#" className="flex items-center gap-3 text-slate-500 hover:bg-slate-50 px-4 py-2.5 rounded-lg font-medium transition-colors">
//             <FiActivity className="w-5 h-5" /> Deals
//           </a>
//           <a href="#" className="flex items-center gap-3 text-slate-500 hover:bg-slate-50 px-4 py-2.5 rounded-lg font-medium transition-colors">
//             <FiCheckSquare className="w-5 h-5" /> Tasks
//           </a>
//           <a href="#" className="flex items-center gap-3 text-slate-500 hover:bg-slate-50 px-4 py-2.5 rounded-lg font-medium transition-colors">
//             <FiBarChart2 className="w-5 h-5" /> Reports
//           </a>
//           <a href="#" className="flex items-center gap-3 text-slate-500 hover:bg-slate-50 px-4 py-2.5 rounded-lg font-medium transition-colors">
//             <MdCreditCard className="w-5 h-5" /> Billing
//           </a>
//           <a href="#" className="flex items-center gap-3 text-slate-500 hover:bg-slate-50 px-4 py-2.5 rounded-lg font-medium transition-colors">
//             <MdSettings className="w-5 h-5" /> Settings
//           </a>
//           <a href="#" className="flex items-center gap-3 text-slate-500 hover:bg-slate-50 px-4 py-2.5 rounded-lg font-medium transition-colors">
//             <MdMenuBook className="w-5 h-5" /> Docs
//           </a>
//         </nav>
//       </aside>

//       {/* MAIN CONTENT AREA */}
//       <main className="flex-1 flex flex-col overflow-hidden">
        
//         {/* HEADER */}
//         <header className="h-16 bg-white flex items-center justify-between px-6 z-10 border-b border-slate-200">
//           <div className="flex items-center w-full max-w-md relative">
//             <MdSearch className="w-5 h-5 text-slate-400 absolute left-3" />
//             <input 
//               type="text" 
//               placeholder="Search..." 
//               className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all"
//             />
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="text-slate-500 hover:text-slate-700">
//               <MdMenu className="w-6 h-6" />
//             </button>
//             <button className="flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors">
//               <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
//               <span className="text-sm font-medium pr-1">Account</span>
//             </button>
//           </div>
//         </header>

//         {/* DASHBOARD CONTENT */}
//         <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
//           {/* Page Titles */}
//           <div>
//             <h1 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard</h1>
//             <p className="text-slate-500 mt-1">Welcome to your new CRM dashboard</p>
//           </div>

//           {/* STATS CARDS */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//             <StatCard title="Total Contacts" value="1,234" percentage="+12%" icon={<MdPeople className="w-6 h-6 text-slate-400" />} />
//             <StatCard title="Companies" value="456" percentage="+8%" icon={<MdBusiness className="w-6 h-6 text-slate-400" />} />
//             <StatCard title="Active Deals" value="89" percentage="+23%" icon={<FiActivity className="w-6 h-6 text-slate-400" />} />
//             <StatCard title="Revenue" value="$234,567" percentage="+18%" icon={<MdAttachMoney className="w-6 h-6 text-slate-400" />} />
//           </div>

//           {/* CHART */}
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//             <h2 className="text-lg font-semibold mb-6 text-slate-800">Revenue Trend</h2>
//             <div className="h-75 w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
//                   <defs>
//                     <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
//                       <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
//                   <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
//                   <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} tickFormatter={(value) => `$${value / 1000}k`} />
//                   <Tooltip />
//                   <Area type="monotone" dataKey="total" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* BOTTOM ROW (Activity & Tasks) */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
            
//             {/* Recent Activity */}
//             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//               <h2 className="text-lg font-semibold mb-6 text-slate-800">Recent Activity</h2>
//               <div className="space-y-6">
//                 <ActivityItem title="New contact added" desc="John Doe from Acme Corp" time="2 hours ago" />
//                 <ActivityItem title="Deal closed" desc="$45,000 deal with Tech Solutions" time="5 hours ago" />
//                 <ActivityItem title="Task completed" desc="Follow-up call with Jane Smith" time="1 day ago" isLast />
//               </div>
//             </div>

//             {/* Upcoming Tasks */}
//             <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//               <h2 className="text-lg font-semibold mb-6 text-slate-800">Upcoming Tasks</h2>
//               <div className="space-y-4">
//                 <TaskItem title="Call with prospect" time="Today at 2:00 PM" />
//                 <TaskItem title="Send proposal" time="Tomorrow at 10:00 AM" />
//                 <TaskItem title="Review contracts" time="Friday at 3:00 PM" />
//               </div>
//             </div>

//           </div>
          
//           {/* Footer */}
//           <footer className="pt-4 border-t border-slate-200 text-sm text-slate-500 flex justify-between items-center pb-8">
//             <p>© 2025, made with ❤️ by Creative Tim for a better web.</p>
//             <div className="flex gap-4">
//               <a href="#" className="hover:text-slate-800">About Us</a>
//               <a href="#" className="hover:text-slate-800">Blog</a>
//               <a href="#" className="hover:text-slate-800">License</a>
//             </div>
//           </footer>

//         </div>
//       </main>
//     </div>
//   );
// }

// // --- SUB-COMPONENTS ---

// function StatCard({ title, value, percentage, icon }) {
//   return (
//     <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
//       <div className="flex justify-between items-start mb-4">
//         <h3 className="font-medium text-slate-600 text-sm">{title}</h3>
//         {icon}
//       </div>
//       <div>
//         <h2 className="text-3xl font-bold text-slate-800 mb-1">{value}</h2>
//         <p className="text-sm text-slate-500">
//           <span className="text-[#10b981] font-medium">{percentage}</span> from last month
//         </p>
//       </div>
//     </div>
//   );
// }

// function ActivityItem({ title, desc, time, isLast }) {
//   return (
//     <div className="flex gap-4 relative">
//       {!isLast && <div className="absolute left-1.5 top-6 bottom-6 w-0.5 bg-slate-100"></div>}
//       <div className="w-3 h-3 bg-[#10b981] rounded-full mt-1.5 z-10 ring-4 ring-white shadow-sm"></div>
//       <div>
//         <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
//         <p className="text-slate-500 text-sm">{desc}</p>
//         <p className="text-slate-400 text-xs mt-1">{time}</p>
//       </div>
//     </div>
//   );
// }

// function TaskItem({ title, time }) {
//   return (
//     <div className="flex gap-3 items-start p-3 hover:bg-slate-50 rounded-lg transition-colors group cursor-pointer">
//       <div className="mt-0.5">
//         <div className="w-5 h-5 border-2 border-slate-300 rounded focus-within:border-[#10b981] flex items-center justify-center bg-white group-hover:border-[#10b981] transition-colors"></div>
//       </div>
//       <div>
//         <h4 className="font-medium text-slate-800 text-sm">{title}</h4>
//         <p className="text-slate-500 text-xs mt-0.5">{time}</p>
//       </div>
//     </div>
//   );
// }