import React from 'react';

export default function Meals() {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[400px] bg-slate-200 flex items-center justify-center border-b border-slate-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-400 mb-4">[月子膳食 Banner 图]</h1>
          <p className="text-slate-500">建议尺寸: 1920x400px</p>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">[膳食理念 标题]</h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="h-6 bg-slate-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-slate-100 rounded w-full"></div>
            <div className="h-4 bg-slate-100 rounded w-full"></div>
            <div className="h-4 bg-slate-100 rounded w-5/6"></div>
            <div className="h-4 bg-slate-100 rounded w-full"></div>
            <div className="h-4 bg-slate-100 rounded w-2/3"></div>
            <p className="text-sm text-slate-400 mt-4">[膳食理念详细文案占位：清、调、补、养等阶段性理念]</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                <span className="text-slate-400 text-sm">[理念配图1]</span>
             </div>
             <div className="aspect-square bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 mt-8">
                <span className="text-slate-400 text-sm">[理念配图2]</span>
             </div>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">[阶段食谱 标题]</h2>
            <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
            <p className="text-slate-500 mt-4">[阶段食谱副标题/简介]</p>
          </div>

          {/* Tabs Placeholder */}
          <div className="flex justify-center space-x-4 mb-12">
            {['第一阶段：清', '第二阶段：调', '第三阶段：补', '第四阶段：养'].map((tab, index) => (
              <div key={index} className={`px-6 py-3 rounded-full text-sm font-medium border ${index === 0 ? 'bg-rose-100 text-rose-700 border-rose-200' : 'bg-white text-slate-600 border-slate-200'}`}>
                {tab}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
                <div className="aspect-[4/3] bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">[菜品图片]</span>
                </div>
                <div className="p-6 text-center">
                  <div className="h-6 bg-slate-200 rounded w-2/3 mx-auto mb-2"></div>
                  <div className="h-4 bg-slate-100 rounded w-full mx-auto mb-4"></div>
                  <p className="text-xs text-slate-400 mt-4">[菜品名称、功效简介占位]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
