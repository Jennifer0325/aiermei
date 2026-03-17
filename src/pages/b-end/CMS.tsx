import { useState } from 'react';
import { FolderTree, FileText, Image as ImageIcon, Edit3, Save, Eye } from 'lucide-react';

export default function CMS() {
  const [activeNode, setActiveNode] = useState('home_banner');

  const treeData = [
    { id: 'home', label: '首页', children: [
      { id: 'home_banner', label: '首屏轮播图' },
      { id: 'home_services', label: '十二大服务体系' },
    ]},
    { id: 'brand', label: '品牌介绍', children: [
      { id: 'brand_story', label: '品牌故事' },
      { id: 'brand_team', label: '专家团队' },
    ]},
    { id: 'contact', label: '联系我们', children: [
      { id: 'contact_info', label: '联系方式' },
      { id: 'contact_map', label: '地图定位' },
    ]},
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col lg:flex-row gap-8">
      {/* Left Panel: Tree View */}
      <div className="w-full lg:w-1/4 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center">
          <FolderTree className="w-5 h-5 mr-2 text-slate-500" />
          <h2 className="text-lg font-bold text-slate-900">网站目录</h2>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {treeData.map(node => (
              <li key={node.id}>
                <div className="flex items-center text-sm font-medium text-slate-700 py-1.5 px-2 rounded hover:bg-slate-50 cursor-pointer">
                  <svg className="w-4 h-4 mr-2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {node.label}
                </div>
                <ul className="ml-6 mt-1 space-y-1 border-l border-slate-200 pl-2">
                  {node.children.map(child => (
                    <li key={child.id}>
                      <button 
                        onClick={() => setActiveNode(child.id)}
                        className={`w-full text-left text-sm py-1.5 px-3 rounded-md transition-colors ${
                          activeNode === child.id 
                            ? 'bg-rose-50 text-rose-700 font-medium' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        {child.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Panel: Editor */}
      <div className="w-full lg:w-3/4 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 flex items-center">
            <Edit3 className="w-5 h-5 mr-2 text-slate-500" />
            内容编辑 - {activeNode === 'home_banner' ? '首屏轮播图' : '其他板块'}
          </h2>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center">
              <Eye className="w-4 h-4 mr-2" />
              预览
            </button>
            <button className="px-4 py-2 bg-rose-600 text-white rounded-md text-sm font-medium hover:bg-rose-700 transition-colors flex items-center">
              <Save className="w-4 h-4 mr-2" />
              保存修改
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-8 bg-slate-50/50 overflow-y-auto">
          {activeNode === 'home_banner' ? (
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-md font-bold text-slate-900 mb-4 flex items-center">
                  <ImageIcon className="w-5 h-5 mr-2 text-rose-500" />
                  主视觉图片
                </h3>
                <div className="relative rounded-lg overflow-hidden border border-slate-200 group">
                  <img 
                    src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Banner" 
                    className="w-full h-64 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-slate-900 px-4 py-2 rounded-md font-medium text-sm hover:bg-slate-100">
                      更换图片
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2">建议尺寸：1920x1080px，格式：JPG/PNG，大小不超过2MB。</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-md font-bold text-slate-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-blue-500" />
                  文案内容
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">主标题 (H1)</label>
                  <input 
                    type="text" 
                    defaultValue="科学坐月子 爱儿美更懂你" 
                    className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">副标题</label>
                  <textarea 
                    defaultValue="融合现代医学与传统养生，为您和宝宝提供24小时N对1专属奢护。" 
                    className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm h-24 resize-none"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">按钮1文案</label>
                    <input type="text" defaultValue="预约参观" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">按钮1链接</label>
                    <input type="text" defaultValue="/contact" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400">
              <Edit3 className="w-16 h-16 mb-4 text-slate-200" />
              <p className="text-lg font-medium text-slate-500">请在左侧选择要编辑的板块</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
