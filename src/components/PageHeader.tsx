import React from 'react';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ label, title, description }) => {
  return (
    <header className="relative isolate overflow-hidden rounded-[1.75rem] border border-brand-100 bg-gradient-to-br from-white via-white to-brand-50/80 px-5 py-6 shadow-[0_18px_55px_rgba(30,64,98,0.08)] sm:px-8 sm:py-8">
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.09]"
        aria-hidden="true"
        style={{
          backgroundImage: 'url(/metmek-contour-texture.png)',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'min(860px, 78vw) auto',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_38%,rgba(255,255,255,0.48)_68%,rgba(239,245,250,0.18)_100%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-300 via-brand-600 to-brand-800" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl lg:max-w-[62%]">
        <span className="inline-flex rounded-full border border-brand-200 bg-brand-50/90 px-3 py-1 font-sans text-xs font-bold tracking-[0.12em] text-brand-700 backdrop-blur-sm sm:text-sm">
          {label}
        </span>
        <h2 className="mt-3 font-sans text-3xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </header>
  );
};
