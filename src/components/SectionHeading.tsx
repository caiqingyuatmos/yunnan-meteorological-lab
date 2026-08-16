import React from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: string;
  action?: React.ReactNode;
  id?: string;
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  meta,
  action,
  id,
}) => (
  <div className="flex flex-col gap-4 border-b border-brand-100 pb-4 sm:flex-row sm:items-end sm:justify-between">
    <div className="max-w-3xl">
      {eyebrow && (
        <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
          {eyebrow}
        </span>
      )}
      <h3 id={id} className={`${eyebrow ? 'mt-1' : ''} font-sans text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl`}>
        {title}
      </h3>
      {description && <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">{description}</p>}
    </div>
    {(meta || action) && (
      <div className="flex w-full items-center gap-3 sm:w-auto sm:shrink-0">
        {meta && <span className="font-mono text-xs text-slate-400">{meta}</span>}
        {action}
      </div>
    )}
  </div>
);
