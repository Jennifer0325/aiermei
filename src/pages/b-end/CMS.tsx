import { useState } from 'react';
import { FolderTree, FileText, Image as ImageIcon, Edit3, Save, Eye, LogOut, UploadCloud, MessageSquare, Sparkles, Plus, Trash2, Globe, Database, User, Activity, Coins, Bot, Send, ChevronDown, ChevronRight } from 'lucide-react';

interface Props {
  onSwitchMode?: () => void;
}

export default function CMS({ onSwitchMode }: Props) {
  const [activeNode, setActiveNode] = useState('brand_intro');
  const [chatInput, setChatInput] = useState('');
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['home', 'knowledge', 'account']);

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => 
      prev.includes(groupId) 
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const sidebarSections = [
    {
      title: '网站内容管理',
      icon: <Globe className="w-4 h-4 mr-2" />,
      groups: [
        { id: 'home', label: '首页', children: [
          { id: 'home_banner', label: '首屏轮播图' },
          { id: 'home_about', label: '品牌简介' },
          { id: 'home_services', label: '核心服务' },
          { id: 'home_env', label: '环境展示' },
        ]},
        { id: 'brand', label: '品牌介绍', children: [
          { id: 'brand_banner', label: '顶部Banner' },
          { id: 'brand_intro', label: '品牌简介' },
          { id: 'brand_env', label: '护理环境' },
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
        if (child) return `${section.title} - ${group.label} - ${child.label}`;
      }
    }
    return '未选择';
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
      {/* Left Panel: Sidebar & Tree View */}
      <div className="w-64 bg-slate-900 text-white flex flex-col border-r border-slate-800 shrink-0">
        <div className="flex items-center justify-center h-20 border-b border-slate-800 shrink-0">
          <span className="text-xl font-bold tracking-wider text-rose-400">爱儿美后台系统</span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {sidebarSections.map((section, sIdx) => (
            <div key={sIdx}>
              <div className="flex items-center text-slate-400 mb-3 px-2">
                {section.icon}
                <span className="text-sm font-bold">{section.title}</span>
              </div>
              <ul className="space-y-3">
                {section.groups.map(node => (
                  <li key={node.id}>
                    <button 
                      onClick={() => toggleGroup(node.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-slate-500 py-2 px-2 mb-1 uppercase tracking-wider hover:text-slate-300 transition-colors"
                    >
                      <span>{node.label}</span>
                      {expandedGroups.includes(node.id) ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <ChevronRight className="w-3 h-3" />
                      )}
                    </button>
                    {expandedGroups.includes(node.id) && (
                      <ul className="space-y-1 border-l border-slate-700/50 ml-3 pl-2 mb-2">
                        {node.children.map(child => (
                          <li key={child.id}>
                            <button 
                              onClick={() => setActiveNode(child.id)}
                              className={`w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
                                activeNode === child.id 
                                  ? 'bg-rose-600 text-white font-medium' 
                                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                              }`}
                            >
                              {child.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-800 shrink-0">
          <button
            onClick={onSwitchMode}
            className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5 mr-2" />
            返回官网
          </button>
        </div>
      </div>

      {/* Middle Panel: Editor or Knowledge Base */}
      <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden relative">
        <div className="h-20 border-b border-slate-200 bg-white flex justify-between items-center px-8 shrink-0 shadow-sm z-10">
          <h2 className="text-lg font-bold text-slate-900 flex items-center">
            {activeNode.startsWith('kb_') ? (
              <UploadCloud className="w-5 h-5 mr-2 text-blue-500" />
            ) : activeNode.startsWith('account_') ? (
              <User className="w-5 h-5 mr-2 text-amber-500" />
            ) : (
              <Edit3 className="w-5 h-5 mr-2 text-rose-500" />
            )}
            {activeNode.startsWith('kb_') ? '知识库管理' : activeNode.startsWith('account_') ? '我的账户' : '内容编辑'} : {getActiveNodeLabel()}
          </h2>
          {!activeNode.startsWith('kb_') && !activeNode.startsWith('account_') && (
            <div className="flex space-x-3">
              <button className="px-4 py-2 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                预览
              </button>
              <button className="px-4 py-2 bg-rose-600 text-white rounded-md text-sm font-medium hover:bg-rose-700 transition-colors flex items-center shadow-sm">
                <Save className="w-4 h-4 mr-2" />
                保存修改
              </button>
            </div>
          )}
        </div>
        
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {activeNode === 'account_usage' && (
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">账户用量与算力余额</h3>
                      <p className="text-sm text-slate-500 mt-1">查看您当前账户的 AI 算力消耗情况</p>
                    </div>
                    <div className="bg-rose-50 text-rose-600 px-4 py-2 rounded-lg text-sm font-medium border border-rose-100 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      企业尊享版
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Token Usage */}
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-slate-700 font-medium">
                          <Activity className="w-5 h-5 mr-2 text-blue-500" />
                          本月 Token 用量
                        </div>
                        <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">正常</span>
                      </div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-black text-slate-900">1,284,500</span>
                        <span className="text-sm text-slate-500">/ 5,000,000 Tokens</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 mt-4">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                      <p className="text-xs text-slate-400 mt-3">包含知识库对话、文案生成及 C 端用户咨询消耗</p>
                    </div>

                    {/* Compute Balance */}
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-slate-700 font-medium">
                          <Coins className="w-5 h-5 mr-2 text-amber-500" />
                          算力余额
                        </div>
                        <span className="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">充足</span>
                      </div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-black text-slate-900">¥ 3,450.00</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">预计可支持约 3-4 个月的正常消耗</p>
                      <p className="text-xs text-slate-400 mt-3">算力余额不足时将暂停 AI 服务</p>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-6 text-white flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-1">需要补充算力或升级套餐？</h4>
                      <p className="text-slate-400 text-sm">请联系您的专属技术顾问进行续费充值，保障业务不中断。</p>
                    </div>
                    <button className="bg-white text-slate-900 px-6 py-3 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">
                      联系技术顾问
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeNode === 'kb_dashboard' && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-md font-bold text-slate-900">全局知识库文档</h3>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
                      <UploadCloud className="w-4 h-4 mr-2" />
                      上传新文档
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: '爱儿美品牌白皮书_2026版.pdf', size: '2.4 MB', date: '2026-03-15', status: '已解析' },
                      { name: '月子餐营养搭配指南(内部培训).docx', size: '1.1 MB', date: '2026-03-10', status: '已解析' },
                      { name: '产后康复常见问题Q&A.txt', size: '45 KB', date: '2026-03-08', status: '已解析' },
                    ].map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors bg-slate-50/50">
                        <div className="flex items-center">
                          <FileText className="w-8 h-8 text-blue-400 mr-4" />
                          <div>
                            <p className="text-sm font-medium text-slate-800">{doc.name}</p>
                            <p className="text-xs text-slate-500 mt-1">{doc.size} · 上传于 {doc.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                            {doc.status}
                          </span>
                          <button className="text-slate-400 hover:text-blue-600 transition-colors">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button className="text-slate-400 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeNode === 'kb_chat' && (
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-[600px] flex flex-col">
                <div className="p-4 border-b border-slate-200 bg-slate-50 rounded-t-xl flex justify-between items-center">
                  <div>
                    <h3 className="text-md font-bold text-slate-900">知识库 AI 消化与对话</h3>
                    <p className="text-xs text-slate-500 mt-1">AI 已学习所有上传的文档，您可以向它提问或让它归纳总结。</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" />
                    DeepSeek AI 已就绪
                  </span>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <div className="flex justify-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                      <Bot className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="bg-slate-100 text-slate-800 rounded-2xl rounded-tl-sm p-4 text-sm max-w-[80%]">
                      您好！我已经学习了《爱儿美品牌白皮书》、《月子餐营养搭配指南》等 3 份文档。您可以问我关于这些文档的任何问题，或者让我帮您提取摘要、生成话术。
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm p-4 text-sm max-w-[80%]">
                      请根据知识库，总结一下我们月子餐的核心优势，并生成一段适合放在官网首页的文案。
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                      <Bot className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="bg-slate-100 text-slate-800 rounded-2xl rounded-tl-sm p-4 text-sm max-w-[80%] space-y-3">
                      <p>根据《月子餐营养搭配指南(内部培训).docx》，爱儿美月子餐的核心优势可总结为以下三点：</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>阶段定制：</strong> 遵循“一排、二调、三补、四塑”的四阶段科学理论。</li>
                        <li><strong>专业团队：</strong> 由三甲医院营养师与星级大厨联合定制。</li>
                        <li><strong>食材严选：</strong> 每日新鲜直采，绿色有机，拒绝半成品。</li>
                      </ul>
                      <p className="mt-4 font-medium">✨ 为您生成的官网首页文案：</p>
                      <div className="bg-white p-3 rounded border border-slate-200 italic text-slate-600">
                        "懂营养，更懂你。爱儿美星级月子膳食，由资深营养师与行政总厨联袂打造。遵循『排、调、补、塑』四阶段科学理念，甄选全球优质食材，为您定制专属营养方案。让每一口滋养，都成为产后恢复的源动力。"
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-200 bg-white rounded-b-xl">
                  <div className="relative">
                    <textarea
                      placeholder="向 AI 提问，或输入指令..."
                      className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-12 resize-none h-16 py-3"
                    />
                    <button className="absolute bottom-3 right-3 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {!activeNode.startsWith('kb_') && !activeNode.startsWith('account_') && (
              <>
                {/* Knowledge Base Upload */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-md font-bold text-slate-900 flex items-center">
                      <UploadCloud className="w-5 h-5 mr-2 text-blue-500" />
                      当前模块知识库 (供AI参考)
                    </h3>
                    <button className="text-sm text-blue-600 font-medium hover:text-blue-700">
                      查看已上传文档
                    </button>
                  </div>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                    <UploadCloud className="w-8 h-8 mb-2 text-slate-400" />
                    <p className="text-sm font-medium">点击或拖拽上传 PDF/Word/TXT 文档</p>
                    <p className="text-xs mt-1">AI 将基于上传的文档为您生成更准确的文案</p>
                  </div>
                </div>

                {/* Content Add/Remove & Edit */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-md font-bold text-slate-900 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-rose-500" />
                      内容查看与编辑
                    </h3>
                    <button className="text-sm text-rose-600 font-medium flex items-center hover:text-rose-700">
                      <Plus className="w-4 h-4 mr-1" />
                      添加内容块
                    </button>
                  </div>

                  {/* Content Block 1 */}
                  <div className="border border-slate-200 rounded-lg p-5 relative group">
                    <button className="absolute top-4 right-4 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="col-span-1">
                        <label className="block text-sm font-medium text-slate-700 mb-2">配图管理</label>
                        <div className="aspect-video rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center p-4 hover:border-rose-400 cursor-pointer">
                          <ImageIcon className="w-8 h-8 text-slate-300 mb-2" />
                          <span className="text-xs text-slate-500">上传图片</span>
                        </div>
                      </div>
                      <div className="col-span-2 space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">主标题</label>
                          <input 
                            type="text" 
                            defaultValue="品牌简介"
                            className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">详细描述 / 正文</label>
                          <textarea 
                            defaultValue="爱儿美月子会所，致力于为新生家庭提供..."
                            className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm h-32 resize-none"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel: AI Assistant */}
      {!activeNode.startsWith('kb_') && !activeNode.startsWith('account_') && (
        <div className="w-80 bg-white border-l border-slate-200 flex flex-col shrink-0 shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.05)] z-20">
          <div className="h-20 border-b border-slate-200 flex items-center px-6 shrink-0 bg-gradient-to-r from-rose-50 to-white">
            <Sparkles className="w-5 h-5 text-rose-500 mr-2" />
            <h2 className="text-lg font-bold text-slate-800">AI 文案助手</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-slate-600 leading-relaxed">
                您好！我是您的 AI 文案助手。您可以让我帮您：<br/>
                ✨ 润色现有文案<br/>
                ✨ 根据知识库生成新内容<br/>
                ✨ 调整语气（更专业、更温馨等）
              </p>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-rose-600 text-white rounded-lg p-3 max-w-[85%] shadow-sm">
                <p className="text-sm">帮我把品牌简介的文案写得更温馨一些。</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                好的，为您优化了文案：
              </p>
              <div className="bg-slate-50 p-3 rounded border border-slate-100 text-sm text-slate-700 italic">
                "在爱儿美，我们不仅提供专业的护理，更倾注如家人般的温暖。每一个新生命的降临，都是世间最美的奇迹，我们愿用爱与专业，守护您和宝宝的每一个珍贵瞬间。"
              </div>
              <div className="mt-3 flex gap-2">
                <button className="text-xs bg-rose-50 text-rose-600 px-2 py-1 rounded border border-rose-100 hover:bg-rose-100">
                  一键应用
                </button>
                <button className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200 hover:bg-slate-200">
                  重新生成
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-200 bg-white shrink-0">
            <div className="relative">
              <textarea
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="输入您的需求，让 AI 帮您写文案..."
                className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm pr-10 resize-none h-20"
              />
              <button className="absolute bottom-2 right-2 p-1.5 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
