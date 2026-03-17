import { useState } from 'react';
import { UploadCloud, FileText, Search, MoreVertical, Tag, Trash2, CheckCircle, Clock } from 'lucide-react';

export default function KnowledgeBase() {
  const [activeTab, setActiveTab] = useState('all');

  const documents = [
    { id: 1, name: '2026春季月子餐单标准.pdf', type: 'pdf', size: '2.4 MB', uploadTime: '2026-03-15 10:30', status: 'parsed', tags: ['膳食', '春季'] },
    { id: 2, name: '产后盆底肌修复操作规范.docx', type: 'word', size: '1.1 MB', uploadTime: '2026-03-14 15:45', status: 'parsed', tags: ['产康', '规范'] },
    { id: 3, name: '客户王女士(二胎)服务记录.txt', type: 'txt', size: '45 KB', uploadTime: '2026-03-12 09:15', status: 'parsed', tags: ['案例', '二胎'] },
    { id: 4, name: '新生儿黄疸护理指南_内部版.pdf', type: 'pdf', size: '3.8 MB', uploadTime: '2026-03-10 14:20', status: 'parsing', tags: ['儿科', '护理'] },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">企业知识库管理</h1>
          <p className="text-sm text-slate-500 mt-1">上传标准手册、案例资料，为AI引擎提供专业“大脑”。</p>
        </div>
        <button className="bg-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors shadow-sm flex items-center">
          <UploadCloud className="w-4 h-4 mr-2" />
          上传文档
        </button>
      </div>

      {/* Upload Area */}
      <div className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-12 text-center mb-8 hover:border-rose-400 hover:bg-rose-50 transition-colors cursor-pointer">
        <div className="mx-auto w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
          <UploadCloud className="w-8 h-8 text-rose-600" />
        </div>
        <h3 className="text-lg font-medium text-slate-900 mb-2">点击或拖拽文件至此上传</h3>
        <p className="text-sm text-slate-500 mb-4">支持 PDF, Word, TXT 格式，单文件不超过 50MB</p>
        <button className="text-rose-600 font-medium text-sm hover:underline">浏览文件</button>
      </div>

      {/* Document List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <div className="flex space-x-6">
            <button className={`text-sm font-medium pb-4 -mb-4 border-b-2 ${activeTab === 'all' ? 'border-rose-600 text-rose-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`} onClick={() => setActiveTab('all')}>全部文档</button>
            <button className={`text-sm font-medium pb-4 -mb-4 border-b-2 ${activeTab === 'parsed' ? 'border-rose-600 text-rose-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`} onClick={() => setActiveTab('parsed')}>已解析</button>
            <button className={`text-sm font-medium pb-4 -mb-4 border-b-2 ${activeTab === 'parsing' ? 'border-rose-600 text-rose-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`} onClick={() => setActiveTab('parsing')}>解析中</button>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="搜索文档名称或标签..." 
              className="pl-9 pr-4 py-1.5 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent w-64"
            />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
              <th className="p-4 font-medium">文档名称</th>
              <th className="p-4 font-medium">标签</th>
              <th className="p-4 font-medium">上传时间</th>
              <th className="p-4 font-medium">解析状态</th>
              <th className="p-4 font-medium text-right">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center">
                    <FileText className={`w-5 h-5 mr-3 ${doc.type === 'pdf' ? 'text-red-500' : doc.type === 'word' ? 'text-blue-500' : 'text-slate-500'}`} />
                    <div>
                      <p className="text-sm font-medium text-slate-900">{doc.name}</p>
                      <p className="text-xs text-slate-500">{doc.size}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {doc.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        <Tag className="w-3 h-3 mr-1 text-slate-400" />
                        {tag}
                      </span>
                    ))}
                    <button className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border border-dashed border-slate-300 text-slate-400 hover:text-rose-600 hover:border-rose-300 transition-colors">
                      + 添加
                    </button>
                  </div>
                </td>
                <td className="p-4 text-sm text-slate-500">{doc.uploadTime}</td>
                <td className="p-4">
                  {doc.status === 'parsed' ? (
                    <span className="inline-flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      <CheckCircle className="w-3 h-3 mr-1" /> 已解析
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 mr-1" /> 解析中
                    </span>
                  )}
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors" title="删除">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors" title="更多">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50">
          <span>显示 1 至 4 条，共 1,284 条记录</span>
          <div className="flex space-x-1">
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white disabled:opacity-50" disabled>上一页</button>
            <button className="px-3 py-1 border border-slate-200 rounded bg-rose-600 text-white">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white">3</button>
            <span className="px-2 py-1">...</span>
            <button className="px-3 py-1 border border-slate-200 rounded hover:bg-white">下一页</button>
          </div>
        </div>
      </div>
    </div>
  );
}
