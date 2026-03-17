import React from 'react';

export default function Brand() {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[400px] bg-slate-200 flex items-center justify-center border-b border-slate-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-400 mb-4">[品牌介绍 Banner 图]</h1>
          <p className="text-slate-500">建议尺寸: 1920x400px</p>
        </div>
      </section>

      {/* 品牌简介 Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">[品牌简介 标题]</h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
            <span className="text-slate-400 font-medium">[品牌简介配图/视频]</span>
          </div>
          <div className="space-y-6">
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            <p className="text-sm text-slate-400 mt-4">[品牌简介详细文案占位]</p>
          </div>
        </div>
      </section>

      {/* 护理环境 Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">[护理环境 标题]</h2>
            <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
            <p className="text-slate-500 mt-4">[护理环境副标题/简介]</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
                <div className="aspect-[4/3] bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">[环境实景图]</span>
                </div>
                <div className="p-4 text-center">
                  <div className="h-5 bg-slate-200 rounded w-1/2 mx-auto mb-2"></div>
                  <p className="text-xs text-slate-400">[环境区域名称占位]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
