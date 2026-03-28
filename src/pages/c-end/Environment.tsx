import { MapPin, Star, Shield } from 'lucide-react';
import { CEndPage } from '../../types';

interface Props {
  onNavigate: (page: CEndPage) => void;
}

export default function Environment({ onNavigate }: Props) {
  const rooms = [
    { name: '江景尊享套房', size: '120㎡', tags: ['一线江景', '独立新风', '智能家居'] },
    { name: '艺术雅致大床房', size: '80㎡', tags: ['艺术氛围', '恒温恒湿', '静谧舒适'] },
    { name: '阳光温馨双人间', size: '60㎡', tags: ['采光充足', '环保建材', '专业护理'] },
  ];

  return (
    <div className="space-y-12 pb-10">
      {/* Header */}
      <section className="px-6 pt-6 space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 serif">会所环境</h2>
        <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">Luxury Environment</p>
      </section>

      {/* Hero Image */}
      <section className="px-6">
        <div className="relative rounded-[40px] overflow-hidden aspect-[16/10] shadow-2xl">
          <img 
            src="https://picsum.photos/seed/env_hero/1200/800" 
            alt="Environment Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center space-x-2 border border-white/50 shadow-sm">
            <MapPin className="w-4 h-4 text-rose-500" />
            <span className="text-xs font-bold text-slate-900">上海 · 陆家嘴中心</span>
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <section className="px-6 space-y-8">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-bold text-slate-900 serif">房型展示</h3>
          <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Room Showcase</span>
        </div>

        <div className="space-y-8">
          {rooms.map((room, idx) => (
            <div key={idx} className="space-y-4 group">
              <div className="relative rounded-[32px] overflow-hidden aspect-video shadow-lg">
                <img 
                  src={`https://picsum.photos/seed/room_${idx}/800/600`} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-2 space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-slate-900 serif">{room.name}</h4>
                  <span className="text-rose-600 font-bold text-sm">{room.size}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {room.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Public Facilities */}
      <section className="bg-slate-900 rounded-[40px] mx-6 p-10 text-white space-y-8 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        <div className="relative space-y-2">
          <h3 className="text-2xl font-bold serif">公共设施</h3>
          <p className="text-slate-400 text-xs uppercase tracking-widest">Public Facilities</p>
        </div>
        
        <div className="relative grid grid-cols-2 gap-6">
          {[
            { name: '阳光瑜伽室', icon: <Star className="w-5 h-5" /> },
            { name: '恒温游泳池', icon: <Shield className="w-5 h-5" /> },
            { name: 'SPA水疗中心', icon: <Star className="w-5 h-5" /> },
            { name: '多功能宴会厅', icon: <Shield className="w-5 h-5" /> },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-rose-400">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-slate-200">{item.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
