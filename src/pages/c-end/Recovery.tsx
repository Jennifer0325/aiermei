import React from 'react';

export default function Recovery() {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[400px] bg-slate-200 flex items-center justify-center border-b border-slate-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-400 mb-4">[产后修复 Banner 图]</h1>
          <p className="text-slate-500">建议尺寸: 1920x400px</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">[修复项目 标题]</h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
          <p className="text-slate-500 mt-4">[修复项目副标题/简介]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200 group hover:border-rose-300 transition-colors">
              <div className="aspect-square bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 text-sm">[项目图片]</span>
              </div>
              <div className="p-6 text-center">
                <div className="h-6 bg-slate-200 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-slate-100 rounded w-full mx-auto mb-4"></div>
                <p className="text-xs text-slate-400 mt-4">[项目名称、功效简介占位]</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">[核心仪器 标题]</h2>
            <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
            <p className="text-slate-500 mt-4">[核心仪器副标题/简介]</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
                <div className="aspect-[16/9] bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">[仪器图片]</span>
                </div>
                <div className="p-6">
                  <div className="h-6 bg-slate-200 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-slate-100 rounded w-full mb-2"></div>
                  <div className="h-4 bg-slate-100 rounded w-5/6 mb-4"></div>
                  <p className="text-xs text-slate-400 mt-4">[仪器名称、产地、功能简介占位]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
