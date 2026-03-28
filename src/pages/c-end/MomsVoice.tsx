import { Star, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { CEndPage } from '../../types';

interface Props {
  onNavigate: (page: CEndPage) => void;
}

export default function MomsVoice({ onNavigate }: Props) {
  const reviews = [
    { name: '林女士', date: '2024.03.15', room: '江景尊享套房', content: '在这里度过了一个非常完美的月子。护理团队非常专业，膳食也非常合胃口，特别是产后修复项目，让我恢复得很快。', tags: ['专业护理', '环境优美', '膳食精美'] },
    { name: '张女士', date: '2024.02.20', room: '艺术雅致大床房', content: '环境真的没话说，像住在艺术馆里一样。育儿小管家帮我解决了很多育儿初期的焦虑，非常感谢。', tags: ['艺术氛围', '贴心管家', '科学育儿'] },
    { name: '王女士', date: '2024.01.10', room: '阳光温馨双人间', content: '性价比很高，服务态度非常好。每一位工作人员都充满了爱心，让我在月子期间感受到了家一样的温暖。', tags: ['高性价比', '服务热情', '温馨如家'] },
  ];

  return (
    <div className="space-y-12 pb-10">
      {/* Header */}
      <section className="px-6 pt-6 space-y-2">
        <h2 className="text-3xl font-bold text-slate-900 serif">妈妈心声</h2>
        <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">Moms' Voice</p>
      </section>

      {/* Hero Image */}
      <section className="px-6">
        <div className="relative rounded-[40px] overflow-hidden aspect-[16/10] shadow-2xl">
          <img 
            src="https://picsum.photos/seed/voice_hero/1200/800" 
            alt="Moms Voice Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 flex flex-col justify-end">
            <h3 className="text-white font-bold text-2xl serif">口碑见证，爱与信任</h3>
            <p className="text-white/70 text-xs mt-2">数千位妈妈的共同选择</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 grid grid-cols-3 gap-4">
        {[
          { label: '满意度', value: '99%', icon: <Star className="w-4 h-4" /> },
          { label: '好评数', value: '5000+', icon: <MessageCircle className="w-4 h-4" /> },
          { label: '推荐率', value: '95%', icon: <Heart className="w-4 h-4" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-50 shadow-sm text-center space-y-2">
            <div className="w-8 h-8 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mx-auto">
              {stat.icon}
            </div>
            <div className="space-y-1">
              <p className="text-xl font-black text-slate-900 serif">{stat.value}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{stat.label}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Reviews List */}
      <section className="px-6 space-y-8">
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-bold text-slate-900 serif">真实评价</h3>
          <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">Reviews</span>
        </div>

        <div className="space-y-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    <p className="text-[10px] text-slate-400">{review.date} · {review.room}</p>
                  </div>
                </div>
                <div className="flex space-x-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 text-rose-400 fill-rose-400" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed serif italic">
                "{review.content}"
              </p>
              <div className="flex flex-wrap gap-2">
                {review.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-3 py-1 bg-rose-50 text-rose-500 text-[10px] font-bold rounded-full tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="bg-slate-900 rounded-[40px] p-10 text-center space-y-6">
          <h3 className="text-white text-2xl font-bold serif">分享您的故事</h3>
          <p className="text-slate-400 text-xs leading-relaxed">您的每一份反馈，都是我们前进的动力</p>
          <button className="w-full py-4 bg-rose-500 text-white rounded-2xl font-bold text-sm tracking-widest uppercase shadow-lg shadow-rose-500/20 active:scale-95 transition-transform">
            立即评价
          </button>
        </div>
      </section>
    </div>
  );
}
