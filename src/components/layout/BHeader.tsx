import { Bell, Search, User } from 'lucide-react';

export default function BHeader() {
  return (
    <header className="bg-white shadow-sm h-20 flex items-center justify-between px-8 border-b border-slate-200">
      <div className="flex items-center bg-slate-100 rounded-full px-4 py-2 w-96">
        <Search className="w-5 h-5 text-slate-400 mr-2" />
        <input
          type="text"
          placeholder="搜索知识库、生成记录..."
          className="bg-transparent border-none outline-none text-sm w-full text-slate-700 placeholder-slate-400"
        />
      </div>

      <div className="flex items-center space-x-6">
        <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center space-x-3 border-l pl-6 border-slate-200">
          <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
            <User className="w-6 h-6" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-slate-700">运营专员</p>
            <p className="text-xs text-slate-500">admin@ayrmei.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
