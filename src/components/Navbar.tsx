import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { AppTab } from '../utils/routing';

interface NavbarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: AppTab; zh: string }[] = [
    { id: 'home', zh: '首页' },
    { id: 'areas', zh: '研究方向' },
    { id: 'team', zh: '科研团队' },
    { id: 'organization', zh: '组织框架' },
    { id: 'publications', zh: '科研成果' },
    { id: 'service', zh: '社会服务' },
    { id: 'news', zh: '学术动态' },
  ];

  const goHome = () => {
    setActiveTab('home');
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-100/80 bg-white/95 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-orange-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        跳到主要内容
      </a>

      <div className="relative mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[4.75rem] lg:px-8">
        <div
          className="group flex min-w-0 cursor-pointer items-center gap-2.5 rounded-xl outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-4 sm:gap-3"
          onClick={goHome}
          onKeyDown={(e) => e.key === 'Enter' && goHome()}
          role="button"
          tabIndex={0}
          aria-label="返回首页"
        >
          <img
            src="/metmek-logo.png"
            alt="MetMek 实验室标识"
            className="h-10 w-10 shrink-0 rounded-full border border-brand-100 object-cover shadow-sm sm:h-11 sm:w-11"
          />
          <div className="flex min-w-0 flex-col">
            <span className="text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-brand-600 sm:text-[11px]">
              MetMek Laboratory
            </span>
            <span className="mt-1 truncate font-sans text-xs font-bold leading-snug tracking-tight text-stone-900 sm:text-sm lg:text-[15px]">
              <span className="sm:hidden">大湄公河气象重点实验室</span>
              <span className="hidden sm:inline xl:hidden">云南省大湄公河次区域重点实验室</span>
              <span className="hidden xl:inline">
                云南省大湄公河次区域气象灾害与气候资源重点实验室
              </span>
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="主导航">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative min-h-11 whitespace-nowrap rounded-xl px-2.5 py-2 text-sm font-medium transition-all duration-200 xl:px-3.5 ${
                  isActive
                    ? 'bg-brand-50 font-bold text-brand-700'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-stone-950'
                }`}
              >
                {item.zh}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-brand-500" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-stone-600 transition hover:bg-brand-50 hover:text-brand-700 active:bg-brand-100"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="移动端主导航"
          className="absolute left-0 right-0 top-full border-t border-brand-100 bg-white/98 shadow-[0_18px_45px_rgba(15,42,73,0.16)] backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`block min-h-11 w-full rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-brand-700 text-white shadow-sm'
                      : 'bg-stone-50/70 text-stone-700 hover:bg-brand-50 hover:text-brand-700 active:bg-brand-100'
                  }`}
                >
                  {item.zh}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};
