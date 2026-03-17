import { useState } from 'react';
import { Sparkles, Save, Send, Settings2, RefreshCw, FileText, CheckCircle2 } from 'lucide-react';

export default function AIGeneration() {
  const [prompt, setPrompt] = useState('');
  const [creativity, setCreativity] = useState(0.5);
  const [tone, setTone] = useState('professional');
  const [targetSection, setTargetSection] = useState('encyclopedia');
  const [selectedTags, setSelectedTags] = useState<string[]>(['膳食', '春季']);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = () => {
    if (!prompt) return;
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedContent(`## 春季产后进补：如何科学定制月子餐？\n\n春季万物复苏，正是产后妈妈调理气血、恢复元气的黄金时期。根据《2026春季月子餐单标准》，春季月子膳食应遵循“温补而不燥、疏肝理气”的原则。\n\n### 1. 第一阶段：排恶露、愈合伤口（产后第1周）\n\n**核心食材：** 猪肝、红豆、山药、陈皮。\n**膳食建议：** 此时产妇肠胃功能较弱，饮食应以清淡、易消化为主。推荐“陈皮山药排骨汤”，既能健脾开胃，又能帮助恶露排出。\n\n### 2. 第二阶段：调理气血、促进泌乳（产后第2-3周）\n\n**核心食材：** 乌鸡、鲫鱼、木瓜、黄芪、当归。\n**膳食建议：** 随着恶露逐渐排净，可适当增加滋补力度。推荐“黄芪当归乌鸡汤”，补气养血，对于气血两虚的产妇尤为适宜。\n\n### 3. 第三阶段：滋补固本、恢复体能（产后第4周及以后）\n\n**核心食材：** 海参、花胶、燕窝、黑芝麻。\n**膳食建议：** 进入巩固期，重点在于强筋健骨、美容养颜。推荐“花胶炖鲜奶”，富含胶原蛋白，有助于皮肤恢复弹性。\n\n### 专家提示\n\n春季气候多变，产妇易受风寒。除了注意饮食调理外，还应保持室内空气流通，避免直接吹风。爱儿美月子中心配备专属营养师，将根据您的体质评估结果，为您量身定制个性化春季月子餐单。`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col lg:flex-row gap-8">
      {/* Left Panel: Configuration */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
            <Settings2 className="w-5 h-5 mr-2 text-rose-600" />
            生成配置
          </h2>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">目标板块</label>
              <select 
                value={targetSection}
                onChange={(e) => setTargetSection(e.target.value)}
                className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
              >
                <option value="encyclopedia">月子百科 (GEO问答)</option>
                <option value="mom_voice">妈妈说 (客户案例)</option>
                <option value="news">中心动态</option>
                <option value="service">服务介绍</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">关联知识库标签</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {['膳食', '春季', '产康', '儿科', '案例'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => {
                      if (selectedTags.includes(tag)) {
                        setSelectedTags(selectedTags.filter(t => t !== tag));
                      } else {
                        setSelectedTags([...selectedTags, tag]);
                      }
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                      selectedTags.includes(tag) 
                        ? 'bg-rose-100 border-rose-200 text-rose-700' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-500">AI将优先检索包含这些标签的文档作为生成依据。</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1 flex justify-between">
                <span>文章基调</span>
              </label>
              <select 
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
              >
                <option value="professional">专业严谨 (适合百科/医疗)</option>
                <option value="warm">温馨关怀 (适合案例/动态)</option>
                <option value="marketing">营销转化 (适合服务介绍)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1 flex justify-between">
                <span>创意度 (Temperature)</span>
                <span className="text-rose-600">{creativity}</span>
              </label>
              <input 
                type="range" 
                min="0.1" max="0.9" step="0.1" 
                value={creativity}
                onChange={(e) => setCreativity(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>严谨保守</span>
                <span>创意发散</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-rose-600" />
            需求输入 (Prompt)
          </h2>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="例如：根据最新上传的春季月子餐菜单，写一篇关于春季产后进补的百科文章，重点强调排调补塑四个阶段..."
            className="w-full flex-1 min-h-[150px] border-slate-300 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 sm:text-sm resize-none p-3"
          ></textarea>
          <button 
            onClick={handleGenerate}
            disabled={!prompt || isGenerating}
            className="mt-4 w-full bg-rose-600 text-white py-2.5 rounded-lg font-medium hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isGenerating ? (
              <><RefreshCw className="w-5 h-5 mr-2 animate-spin" /> 正在生成...</>
            ) : (
              <><Sparkles className="w-5 h-5 mr-2" /> 开始生成</>
            )}
          </button>
        </div>
      </div>

      {/* Right Panel: Preview & Edit */}
      <div className="w-full lg:w-2/3 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-slate-500" />
            预览与编辑区
          </h2>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center">
              <Save className="w-4 h-4 mr-2" />
              保存草稿
            </button>
            <button 
              disabled={!generatedContent}
              className="px-4 py-2 bg-emerald-600 text-white rounded-md text-sm font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              发布至官网
            </button>
          </div>
        </div>
        
        <div className="flex-1 p-6 bg-slate-50/50">
          {generatedContent ? (
            <div className="h-full flex flex-col">
              <div className="mb-4 flex items-center text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                生成成功！您可以直接在下方富文本编辑器中修改内容。
              </div>
              <div className="flex-1 bg-white border border-slate-200 rounded-lg shadow-sm p-6 overflow-y-auto font-sans text-slate-800 leading-relaxed whitespace-pre-wrap">
                {generatedContent}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-slate-400">
              <Sparkles className="w-16 h-16 mb-4 text-slate-200" />
              <p className="text-lg font-medium text-slate-500">等待生成内容</p>
              <p className="text-sm mt-2 max-w-md text-center">在左侧配置参数并输入提示词，AI将为您生成高质量的官网内容。</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
