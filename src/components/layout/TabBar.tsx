import { Home, MapPin, Utensils, Sparkles, MessageSquare, User } from 'lucide-react';
import { CEndPage } from '../../types';

interface Props {
  currentPage: CEndPage;
  onNavigate: (page: CEndPage) => void;
}

export default function TabBar({ currentPage, onNavigate }: Props) {
  const tabs = [
    { id: 'home', label: '首页', icon: <Home className="w-5 h-5" /> },
    { id: 'environment', label: '环境', icon: <MapPin className="w-5 h-5" /> },
    { id: 'meals', label: '膳食', icon: <Utensils className="w-5 h-5" /> },
    { id: 'recovery', label: '产后修复', icon: <Sparkles className="w-5 h-5" /> },
    { id: 'moms_voice', label: '妈妈说', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'my', label: '我的', icon: <User className="w-5 h-5" /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-100 px-2 pt-3 pb-8 flex justify-around items-center z-50 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.05)]">
      {tabs.map((tab) => {
        const isActive = currentPage === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id as CEndPage)}
            className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
              isActive ? 'text-rose-600 scale-105' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <div className={`p-1.5 rounded-xl transition-colors ${isActive ? 'bg-rose-50' : ''}`}>
              {tab.icon}
            </div>
            <span className={`text-[9px] font-bold tracking-tighter ${isActive ? 'opacity-100' : 'opacity-60'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
