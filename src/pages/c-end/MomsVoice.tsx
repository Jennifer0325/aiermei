import React from 'react';

export default function MomsVoice() {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[400px] bg-slate-200 flex items-center justify-center border-b border-slate-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-400 mb-4">[妈妈说 Banner 图]</h1>
          <p className="text-slate-500">建议尺寸: 1920x400px</p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">[客户评价列表 标题]</h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
          <p className="text-slate-500 mt-4">[客户评价副标题/简介]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xs text-slate-400">头像</span>
                </div>
                <div>
                  <div className="h-4 bg-slate-200 rounded w-24 mb-1"></div>
                  <div className="h-3 bg-slate-100 rounded w-16"></div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="h-4 bg-slate-100 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-100 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-100 rounded w-full mb-2"></div>
                <div className="h-4 bg-slate-100 rounded w-3/4 mb-4"></div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                   <span className="text-[10px] text-slate-400">配图</span>
                </div>
                <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                   <span className="text-[10px] text-slate-400">配图</span>
                </div>
                <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                   <span className="text-[10px] text-slate-400">配图</span>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 mt-4 text-center">[客户评价内容、配图占位]</p>
            </div>
          ))}
        </div>

        {/* Pagination Placeholder */}
        <div className="mt-16 flex justify-center space-x-2">
           <div className="w-8 h-8 rounded border border-slate-300 flex items-center justify-center text-slate-400">&lt;</div>
           <div className="w-8 h-8 rounded bg-rose-500 text-white flex items-center justify-center">1</div>
           <div className="w-8 h-8 rounded border border-slate-300 flex items-center justify-center text-slate-600">2</div>
           <div className="w-8 h-8 rounded border border-slate-300 flex items-center justify-center text-slate-600">3</div>
           <div className="w-8 h-8 rounded border border-slate-300 flex items-center justify-center text-slate-400">&gt;</div>
        </div>
      </section>
    </div>
  );
}
