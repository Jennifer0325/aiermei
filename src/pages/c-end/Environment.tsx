import React from 'react';

export default function Environment() {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[400px] bg-slate-200 flex items-center justify-center border-b border-slate-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-400 mb-4">[会所环境 Banner 图]</h1>
          <p className="text-slate-500">建议尺寸: 1920x400px</p>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">[房型展示 标题]</h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
          <p className="text-slate-500 mt-4">[房型展示副标题/简介]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 group">
              <div className="aspect-[4/3] bg-slate-200 flex items-center justify-center relative overflow-hidden">
                <span className="text-slate-400 text-sm z-10">[房型图片]</span>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="bg-white text-slate-900 px-4 py-2 rounded-md font-medium text-sm hover:bg-slate-100">查看详情</button>
                </div>
              </div>
              <div className="p-6">
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-slate-100 rounded w-full mb-4"></div>
                
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100">
                   <div className="h-3 bg-slate-50 rounded w-full"></div>
                   <div className="h-3 bg-slate-50 rounded w-full"></div>
                   <div className="h-3 bg-slate-50 rounded w-full"></div>
                   <div className="h-3 bg-slate-50 rounded w-full"></div>
                </div>
                <p className="text-xs text-slate-400 mt-4">[房型名称、面积、配套设施占位]</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Public Facilities Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">[公共设施 标题]</h2>
            <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
            <p className="text-slate-500 mt-4">[公共设施副标题/简介]</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-slate-100 rounded-lg flex flex-col items-center justify-center border border-slate-200 p-4 group overflow-hidden relative">
                 <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                    <span className="text-xs text-slate-400">[设施图片]</span>
                 </div>
                 <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4 text-center">
                    <div className="h-4 bg-white/20 rounded w-3/4 mb-2"></div>
                    <p className="text-xs text-white/70">[设施名称及简介]</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
