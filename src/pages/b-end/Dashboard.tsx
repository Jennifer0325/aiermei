import { BarChart3, Users, FileText, Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: '知识库文档总数', value: '1,284', change: '+12%', trend: 'up', icon: <FileText className="w-6 h-6 text-blue-500" /> },
    { title: '本月AI生成文章', value: '342', change: '+24%', trend: 'up', icon: <Zap className="w-6 h-6 text-amber-500" /> },
    { title: '官网访问量 (UV)', value: '45.2K', change: '+8.4%', trend: 'up', icon: <Users className="w-6 h-6 text-emerald-500" /> },
    { title: '转化率', value: '3.2%', change: '-1.1%', trend: 'down', icon: <BarChart3 className="w-6 h-6 text-rose-500" /> },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">仪表盘</h1>
          <p className="text-sm text-slate-500 mt-1">欢迎回来，这是您官网AI引擎的运行概况。</p>
        </div>
        <button className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors shadow-sm">
          生成报告
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-50 rounded-lg">
                {stat.icon}
              </div>
              <span className={`flex items-center text-sm font-medium ${
                stat.trend === 'up' ? 'text-emerald-600' : 'text-rose-600'
              }`}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-slate-500">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart Area */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900">内容生成与流量趋势</h2>
            <select className="text-sm border-slate-200 rounded-md text-slate-600">
              <option>最近30天</option>
              <option>本季度</option>
              <option>今年</option>
            </select>
          </div>
          <div className="h-72 flex items-center justify-center bg-slate-50 rounded-lg border border-slate-100 border-dashed">
            <p className="text-slate-400 text-sm">图表占位符 (可接入 ECharts/Recharts)</p>
          </div>
        </div>

        {/* System Status / Logs */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900">系统状态通知</h2>
            <button className="text-sm text-rose-600 hover:text-rose-700 font-medium">查看全部</button>
          </div>
          
          <div className="space-y-4">
            {[
              { time: '10分钟前', title: '自动生成任务完成', desc: '成功生成 5 篇月子膳食百科文章', status: 'success' },
              { time: '2小时前', title: '知识库解析完成', desc: '《2026春季产康标准手册.pdf》已入库', status: 'success' },
              { time: '昨天 15:30', title: '生成任务异常', desc: 'API调用超时，已自动重试', status: 'warning' },
              { time: '昨天 09:00', title: '自动发布成功', desc: '发布 1 篇客户案例至“妈妈说”板块', status: 'success' },
            ].map((log, index) => (
              <div key={index} className="flex items-start pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                  log.status === 'success' ? 'bg-emerald-500' : 'bg-amber-500'
                }`}></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-800">{log.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{log.desc}</p>
                  <p className="text-xs text-slate-400 mt-1">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
