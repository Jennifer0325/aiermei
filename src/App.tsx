import { useState } from 'react';
import { AppMode, CEndPage } from './types';
import MiniProgramHeader from './components/layout/MiniProgramHeader';
import TabBar from './components/layout/TabBar';
import Home from './pages/c-end/Home';
import Environment from './pages/c-end/Environment';
import Meals from './pages/c-end/Meals';
import Recovery from './pages/c-end/Recovery';
import MomsVoice from './pages/c-end/MomsVoice';
import My from './pages/c-end/My';
import BEndMobile from './pages/b-end/BEndMobile';

export default function App() {
  const [mode, setMode] = useState<AppMode>('c_end');
  const [cEndPage, setCEndPage] = useState<CEndPage>('home');

  const handleSwitchMode = () => {
    setMode(mode === 'c_end' ? 'b_end' : 'c_end');
  };

  const renderCPage = () => {
    switch (cEndPage) {
      case 'home': return <Home onNavigate={setCEndPage} />;
      case 'environment': return <Environment onNavigate={setCEndPage} />;
      case 'meals': return <Meals onNavigate={setCEndPage} />;
      case 'recovery': return <Recovery onNavigate={setCEndPage} />;
      case 'moms_voice': return <MomsVoice onNavigate={setCEndPage} />;
      case 'my': return <My onNavigate={setCEndPage} onSwitchMode={handleSwitchMode} />;
      default: return <Home onNavigate={setCEndPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-200 flex justify-center items-center p-0 md:p-8">
      {/* Mobile Frame Simulation */}
      <div className="w-full h-screen md:w-[414px] md:h-[896px] bg-white md:rounded-[60px] md:shadow-[0_0_0_12px_#1a1a1a,0_0_0_15px_#333,0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col">
        {/* Status Bar Simulation */}
        <div className="h-11 bg-white flex justify-between items-center px-8 shrink-0 z-[60]">
          <span className="text-sm font-bold text-slate-900">9:41</span>
          <div className="flex items-center space-x-1.5">
            <div className="w-4 h-4 rounded-full border-2 border-slate-900"></div>
            <div className="w-4 h-4 rounded-full border-2 border-slate-900"></div>
            <div className="w-6 h-3 rounded-sm border-2 border-slate-900 relative">
              <div className="absolute inset-0.5 bg-slate-900 rounded-px w-[80%]"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col overflow-hidden relative">
          {mode === 'c_end' ? (
            <>
              <MiniProgramHeader 
                currentPage={cEndPage} 
                onNavigate={setCEndPage} 
                onSwitchMode={handleSwitchMode} 
              />
              
              <main className="flex-grow overflow-y-auto pt-16 pb-24 scroll-smooth">
                {renderCPage()}
              </main>
              
              <TabBar 
                currentPage={cEndPage} 
                onNavigate={setCEndPage} 
              />
            </>
          ) : (
            <BEndMobile onSwitchMode={handleSwitchMode} />
          )}
        </div>

        {/* Home Indicator Simulation */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-200 rounded-full z-[60]"></div>
      </div>
    </div>
  );
}
