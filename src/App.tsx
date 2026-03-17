import { useState } from 'react';
import { AppMode, CEndPage, BEndPage } from './types';
import CHeader from './components/layout/CHeader';
import CFooter from './components/layout/CFooter';
import Home from './pages/c-end/Home';
import BSidebar from './components/layout/BSidebar';
import BHeader from './components/layout/BHeader';
import Dashboard from './pages/b-end/Dashboard';
import KnowledgeBase from './pages/b-end/KnowledgeBase';
import AIGeneration from './pages/b-end/AIGeneration';
import Automation from './pages/b-end/Automation';
import CMS from './pages/b-end/CMS';

export default function App() {
  const [mode, setMode] = useState<AppMode>('c_end');
  const [cEndPage, setCEndPage] = useState<CEndPage>('home');
  const [bEndPage, setBEndPage] = useState<BEndPage>('dashboard');

  const handleSwitchMode = () => {
    setMode(mode === 'c_end' ? 'b_end' : 'c_end');
  };

  if (mode === 'c_end') {
    return (
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
        <CHeader 
          currentPage={cEndPage} 
          onNavigate={setCEndPage} 
          onSwitchMode={handleSwitchMode} 
        />
        <main className="flex-grow">
          {cEndPage === 'home' && <Home />}
          {cEndPage !== 'home' && (
            <div className="flex items-center justify-center h-[60vh] bg-slate-50">
              <div className="text-center">
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-2">页面建设中</h2>
                <p className="text-slate-500">当前为原型演示，仅首页提供完整展示。</p>
              </div>
            </div>
          )}
        </main>
        <CFooter />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      <BSidebar 
        currentPage={bEndPage} 
        onNavigate={setBEndPage} 
        onSwitchMode={handleSwitchMode} 
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <BHeader />
        <main className="flex-1 overflow-y-auto">
          {bEndPage === 'dashboard' && <Dashboard />}
          {bEndPage === 'knowledge' && <KnowledgeBase />}
          {bEndPage === 'ai_gen' && <AIGeneration />}
          {bEndPage === 'automation' && <Automation />}
          {bEndPage === 'cms' && <CMS />}
        </main>
      </div>
    </div>
  );
}
