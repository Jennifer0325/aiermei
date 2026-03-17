import { ReactNode } from 'react';
import { BEndPage } from '../../types';
import { FileText, LogOut } from 'lucide-react';

interface Props {
  currentPage: BEndPage;
  onNavigate: (page: BEndPage) => void;
  onSwitchMode: () => void;
}

export default function BSidebar({ currentPage, onNavigate, onSwitchMode }: Props) {
  const navItems: { id: BEndPage; label: string; icon: ReactNode }[] = [
    { id: 'cms', label: '基础内容管理', icon: <FileText className="w-5 h-5 mr-3" /> },
  ];

  return (
    <div className="flex flex-col w-64 h-screen bg-slate-900 text-white border-r border-slate-800">
      <div className="flex items-center justify-center h-20 border-b border-slate-800">
        <span className="text-xl font-bold tracking-wider text-rose-400">爱儿美后台系统</span>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                currentPage === item.id
                  ? 'bg-rose-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={onSwitchMode}
          className="w-full flex items-center px-4 py-3 text-sm font-medium text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          退出登录 (返回官网)
        </button>
      </div>
    </div>
  );
}
