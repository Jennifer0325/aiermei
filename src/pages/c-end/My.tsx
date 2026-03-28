import { User, ChevronRight, Phone, MessageSquare, Heart, Star, Settings, LogOut, ShieldCheck, Baby } from 'lucide-react';
import { CEndPage } from '../../types';

interface Props {
  onNavigate: (page: CEndPage) => void;
  onSwitchMode: () => void;
}

export default function My({ onNavigate, onSwitchMode }: Props) {
  const menuItems = [
    { id: 'phone', label: '联系电话', icon: <Phone className="w-5 h-5" /> },
    { id: 'wechat', label: '微信客服', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'member', label: '会员中心', icon: <ShieldCheck className="w-5 h-5" /> },
    { id: 'assistant', label: '育儿小管家', icon: <Baby className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* User Header */}
      <div className="bg-white px-6 pt-16 pb-10 rounded-b-[40px] shadow-sm mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center border-2 border-slate-50 shadow-inner overflow-hidden">
            <User className="w-10 h-10 text-slate-300" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 serif">Shawniqua</h2>
            <p className="text-sm text-slate-500 mt-1">爱儿美尊享会员</p>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="px-6 space-y-4">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          {menuItems.map((item, idx) => (
            <button 
              key={item.id}
              className={`w-full flex items-center justify-between p-5 text-left active:bg-slate-50 transition-colors ${idx !== menuItems.length - 1 ? 'border-b border-slate-50' : ''}`}
            >
              <div className="flex items-center text-slate-700">
                <span className="text-slate-400 mr-4">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </button>
          ))}
        </div>

        {/* B-End Access / Login Box */}
        <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden group active:scale-[0.98] transition-transform cursor-pointer" onClick={onSwitchMode}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <h4 className="font-bold text-lg mb-1">管理后台登录</h4>
              <p className="text-slate-400 text-xs">员工入口：进入内容生产与算力管理系统</p>
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Settings className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Logout */}
        <button className="w-full py-5 text-slate-400 text-sm font-medium flex items-center justify-center space-x-2">
          <LogOut className="w-4 h-4" />
          <span>退出登录</span>
        </button>
      </div>
    </div>
  );
}
