import { useState } from 'react';
import { FolderTree, FileText, Image as ImageIcon, Edit3, Save, Eye } from 'lucide-react';

export default function CMS() {
  const [activeNode, setActiveNode] = useState('home_banner');

  const treeData = [
    { id: 'home', label: '首页', children: [
      { id: 'home_banner', label: '首屏轮播图' },
      { id: 'home_about', label: '品牌简介' },
      { id: 'home_services', label: '核心服务' },
      { id: 'home_env', label: '环境展示' },
    ]},
    { id: 'brand', label: '品牌介绍', children: [
      { id: 'brand_banner', label: '顶部Banner' },
      { id: 'brand_story', label: '品牌故事' },
      { id: 'brand_team', label: '专家团队' },
      { id: 'brand_honors', label: '资质荣誉' },
    ]},
    { id: 'environment', label: '会所环境', children: [
      { id: 'env_banner', label: '顶部Banner' },
      { id: 'env_rooms', label: '房型展示' },
      { id: 'env_public', label: '公共设施' },
    ]},
    { id: 'meals', label: '月子膳食', children: [
      { id: 'meals_banner', label: '顶部Banner' },
      { id: 'meals_concept', label: '膳食理念' },
      { id: 'meals_stages', label: '阶段食谱' },
    ]},
    { id: 'recovery', label: '产后修复', children: [
      { id: 'recovery_banner', label: '顶部Banner' },
      { id: 'recovery_projects', label: '修复项目' },
      { id: 'recovery_equip', label: '核心仪器' },
    ]},
    { id: 'moms_voice', label: '妈妈说', children: [
      { id: 'voice_banner', label: '顶部Banner' },
      { id: 'voice_list', label: '客户评价列表' },
    ]},
    { id: 'contact', label: '联系我们', children: [
      { id: 'contact_banner', label: '顶部Banner' },
      { id: 'contact_info', label: '联系方式' },
      { id: 'contact_map', label: '门店地图' },
    ]},
  ];

  const getActiveNodeLabel = () => {
    for (const group of treeData) {
      const child = group.children.find(c => c.id === activeNode);
      if (child) return `${group.label} - ${child.label}`;
    }
    return '未选择';
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col lg:flex-row gap-8">
      {/* Left Panel: Tree View */}
      <div className="w-full lg:w-1/4 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center">
          <FolderTree className="w-5 h-5 mr-2 text-slate-500" />
          <h2 className="text-lg font-bold text-slate-900">网站目录</h2>
        </div>
        <div className="p-4 flex-1 overflow-y-auto">
          <ul className="space-y-4">
            {treeData.map(node => (
              <li key={node.id}>
                <div className="flex items-center text-sm font-bold text-slate-800 py-1.5 px-2 rounded bg-slate-100 mb-1">
                  {node.label}
                </div>
                <ul className="ml-2 space-y-1 border-l-2 border-slate-100 pl-2">
                  {node.children.map(child => (
                    <li key={child.id}>
                      <button 
                        onClick={() => setActiveNode(child.id)}
                        className={`w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
                          activeNode === child.id 
                            ? 'bg-rose-50 text-rose-700 font-medium border border-rose-100' 
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
            内容编辑 : {getActiveNodeLabel()}
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
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Generic Image Upload Block */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-md font-bold text-slate-900 mb-4 flex items-center">
                <ImageIcon className="w-5 h-5 mr-2 text-rose-500" />
                配图管理
              </h3>
              <div className="relative rounded-lg overflow-hidden border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center p-12 group hover:border-rose-400 transition-colors cursor-pointer">
                <ImageIcon className="w-12 h-12 text-slate-300 mb-3 group-hover:text-rose-400 transition-colors" />
                <p className="text-sm font-medium text-slate-600">点击或拖拽上传图片</p>
                <p className="text-xs text-slate-400 mt-1">支持 JPG/PNG，大小不超过 5MB</p>
              </div>
            </div>

            {/* Generic Text Edit Block */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-md font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-500" />
                文案内容
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">主标题</label>
                <input 
                  type="text" 
                  placeholder="请输入标题..." 
                  className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">详细描述 / 正文</label>
                <div className="border border-slate-300 rounded-md overflow-hidden">
                  <div className="bg-slate-50 border-b border-slate-300 p-2 flex gap-2">
                    <button className="p-1 hover:bg-slate-200 rounded text-slate-600 font-bold">B</button>
                    <button className="p-1 hover:bg-slate-200 rounded text-slate-600 italic">I</button>
                    <button className="p-1 hover:bg-slate-200 rounded text-slate-600 underline">U</button>
                    <div className="w-px h-6 bg-slate-300 mx-1"></div>
                    <button className="p-1 hover:bg-slate-200 rounded text-slate-600">H1</button>
                    <button className="p-1 hover:bg-slate-200 rounded text-slate-600">H2</button>
                  </div>
                  <textarea 
                    placeholder="请输入正文内容..." 
                    className="w-full border-0 focus:ring-0 sm:text-sm h-48 resize-none p-3"
                  ></textarea>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">按钮文案 (可选)</label>
                  <input type="text" placeholder="例如：了解更多" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">跳转链接 (可选)</label>
                  <input type="text" placeholder="例如：/about" className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
