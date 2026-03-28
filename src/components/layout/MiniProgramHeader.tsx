import { Search, Bell, Menu } from 'lucide-react';
import { CEndPage } from '../../types';

interface Props {
  currentPage: CEndPage;
  onNavigate: (page: CEndPage) => void;
  onSwitchMode: () => void;
}

export default function MiniProgramHeader({ currentPage, onNavigate, onSwitchMode }: Props) {
  const getTitle = () => {
    switch (currentPage) {
      case 'home': return '爱儿美月子会所';
      case 'environment': return '会所环境';
      case 'meals': return '月子膳食';
      case 'recovery': return '产后修复';
      case 'moms_voice': return '妈妈说';
      case 'my': return '我的中心';
      default: return '爱儿美';
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 h-16 px-6 flex justify-between items-center z-50 shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center shadow-lg shadow-rose-200">
          <span className="text-white font-black text-xs">AM</span>
        </div>
        <h1 className="text-sm font-bold text-slate-900 tracking-wider serif">{getTitle()}</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </div>
  );
}
