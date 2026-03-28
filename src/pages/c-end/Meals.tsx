import { Heart, Activity, Sparkles, Star } from 'lucide-react';
import { CEndPage } from '../../types';

interface Props {
  onNavigate: (page: CEndPage) => void;
}

export default function Meals({ onNavigate }: Props) {
  const stages = [
    { name: '第一阶段：排', desc: '代谢排毒，温补脾胃', tags: ['猪肝', '红豆', '生化汤'] },
    { name: '第二阶段：调', desc: '调理气血，收缩子宫', tags: ['猪腰', '杜仲', '补血汤'] },
    { name: '第三阶段：补', desc: '滋补进补，增强体质', tags: ['鸡汤', '鱼汤', '滋补汤'] },
    { name: '第四阶段：塑', desc: '塑身养颜，恢复体能', tags: ['燕窝', '花胶', '塑身汤'] },
  ];

  return (
    <div className="space-y-12 pb-10">
      {/* Header */}
      <section className="px-6 pt-6 space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 serif">月子膳食</h2>
        <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">Postpartum Nutrition</p>
      </section>

      {/* Hero Image */}
      <section className="px-6">
        <div className="relative rounded-[40px] overflow-hidden aspect-[16/10] shadow-2xl">
          <img 
            src="https://picsum.photos/seed/meals_hero/1200/800" 
            alt="Meals Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-white font-bold text-2xl serif">科学膳食，匠心滋养</h3>
            <p className="text-white/70 text-xs mt-2">由资深营养师与星级大厨联袂打造</p>
          </div>
        </div>
      </section>

      {/* Concept */}
      <section className="px-6 space-y-8">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-bold text-slate-900 serif">膳食理念</h3>
          <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Concept</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { title: '阶段调理', icon: <Activity className="w-5 h-5" />, desc: '排、调、补、塑' },
            { title: '食材严选', icon: <Heart className="w-5 h-5" />, desc: '绿色有机直采' },
            { title: '匠心烹饪', icon: <Sparkles className="w-5 h-5" />, desc: '低盐低油低脂' },
            { title: '个性定制', icon: <Star className="w-5 h-5" />, desc: '专属营养方案' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-slate-50 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stages */}
      <section className="px-6 space-y-8">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-bold text-slate-900 serif">阶段食谱</h3>
          <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Stages</span>
        </div>

        <div className="space-y-6">
          {stages.map((stage, idx) => (
            <div key={idx} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center space-x-6">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl serif shrink-0">
                0{idx + 1}
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-lg serif">{stage.name}</h4>
                <p className="text-xs text-slate-500">{stage.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {stage.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] text-rose-400 font-bold tracking-wider">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
