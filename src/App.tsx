import { useState } from 'react';
import { AppMode, CEndPage, BEndPage } from './types';
import CHeader from './components/layout/CHeader';
import CFooter from './components/layout/CFooter';
import Home from './pages/c-end/Home';
import Brand from './pages/c-end/Brand';
import Environment from './pages/c-end/Environment';
import Meals from './pages/c-end/Meals';
import Recovery from './pages/c-end/Recovery';
import MomsVoice from './pages/c-end/MomsVoice';
import Contact from './pages/c-end/Contact';
import BSidebar from './components/layout/BSidebar';
import BHeader from './components/layout/BHeader';
import CMS from './pages/b-end/CMS';

export default function App() {
  const [mode, setMode] = useState<AppMode>('c_end');
  const [cEndPage, setCEndPage] = useState<CEndPage>('home');
  const [bEndPage, setBEndPage] = useState<BEndPage>('cms');

  const handleSwitchMode = () => {
    setMode(mode === 'c_end' ? 'b_end' : 'c_end');
  };

  const renderCPage = () => {
    switch (cEndPage) {
      case 'home': return <Home />;
      case 'brand': return <Brand />;
      case 'environment': return <Environment />;
      case 'meals': return <Meals />;
      case 'recovery': return <Recovery />;
      case 'moms_voice': return <MomsVoice />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
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
          {renderCPage()}
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
          {bEndPage === 'cms' && <CMS />}
        </main>
      </div>
    </div>
  );
}
