import { useState } from 'react';
import { Phone, MessageCircle, Bot, X, Send, ChevronDown, Sparkles } from 'lucide-react';

export default function FloatingActions() {
  const [activeModal, setActiveModal] = useState<'phone' | 'wechat' | 'ai' | null>(null);
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'ai', content: string}[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(false);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages([...chatMessages, { role: 'user', content: chatInput }]);
    setChatInput('');

    // Mock AI response
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev, 
        { 
          role: 'ai', 
          content: '您好！爱儿美月子中心位于东莞市南城街道元美西路10号东强·亨美商业大厦12-15楼，地处南城核心商圈，交通非常便利哦~ 🌟 我们拥有约6000平方米的独立空间，环境宁静舒适，欢迎您随时前来参观咨询！' 
        }
      ]);
      
      // Show lead capture after a specific trigger or just after first response for demo
      if (chatMessages.length === 0) {
        setTimeout(() => {
          setShowPhoneInput(true);
        }, 1500);
      }
    }, 1000);
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPhoneInput(false);
    setChatMessages(prev => [
      ...prev,
      { role: 'ai', content: '食谱已发送至您的手机，请注意查收。我们的专业顾问稍后也会与您联系，提供更详细的解答。' }
    ]);
  };

  return (
    <>
      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 sm:right-6 flex flex-col items-end space-y-3 z-50">
        <button 
          onClick={() => setActiveModal('phone')} 
          className="flex items-center justify-start space-x-3 bg-white text-slate-800 pr-5 pl-2 py-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 hover:bg-slate-50 transition-all"
        >
          <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-sm font-bold tracking-wide">联系电话</span>
        </button>
        
        <button 
          onClick={() => setActiveModal('wechat')} 
          className="flex items-center justify-start space-x-3 bg-white text-slate-800 pr-5 pl-2 py-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 hover:bg-slate-50 transition-all"
        >
          <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="text-sm font-bold tracking-wide">微信客服</span>
        </button>

        <button 
          onClick={() => setActiveModal('ai')} 
          className="flex items-center justify-start space-x-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white pr-5 pl-2 py-2 rounded-full shadow-[0_8px_30px_rgba(225,29,72,0.3)] hover:shadow-[0_8px_30px_rgba(225,29,72,0.5)] transition-all transform hover:-translate-y-1"
        >
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-bold tracking-wide">育儿小管家</span>
        </button>
      </div>

      {/* Phone Modal */}
      {activeModal === 'phone' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full p-1">
              <X className="w-5 h-5" />
            </button>
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">全国咨询热线</h3>
            <p className="text-3xl font-bold text-blue-600 tracking-wider mb-6">400-123-4567</p>
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-sm text-slate-500">服务时间：周一至周日 09:00-21:00</p>
              <p className="text-xs text-slate-400 mt-2">点击号码即可直接拨打</p>
            </div>
          </div>
        </div>
      )}

      {/* WeChat Modal */}
      {activeModal === 'wechat' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full p-1">
              <X className="w-5 h-5" />
            </button>
            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">扫码添加专属客服</h3>
            <div className="w-56 h-56 bg-slate-50 mx-auto rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center mb-6">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                <span className="text-slate-400 text-sm">微信二维码占位</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 bg-slate-50 py-2 px-4 rounded-full inline-block">获取最新优惠与详细报价</p>
          </div>
        </div>
      )}

      {/* AI Assistant Chat Modal (Dark Theme) */}
      {activeModal === 'ai' && (
        <div className="fixed inset-0 bg-black/70 flex items-end sm:items-center justify-center z-[60] sm:p-4 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div className="bg-[#15151A] w-full sm:w-[900px] h-[90vh] sm:h-[700px] sm:rounded-2xl flex shadow-2xl overflow-hidden border border-slate-800" onClick={e => e.stopPropagation()}>
            
            {/* Left Sidebar (Desktop only) */}
            <div className="hidden md:flex w-64 bg-[#1A1A24] border-r border-slate-800 flex-col">
              <div className="p-5 border-b border-slate-800">
                <h3 className="text-slate-200 font-bold flex items-center text-sm">
                  <span className="w-1.5 h-4 bg-rose-500 rounded-full mr-2"></span>
                  用户画像分析
                </h3>
              </div>
              <div className="p-5">
                <p className="text-xs text-slate-400 mb-3">识别到的用户标签：</p>
                <div className="bg-[#252535] text-blue-300 text-xs px-3 py-2.5 rounded-lg flex items-center border border-blue-900/30">
                  <span className="mr-2 text-base">🤰</span> 孕产阶段: 产后
                </div>
              </div>
              <div className="p-5 border-t border-slate-800 mt-auto">
                <h4 className="text-slate-300 text-sm font-bold mb-4 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                  提示
                </h4>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">您可以问我关于爱儿美月子中心的任何问题！</p>
                <h4 className="text-slate-300 text-sm font-bold mb-3 flex items-center">
                  <FileText className="w-4 h-4 mr-2 text-slate-400" />
                  示例问题
                </h4>
                <div className="space-y-2.5">
                  {['月子中心在哪里？', '有哪些产后修复项目？', '月子餐是怎么安排的？', '宝宝护理有哪些服务？', '环境怎么样？', '价格是多少？'].map((q, i) => (
                    <button key={i} onClick={() => setChatInput(q)} className="w-full text-left bg-[#252535] hover:bg-[#2A2A3C] text-slate-300 text-xs p-3 rounded-lg transition-colors border border-slate-700/50 hover:border-slate-600">
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-[#15151A] relative">
              {/* Header */}
              <div className="p-5 border-b border-slate-800 flex justify-between items-center shrink-0 bg-[#1A1A24]/50 backdrop-blur-md absolute top-0 left-0 right-0 z-10">
                <div>
                  <h2 className="text-lg font-bold text-slate-100 flex items-center">
                    <Bot className="w-5 h-5 mr-2 text-slate-300" />
                    爱儿美月子中心 - AI专家客服
                  </h2>
                  <p className="text-xs text-slate-400 mt-1.5 flex items-center">
                    当前模式: <MessageCircle className="w-3 h-3 mx-1 text-rose-400" /> <span className="text-slate-300">DeepSeek AI</span>
                  </p>
                </div>
                <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-200 transition-colors bg-[#252535] p-2 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-5 pt-24 space-y-6">
                {/* Welcome Message */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] text-slate-300 text-sm leading-relaxed">
                    <p className="mb-4">欢迎使用爱儿美AI专家客服系统！我可以为您解答关于月子中心的各类问题。</p>
                    <p className="font-bold text-slate-200 mb-3">我可以帮您解答：</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-400">
                      <li>月子中心服务项目</li>
                      <li>价格与房型</li>
                      <li>月子餐安排</li>
                      <li>宝宝护理</li>
                      <li>产后修复</li>
                      <li>周边环境</li>
                    </ul>
                  </div>
                </div>

                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'ai' && (
                      <div className="w-8 h-8 bg-rose-500 rounded-md flex items-center justify-center mr-3 shrink-0 mt-1">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}
                    {msg.role === 'user' && (
                      <div className="w-8 h-8 bg-[#252535] rounded-md flex items-center justify-center ml-3 shrink-0 mt-1 order-2 border border-slate-700">
                        <span className="text-slate-300 text-xs font-bold">客</span>
                      </div>
                    )}
                    <div className={`max-w-[80%] rounded-xl p-4 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-[#252535] text-slate-200 border border-slate-700/50 order-1' 
                        : 'bg-transparent text-slate-300'
                    }`}>
                      {msg.content}
                      
                      {/* Source Citation Mock */}
                      {msg.role === 'ai' && idx > 0 && (
                        <div className="mt-4 border border-slate-800 rounded-lg overflow-hidden">
                          <div className="bg-[#1A1A24] px-4 py-2.5 text-xs text-slate-400 flex items-center cursor-pointer hover:bg-[#252535] transition-colors border-b border-slate-800">
                            <ChevronDown className="w-4 h-4 mr-2" />
                            查看信息来源
                          </div>
                          <div className="bg-[#15151A] p-4 text-xs text-slate-500">
                            <p className="text-blue-400 mb-1">常见问题</p>
                            <p className="font-medium text-slate-300 mb-1">月子中心在哪里？</p>
                            <p>爱儿美月子中心位于东莞市南城街道元美西路10号东强·亨美商业大厦12-15楼，地处南城核心商圈，交通便利。 ...</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Lead Capture Form */}
                {showPhoneInput && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 bg-rose-500 rounded-md flex items-center justify-center mr-3 shrink-0 mt-1">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div className="max-w-[85%] bg-[#1A1A24] border border-rose-500/30 rounded-xl p-5 shadow-lg">
                      <p className="text-sm text-slate-200 mb-4 font-medium flex items-center">
                        <Sparkles className="w-4 h-4 text-yellow-500 mr-2" />
                        宝宝黄疸/吐奶/不够吃？告诉 AI，获取专属应对方案与宝妈食谱。
                      </p>
                      <p className="text-xs text-slate-400 mb-4">已为您生成完整的【7天定制膳食调理食谱】，输入手机号免费接收：</p>
                      <form onSubmit={handlePhoneSubmit} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                        <input 
                          type="tel" 
                          placeholder="请输入您的手机号码" 
                          className="flex-1 bg-[#15151A] border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 placeholder-slate-600"
                          required
                        />
                        <button type="submit" className="bg-rose-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-rose-700 transition-colors whitespace-nowrap shadow-md">
                          免费接收
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-5 bg-[#15151A] border-t border-slate-800 shrink-0">
                <div className="flex items-center bg-[#1A1A24] border border-slate-700 rounded-xl px-4 py-2 focus-within:border-slate-500 transition-all">
                  <input 
                    type="text" 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="请输入您的问题..." 
                    className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-200 placeholder-slate-600 h-10"
                  />
                  <button 
                    onClick={handleSendMessage}
                    disabled={!chatInput.trim()}
                    className={`ml-3 p-2.5 rounded-lg transition-colors ${
                      chatInput.trim() ? 'bg-slate-700 text-slate-200 hover:bg-slate-600' : 'bg-transparent text-slate-600 cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Dummy FileText icon component since it wasn't imported initially in this file
function FileText(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}
