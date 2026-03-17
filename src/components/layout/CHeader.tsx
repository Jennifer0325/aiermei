import { useState } from 'react';
import { Menu, X, Phone, UserCircle } from 'lucide-react';
import { CEndPage } from '../../types';

interface Props {
  currentPage: CEndPage;
  onNavigate: (page: CEndPage) => void;
  onSwitchMode: () => void;
}

export default function CHeader({ currentPage, onNavigate, onSwitchMode }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: CEndPage; label: string }[] = [
    { id: 'home', label: '首页' },
    { id: 'brand', label: '品牌介绍' },
    { id: 'environment', label: '会所环境' },
    { id: 'meals', label: '月子膳食' },
    { id: 'recovery', label: '产后修复' },
    { id: 'moms_voice', label: '妈妈说' },
    { id: 'contact', label: '联系我们' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
              <span className="text-2xl font-serif font-bold text-rose-600">爱儿美</span>
              <span className="ml-2 text-sm text-gray-500 hidden sm:block">高端月子会所</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-rose-600 border-b-2 border-rose-600'
                    : 'text-gray-600 hover:text-rose-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-rose-600">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">400-123-4567</span>
            </div>
            <button 
              onClick={onSwitchMode}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title="员工后台入口"
            >
              <UserCircle className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  currentPage === item.id
                    ? 'bg-rose-50 border-rose-600 text-rose-700'
                    : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pl-3 pr-4 py-4 border-t border-gray-100">
              <div className="flex items-center text-rose-600 mb-4">
                <Phone className="h-5 w-5 mr-2" />
                <span className="font-semibold">400-123-4567</span>
              </div>
              <button 
                onClick={onSwitchMode}
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                <UserCircle className="h-5 w-5 mr-2" />
                <span>员工后台入口</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
