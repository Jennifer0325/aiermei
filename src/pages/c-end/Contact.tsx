import React from 'react';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[400px] bg-slate-200 flex items-center justify-center border-b border-slate-300">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-400 mb-4">[联系我们 Banner 图]</h1>
          <p className="text-slate-500">建议尺寸: 1920x400px</p>
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">[联系方式 标题]</h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <span className="text-xs text-rose-500">图标</span>
                </div>
                <div>
                  <div className="h-5 bg-slate-200 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-slate-100 rounded w-64"></div>
                  <p className="text-xs text-slate-400 mt-2">[地址信息占位]</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <span className="text-xs text-rose-500">图标</span>
                </div>
                <div>
                  <div className="h-5 bg-slate-200 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-slate-100 rounded w-48"></div>
                  <p className="text-xs text-slate-400 mt-2">[电话信息占位]</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <span className="text-xs text-rose-500">图标</span>
                </div>
                <div>
                  <div className="h-5 bg-slate-200 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-slate-100 rounded w-48"></div>
                  <p className="text-xs text-slate-400 mt-2">[营业时间占位]</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 bg-slate-200 mb-4 flex items-center justify-center">
                     <span className="text-sm text-slate-400">二维码</span>
                  </div>
                  <div className="h-4 bg-slate-200 rounded w-24"></div>
                  <p className="text-xs text-slate-400 mt-2">[官方微信占位]</p>
               </div>
               <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center">
                  <div className="w-32 h-32 bg-slate-200 mb-4 flex items-center justify-center">
                     <span className="text-sm text-slate-400">二维码</span>
                  </div>
                  <div className="h-4 bg-slate-200 rounded w-24"></div>
                  <p className="text-xs text-slate-400 mt-2">[官方微博/小红书占位]</p>
               </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center min-h-[500px]">
            <div className="text-center">
              <span className="text-slate-400 text-lg font-medium">[地图定位 插件占位]</span>
              <p className="text-slate-500 mt-2">此处将嵌入百度/高德地图API</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
