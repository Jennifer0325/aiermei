import { Activity, Shield, Star, Heart, Sparkles } from 'lucide-react';
import { CEndPage } from '../../types';

interface Props {
  onNavigate: (page: CEndPage) => void;
}

export default function Recovery({ onNavigate }: Props) {
  const services = [
    { name: '产后体质调理', icon: <Activity className="w-6 h-6" />, desc: '科学评估，精准调理' },
    { name: '盆底肌修复', icon: <Shield className="w-6 h-6" />, desc: '专业设备，高效恢复' },
    { name: '腹直肌修复', icon: <Star className="w-6 h-6" />, desc: '核心重塑，重拾曲线' },
    { name: '产后心理疏导', icon: <Heart className="w-6 h-6" />, desc: '温柔倾听，心灵慰藉' },
    { name: '产后塑形瑜伽', icon: <Sparkles className="w-6 h-6" />, desc: '优雅律动，重塑自我' },
    { name: '乳腺疏通护理', icon: <Activity className="w-6 h-6" />, desc: '专业手法，告别疼痛' },
  ];

  return (
    <div className="space-y-12 pb-10">
      {/* Header */}
      <section className="px-6 pt-6 space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 serif">产后修复</h2>
        <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">Postpartum Recovery</p>
      </section>

      {/* Hero Image */}
      <section className="px-6">
        <div className="relative rounded-[40px] overflow-hidden aspect-[16/10] shadow-2xl">
          <img 
            src="https://picsum.photos/seed/recovery_hero/1200/800" 
            alt="Recovery Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-white font-bold text-2xl serif">重塑美丽，优雅回归</h3>
            <p className="text-white/70 text-xs mt-2">全方位产后健康管理体系</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 space-y-8">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-bold text-slate-900 serif">修复项目</h3>
          <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Services</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm space-y-4 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">{service.name}</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recovery Plan */}
      <section className="bg-slate-900 rounded-[40px] mx-6 p-10 text-white space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative space-y-2">
          <h3 className="text-2xl font-bold serif">定制修复方案</h3>
          <p className="text-slate-400 text-xs uppercase tracking-widest">Custom Plan</p>
        </div>
        
        <div className="relative space-y-6">
          {[
            { step: '01', title: '健康评估', desc: '多维度身体机能检测' },
            { step: '02', title: '方案制定', desc: '专家团队量身定制' },
            { step: '03', title: '专业执行', desc: '资深技师一对一服务' },
            { step: '04', title: '效果跟踪', desc: '阶段性评估与动态调整' },
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-rose-400 font-bold serif">
                {item.step}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-100">{item.title}</h4>
                <p className="text-[10px] text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
