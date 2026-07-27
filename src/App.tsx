import React, { useState, useEffect } from 'react';
import { ActivePage } from './types';
import { CourseMetadataBadge } from './components/CourseMetadataBadge';
import { HeaderNavbar } from './components/HeaderNavbar';
import { ResearchTemplateModal } from './components/ResearchTemplateModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { IssuePage } from './pages/IssuePage';
import { AdvocatePage } from './pages/AdvocatePage';
import { ReflectionPage } from './pages/ReflectionPage';
import { ActionPage } from './pages/ActionPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { WorksCitedPage } from './pages/WorksCitedPage';

export default function App() {
  const validPages: ActivePage[] = ['home', 'issue', 'advocate', 'reflection', 'action', 'glossary', 'citation'];

  const getInitialPage = (): ActivePage => {
    const hash = window.location.hash.replace('#', '');
    if (validPages.includes(hash as ActivePage)) {
      return hash as ActivePage;
    }
    return 'home';
  };

  const [activePage, setActivePageState] = useState<ActivePage>(getInitialPage);
  const [templateOpen, setTemplateOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const setActivePage = (page: ActivePage) => {
    setActivePageState(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  // Sync hash changes (e.g. browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (validPages.includes(hash as ActivePage)) {
        setActivePageState(hash as ActivePage);
      } else if (!hash) {
        setActivePageState('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Keyboard shortcuts (e.g., Cmd+K / Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col selection:bg-cyan-200 selection:text-cyan-900">
      {/* Top Course Metadata Bar */}
      <CourseMetadataBadge
        onOpenTemplate={() => setTemplateOpen(true)}
      />

      {/* Main Google Sites Sticky Header */}
      <HeaderNavbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenTemplate={() => setTemplateOpen(true)}
        onSearchOpen={() => setSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenTemplate={() => setTemplateOpen(true)}
          />
        )}

        {activePage === 'issue' && <IssuePage />}

        {activePage === 'advocate' && <AdvocatePage />}

        {activePage === 'reflection' && <ReflectionPage />}

        {activePage === 'action' && <ActionPage />}

        {activePage === 'glossary' && <GlossaryPage />}

        {activePage === 'citation' && (
          <WorksCitedPage onOpenTemplate={() => setTemplateOpen(true)} />
        )}
      </main>

      {/* Google Sites Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenTemplate={() => setTemplateOpen(true)}
      />

      {/* Modals */}
      <ResearchTemplateModal
        isOpen={templateOpen}
        onClose={() => setTemplateOpen(false)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        setActivePage={setActivePage}
      />
    </div>
  );
}
