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

      {/* Brand Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">[品牌故事 标题]</h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
            <span className="text-slate-400 font-medium">[品牌宣传视频/图片]</span>
          </div>
          <div className="space-y-6">
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-2/3"></div>
            <p className="text-sm text-slate-400 mt-4">[品牌故事详细文案占位]</p>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">[专家团队 标题]</h2>
            <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
            <p className="text-slate-500 mt-4">[专家团队副标题/简介]</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
                <div className="aspect-[3/4] bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">[专家半身像]</span>
                </div>
                <div className="p-6 text-center">
                  <div className="h-6 bg-slate-200 rounded w-1/2 mx-auto mb-2"></div>
                  <div className="h-4 bg-slate-100 rounded w-3/4 mx-auto mb-4"></div>
                  <div className="h-3 bg-slate-50 rounded w-full mb-1"></div>
                  <div className="h-3 bg-slate-50 rounded w-5/6 mx-auto"></div>
                  <p className="text-xs text-slate-400 mt-4">[专家姓名、头衔、简介占位]</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">[资质荣誉 标题]</h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-[4/3] bg-slate-100 rounded-lg flex flex-col items-center justify-center border border-slate-200 p-4">
               <div className="w-16 h-16 bg-slate-200 rounded-full mb-3 flex items-center justify-center">
                 <span className="text-xs text-slate-400">图标</span>
               </div>
               <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
               <p className="text-xs text-slate-400 text-center">[荣誉证书/奖牌占位]</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
