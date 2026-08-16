import React, { useState, useEffect, useCallback } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ResearchAreasView } from './components/ResearchAreasView';
import { ResearchTeamView } from './components/ResearchTeamView';
import { PublicationsView } from './components/PublicationsView';
import { NewsView } from './components/NewsView';
import { SocialServiceView } from './components/SocialServiceView';
import { OrganizationView } from './components/OrganizationView';
import { motion, useReducedMotion } from 'motion/react';
import { parseHashRoute, navigateTo, type AppTab } from './utils/routing';

export default function App() {
  const [activeTab, setActiveTabState] = useState<AppTab>('home');
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const syncFromHash = useCallback(() => {
    const { tab, newsId } = parseHashRoute();
    setActiveTabState(tab);
    setSelectedNewsId(newsId);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [syncFromHash]);

  const setActiveTab = useCallback((tabId: AppTab) => {
    setSelectedNewsId(null);
    navigateTo(tabId);
  }, []);

  const setSelectedNewsWithRoute = useCallback((id: string | null) => {
    if (id) {
      navigateTo('news', id);
    } else {
      navigateTo('news');
    }
  }, []);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            onNavigate={(tabId) => {
              setActiveTab(tabId);
            }}
            onSelectNews={(newsId) => {
              setSelectedNewsWithRoute(newsId);
            }}
          />
        );
      case 'areas':
        return <ResearchAreasView />;
      case 'team':
        return <ResearchTeamView />;
      case 'organization':
        return <OrganizationView />;
      case 'publications':
        return <PublicationsView />;
      case 'service':
        return <SocialServiceView />;
      case 'news':
        return (
          <NewsView
            selectedNewsId={selectedNewsId}
            setSelectedNewsId={setSelectedNewsWithRoute}
          />
        );
      default:
        return (
          <HomeView
            onNavigate={setActiveTab}
            onSelectNews={(newsId) => setSelectedNewsWithRoute(newsId)}
          />
        );
    }
  };

  return (
    <LanguageProvider>
      <div className="site-shell flex min-h-screen flex-col font-sans text-stone-800 antialiased">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main id="main-content" className="flex-grow">
          <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-11">
            <motion.div
              key={`${activeTab}-${selectedNewsId ?? ''}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: 'easeOut' }}
            >
              {renderActiveView()}
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
