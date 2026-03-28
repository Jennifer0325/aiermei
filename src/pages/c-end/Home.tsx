import { ArrowRight, Star, Heart, Activity, Shield, Sparkles } from 'lucide-react';
import { CEndPage } from '../../types';

interface Props {
  onNavigate: (page: CEndPage) => void;
}

export default function Home({ onNavigate }: Props) {
  const features = [
    { id: 'recovery', title: '专业护理', icon: <Heart className="w-5 h-5" />, desc: '24小时母婴同室护理' },
    { id: 'meals', title: '科学膳食', icon: <Activity className="w-5 h-5" />, desc: '阶段性营养调理' },
    { id: 'recovery', title: '产后修复', icon: <Sparkles className="w-5 h-5" />, desc: '身心全方位重塑' },
    { id: 'environment', title: '安全保障', icon: <Shield className="w-5 h-5" />, desc: '严苛感控管理体系' },
  ];

  return (
    <div className="space-y-10 pb-10">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden" onClick={() => onNavigate('environment')}>
        <img 
          src="https://picsum.photos/seed/maternity_luxury/800/1200" 
          alt="Luxury Maternity" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 pb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-[10px] text-white font-bold tracking-[0.2em] uppercase">Luxury Maternity Care</span>
            </div>
            <h2 className="text-4xl font-bold text-white leading-tight serif">
              爱儿美<br/>
              <span className="text-rose-300 italic">艺术</span>级月子生活
            </h2>
            <p className="text-slate-200 text-sm max-w-[280px] leading-relaxed">
              秉承“科学护理，艺术生活”理念，为新生家庭开启一段优雅的生命旅程。
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-6">
        <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 grid grid-cols-2 gap-8 relative -mt-20 z-10">
          <div className="text-center space-y-1">
            <div className="text-3xl font-bold text-slate-900 serif">10+</div>
            <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">服务城市</div>
          </div>
          <div className="text-center space-y-1 border-l border-slate-100">
            <div className="text-3xl font-bold text-slate-900 serif">5000+</div>
            <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">家庭选择</div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="px-6 space-y-6">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-slate-900 serif">核心服务</h3>
            <p className="text-xs text-slate-400 font-medium tracking-wide">CORE SERVICES</p>
          </div>
          <button onClick={() => onNavigate('recovery')} className="text-rose-600 text-xs font-bold flex items-center space-x-1">
            <span>查看全部</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate(f.id as CEndPage)}
              className="bg-white p-6 rounded-3xl border border-slate-50 shadow-sm space-y-3 hover:shadow-md transition-shadow active:scale-95 duration-200"
            >
              <div className="w-10 h-10 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600">
                {f.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">{f.title}</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Environment */}
      <section className="space-y-6">
        <div className="px-6">
          <h3 className="text-2xl font-bold text-slate-900 serif">尊享环境</h3>
          <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">Luxury Environment</p>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto px-6 pb-4 scrollbar-hide">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              onClick={() => onNavigate('environment')}
              className="min-w-[280px] relative rounded-[32px] overflow-hidden aspect-[4/5] group active:scale-95 duration-200"
            >
              <img 
                src={`https://picsum.photos/seed/env_${i}/600/800`} 
                alt="Environment" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <h4 className="text-white font-bold text-lg serif">江景套房 {i}</h4>
                <p className="text-white/60 text-xs">120㎡ · 独立新风 · 恒温恒湿</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="px-6">
        <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden active:scale-95 duration-200" onClick={() => onNavigate('environment')}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative space-y-6">
            <h3 className="text-3xl font-bold serif leading-tight">
              让爱<br/>
              成为一种<span className="text-rose-400 italic">艺术</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              我们相信，月子不仅是身体的修复，更是灵魂的洗礼。在爱儿美，每一份关怀都经过精心雕琢。
            </p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-rose-50 transition-colors">
              探索会所环境
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
