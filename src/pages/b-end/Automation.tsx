import { useState } from 'react';
import { Plus, Clock, Settings, ToggleLeft, ToggleRight, Trash2, Edit3, ShieldAlert } from 'lucide-react';

export default function Automation() {
  const [rules, setRules] = useState([
    { id: 1, name: '每周百科更新', target: '月子百科', frequency: '每周 2 篇', tags: ['膳食', '产康'], autoPublish: false, active: true },
    { id: 2, name: '客户案例生成', target: '妈妈说', frequency: '每月 5 篇', tags: ['案例', '好评'], autoPublish: true, active: true },
    { id: 3, name: '行业动态抓取', target: '中心动态', frequency: '每周 1 篇', tags: ['新闻', '政策'], autoPublish: false, active: false },
  ]);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">自动化生成策略</h1>
          <p className="text-sm text-slate-500 mt-1">配置定时任务，实现官网内容的半自动化更新，保持GEO活跃度。</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors shadow-sm flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          新建策略
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
              <th className="p-4 font-medium">策略名称</th>
              <th className="p-4 font-medium">目标栏目</th>
              <th className="p-4 font-medium">生成频率</th>
              <th className="p-4 font-medium">参考知识范围</th>
              <th className="p-4 font-medium text-center">发布模式</th>
              <th className="p-4 font-medium text-center">状态</th>
              <th className="p-4 font-medium text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rules.map((rule) => (
              <tr key={rule.id} className={`hover:bg-slate-50 transition-colors ${!rule.active ? 'opacity-60' : ''}`}>
                <td className="p-4">
                  <div className="flex items-center">
                    <Settings className="w-5 h-5 mr-3 text-slate-400" />
                    <span className="text-sm font-medium text-slate-900">{rule.name}</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-slate-600">{rule.target}</td>
                <td className="p-4">
                  <span className="inline-flex items-center text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full border border-blue-100">
                    <Clock className="w-3 h-3 mr-1" /> {rule.frequency}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {rule.tags.map(tag => (
                      <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{tag}</span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-center">
                  {rule.autoPublish ? (
                    <span className="text-xs font-medium text-emerald-600 flex items-center justify-center">
                      <ShieldAlert className="w-3 h-3 mr-1" /> 自动发布
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-amber-600 flex items-center justify-center">
                      <Clock className="w-3 h-3 mr-1" /> 需人工审核
                    </span>
                  )}
                </td>
                <td className="p-4 text-center">
                  <button 
                    onClick={() => {
                      const newRules = [...rules];
                      const index = newRules.findIndex(r => r.id === rule.id);
                      newRules[index].active = !newRules[index].active;
                      setRules(newRules);
                    }}
                    className={`text-2xl ${rule.active ? 'text-emerald-500' : 'text-slate-300'}`}
                  >
                    {rule.active ? <ToggleRight /> : <ToggleLeft />}
                  </button>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors" title="编辑">
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors" title="删除">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-900">新建自动化策略</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">策略名称</label>
                <input type="text" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder="例如：每周百科更新" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">目标栏目</label>
                <select className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm">
                  <option>月子百科</option>
                  <option>妈妈说</option>
                  <option>中心动态</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">生成频率</label>
                  <select className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm">
                    <option>每天</option>
                    <option>每周</option>
                    <option>每月</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">生成数量</label>
                  <input type="number" min="1" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder="1" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">参考知识范围 (标签)</label>
                <input type="text" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" placeholder="输入标签按回车添加" />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                <div>
                  <p className="text-sm font-medium text-slate-900">自动发布</p>
                  <p className="text-xs text-slate-500 mt-0.5">开启后，AI生成的内容将直接发布至官网，无需人工审核。</p>
                </div>
                <button className="text-3xl text-slate-300 hover:text-slate-400 transition-colors">
                  <ToggleLeft />
                </button>
              </div>
            </div>

            <div className="p-6 border-t border-slate-200 bg-slate-50 flex justify-end space-x-3">
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-rose-600 text-white rounded-md text-sm font-medium hover:bg-rose-700 transition-colors"
              >
                保存策略
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
