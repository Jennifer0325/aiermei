import { useState } from 'react';
import { 
  Globe, Database, User, ChevronRight, ChevronDown, 
  Edit3, UploadCloud, Save, Eye, LogOut, Sparkles,
  Activity, Coins, FileText, Trash2, Plus, Send, Bot, MessageSquare, Menu, X, Image as ImageIcon, Layout
} from 'lucide-react';

interface Props {
  onSwitchMode: () => void;
}

export default function BEndMobile({ onSwitchMode }: Props) {
  const [activeNode, setActiveNode] = useState('home_banner');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['home']);

  const sidebarSections = [
    {
      title: '网站内容管理',
      icon: <Globe className="w-4 h-4 mr-2" />,
      groups: [
        { id: 'home', label: '首页', children: [
          { id: 'home_banner', label: '首屏轮播图' },
          { id: 'home_about', label: '品牌简介' },
          { id: 'home_services', label: '核心服务' },
        ]},
        { id: 'environment', label: '环境展示', children: [
          { id: 'env_rooms', label: '房型展示' },
          { id: 'env_public', label: '公共设施' },
        ]},
        { id: 'meals', label: '月子膳食', children: [
          { id: 'meals_menu', label: '阶段食谱' },
          { id: 'meals_concept', label: '膳食理念' },
        ]},
        { id: 'recovery', label: '产后修复', children: [
          { id: 'recovery_projects', label: '修复项目' },
          { id: 'recovery_equip', label: '核心仪器' },
        ]},
        { id: 'moms_voice', label: '妈妈说', children: [
          { id: 'voice_list', label: '客户评价' },
        ]},
      ]
    },
    {
      title: '知识库管理',
      icon: <Database className="w-4 h-4 mr-2" />,
      groups: [
        { id: 'knowledge', label: '知识库', children: [
          { id: 'kb_dashboard', label: '知识库总览' },
          { id: 'kb_chat', label: 'AI 消化与对话' },
        ]}
      ]
    },
    {
      title: '我的账户',
      icon: <User className="w-4 h-4 mr-2" />,
      groups: [
        { id: 'account', label: '用量统计', children: [
          { id: 'account_usage', label: 'Token用量与算力余额' }
        ]}
      ]
    }
  ];

  const getActiveNodeLabel = () => {
    for (const section of sidebarSections) {
      for (const group of section.groups) {
        const child = group.children.find(c => c.id === activeNode);
        if (child) return child.label;
      }
    }
    return '管理后台';
  };

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      {/* Header */}
      <header className="h-16 bg-slate-900 text-white flex items-center justify-between px-4 shrink-0 z-40">
        <div className="flex items-center space-x-3">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 hover:bg-slate-800 rounded-lg">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-sm font-bold tracking-wider text-rose-400">爱儿美后台</h1>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[10px] bg-rose-600 px-2 py-0.5 rounded-full font-bold">PRO</span>
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="mb-6 flex justify-between items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-slate-900 serif">{getActiveNodeLabel()}</h2>
            <p className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">Content Editor</p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-600 shadow-sm active:scale-95 transition-transform">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2 bg-rose-600 text-white rounded-xl shadow-sm active:scale-95 transition-transform">
              <Save className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Based on activeNode */}
        <div className="space-y-6">
          {activeNode === 'account_usage' ? (
            <div className="space-y-4">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-6">
                <div className="space-y-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-xs text-slate-500 font-bold uppercase tracking-wider">
                        <Activity className="w-4 h-4 mr-2 text-blue-500" />
                        Token 用量
                      </div>
                      <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold">正常</span>
                    </div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-black text-slate-900">1.28M</span>
                      <span className="text-[10px] text-slate-400">/ 5M Tokens</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full mt-4 overflow-hidden">
                      <div className="bg-blue-500 h-full w-1/4 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-xs text-slate-500 font-bold uppercase tracking-wider">
                        <Coins className="w-4 h-4 mr-2 text-amber-500" />
                        算力余额
                      </div>
                      <span className="text-[10px] bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full font-bold">充足</span>
                    </div>
                    <div className="text-3xl font-black text-slate-900">¥ 3,450.00</div>
                    <p className="text-[10px] text-slate-400 mt-2">预计可支持 3-4 个月正常消耗</p>
                  </div>
                </div>
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl text-sm font-bold shadow-lg active:scale-[0.98] transition-transform">联系顾问续费</button>
              </div>
            </div>
          ) : activeNode === 'kb_chat' ? (
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 h-[550px] flex flex-col overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold text-slate-700">AI 知识库助手</span>
                </div>
                <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
              </div>
              <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-slate-50/30">
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none text-xs text-slate-600 max-w-[85%] shadow-sm border border-slate-100 leading-relaxed">
                    您好！我已经深度学习了《品牌白皮书》、《月子餐指南》等文档。您可以问我任何关于业务的问题。
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-rose-600 p-4 rounded-2xl rounded-tr-none text-xs text-white max-w-[85%] shadow-md leading-relaxed">
                    帮我总结一下我们月子餐的核心优势。
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 bg-white">
                <div className="flex items-center bg-slate-50 rounded-2xl px-4 py-3 border border-slate-100 focus-within:border-rose-200 transition-colors">
                  <input type="text" placeholder="向 AI 提问..." className="flex-1 bg-transparent text-xs outline-none text-slate-700" />
                  <button className="ml-2 p-2 bg-rose-600 text-white rounded-xl shadow-sm">
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* AI Suggestion Card */}
              <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-6 text-white shadow-lg shadow-rose-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="relative space-y-4">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-bold">AI 智能文案建议</span>
                  </div>
                  <p className="text-xs text-rose-100 leading-relaxed">
                    基于您的品牌调性，我建议将标题改为“艺术级月子生活，给宝宝最好的开始”。
                  </p>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-white text-rose-600 rounded-xl text-[10px] font-bold">一键应用</button>
                    <button className="px-4 py-2 bg-rose-400/30 text-white rounded-xl text-[10px] font-bold border border-white/20">重新生成</button>
                  </div>
                </div>
              </div>

              {/* Main Editor Card */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center">
                    <Layout className="w-4 h-4 mr-2 text-rose-500" />
                    内容编辑
                  </h3>
                  <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">模块配图</label>
                    <div className="aspect-video bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 group hover:border-rose-300 hover:bg-rose-50 transition-all cursor-pointer">
                      <ImageIcon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-bold">点击更换图片</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">主标题</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition-all" 
                      defaultValue="爱儿美月子中心" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">详细描述</label>
                    <textarea 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-sm h-32 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 outline-none transition-all resize-none" 
                      defaultValue="秉承科学护理，艺术生活理念，为新生家庭开启一段优雅的生命旅程。" 
                    />
                  </div>
                </div>
              </div>

              {/* Add New Block Button */}
              <button className="w-full py-4 border-2 border-dashed border-slate-200 rounded-3xl text-slate-400 flex items-center justify-center space-x-2 hover:border-rose-300 hover:text-rose-500 hover:bg-rose-50 transition-all">
                <Plus className="w-5 h-5" />
                <span className="text-sm font-bold">添加新内容块</span>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Sidebar Drawer */}
      {isMenuOpen && (
        <div className="absolute inset-0 z-50 flex">
          <div className="w-72 bg-slate-900 text-white flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6">
              <span className="font-bold text-rose-400">功能菜单</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-slate-800 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {sidebarSections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex items-center text-slate-500 px-2 text-[10px] font-bold uppercase tracking-widest">
                    {section.icon}
                    <span className="ml-2">{section.title}</span>
                  </div>
                  <div className="space-y-1">
                    {section.groups.map(group => (
                      <div key={group.id}>
                        <button 
                          onClick={() => toggleGroup(group.id)}
                          className="w-full flex items-center justify-between p-2 text-sm text-slate-300 hover:bg-slate-800 rounded-lg"
                        >
                          <span>{group.label}</span>
                          {expandedGroups.includes(group.id) ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                        </button>
                        {expandedGroups.includes(group.id) && (
                          <div className="ml-4 mt-1 space-y-1 border-l border-slate-800 pl-2">
                            {group.children.map(child => (
                              <button 
                                key={child.id}
                                onClick={() => {
                                  setActiveNode(child.id);
                                  setIsMenuOpen(false);
                                }}
                                className={`w-full text-left p-2 text-xs rounded-lg transition-colors ${
                                  activeNode === child.id ? 'bg-rose-600 text-white' : 'text-slate-500 hover:text-slate-300'
                                }`}
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-slate-800">
              <button 
                onClick={onSwitchMode}
                className="w-full flex items-center justify-center space-x-2 p-3 bg-slate-800 rounded-xl text-sm font-bold text-slate-400"
              >
                <LogOut className="w-4 h-4" />
                <span>退出后台</span>
              </button>
            </div>
          </div>
          <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        </div>
      )}
    </div>
  );
}
