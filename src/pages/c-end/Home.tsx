export default function Home() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Banner Wireframe */}
      <div className="w-full h-[600px] bg-slate-200 flex items-center justify-center border-b border-slate-300">
        <div className="text-center">
          <span className="text-slate-500 text-2xl font-bold tracking-widest block mb-2">首页主视觉 Banner</span>
          <span className="text-slate-400 text-sm">建议尺寸: 1920 x 600</span>
        </div>
      </div>

      {/* About Section Wireframe */}
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-10">
        <div className="flex-1 bg-slate-100 h-[400px] flex items-center justify-center border border-slate-200 rounded-lg">
          <span className="text-slate-400 font-medium">品牌简介配图 (800 x 600)</span>
        </div>
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <div className="h-10 bg-slate-200 w-1/2 rounded"></div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-100 w-full rounded"></div>
            <div className="h-4 bg-slate-100 w-full rounded"></div>
            <div className="h-4 bg-slate-100 w-full rounded"></div>
            <div className="h-4 bg-slate-100 w-3/4 rounded"></div>
          </div>
          <div className="h-12 bg-slate-200 w-32 mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Core Services Wireframe */}
      <div className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-10 bg-slate-200 w-64 mx-auto rounded mb-4"></div>
            <div className="h-4 bg-slate-200 w-96 mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-48 bg-white border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                  <span className="text-slate-300 text-xs">Icon</span>
                </div>
                <div className="h-5 bg-slate-100 w-24 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environment Preview Wireframe */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-10 bg-slate-200 w-64 mx-auto rounded mb-4"></div>
            <div className="h-4 bg-slate-200 w-96 mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="h-64 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400">环境图 (600 x 400)</span>
                </div>
                <div className="h-6 bg-slate-100 w-3/4 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
