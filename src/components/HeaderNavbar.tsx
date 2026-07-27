import React, { useState } from 'react';
import { ActivePage } from '../types';
import { ShareModal } from './ShareModal';
import { 
  Globe, 
  Search, 
  Menu, 
  X, 
  ShieldAlert, 
  UserCheck, 
  BrainCircuit, 
  Flame, 
  BookMarked, 
  FileCheck2,
  FileText,
  Share2,
  Check
} from 'lucide-react';

interface Props {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onOpenTemplate: () => void;
  onSearchOpen: () => void;
}

export const HeaderNavbar: React.FC<Props> = ({
  activePage,
  setActivePage,
  onOpenTemplate,
  onSearchOpen
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    // Open modal so user gets full guidance and public URL options
    setShareModalOpen(true);

    // Compute public link (replace ais-dev- with ais-pre-)
    let publicUrl = window.location.href;
    if (publicUrl.includes('ais-dev-')) {
      publicUrl = publicUrl.replace('ais-dev-', 'ais-pre-');
    }

    try {
      await navigator.clipboard.writeText(publicUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const navItems: { id: ActivePage; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Globe className="w-4 h-4" /> },
    { id: 'issue', label: 'The Issue', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'advocate', label: 'The Advocate', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'reflection', label: 'Critical Reflection', icon: <BrainCircuit className="w-4 h-4" /> },
    { id: 'action', label: 'Take Action', icon: <Flame className="w-4 h-4" /> },
    { id: 'glossary', label: 'Glossary & FAQ', icon: <BookMarked className="w-4 h-4" /> },
    { id: 'citation', label: 'Works Cited', icon: <FileCheck2 className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Google Sites Logo & Site Name */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
              id="sites-logo-home-link"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-600 to-teal-700 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight group-hover:text-cyan-700 transition-colors">
                    Arctic Climate Justice
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono uppercase tracking-wider border border-slate-200">
                    Google Sites
                  </span>
                </div>
                <p className="text-xs text-slate-500 hidden sm:block">
                  Inuit Climate Justice & Sheila Watt-Cloutier Advocacy
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-50 text-cyan-800 border border-cyan-200/80 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <span className={isActive ? 'text-cyan-600' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions & Search */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              id="site-share-btn"
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200/80 rounded-lg transition-colors cursor-pointer"
              title="Share or Copy Link"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-cyan-700" />
                  <span className="hidden sm:inline">Share Site</span>
                </>
              )}
            </button>

            <button
              onClick={onSearchOpen}
              id="site-search-btn"
              className="p-2 text-slate-500 hover:text-cyan-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Search Site"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenTemplate}
              id="nav-research-template-trigger"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-2 rounded-lg border border-slate-200 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600" />
              <span>Research Template</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  isActive
                    ? 'bg-cyan-50 text-cyan-800 font-semibold border-l-4 border-cyan-600'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className={isActive ? 'text-cyan-600' : 'text-slate-400'}>
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 mt-2">
            <button
              onClick={() => {
                onOpenTemplate();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-cyan-700 text-white py-2.5 rounded-lg text-sm font-semibold shadow-xs"
            >
              <FileText className="w-4 h-4" />
              View NBE3U Research Template
            </button>
          </div>
        </div>
      )}

      {/* Share Modal Dialog */}
      <ShareModal 
        isOpen={shareModalOpen} 
        onClose={() => setShareModalOpen(false)} 
      />
    </header>
  );
};
