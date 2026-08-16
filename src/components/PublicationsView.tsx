import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  Building2,
  ExternalLink,
  FileCheck,
  GraduationCap,
  Search,
  Trophy,
  Users,
} from 'lucide-react';
import { PageHeader } from './PageHeader';
import { SectionHeading } from './SectionHeading';
import {
  achievementItems,
  featuredPublications,
  outputMetrics,
} from '../data/labData';
import { labPublicationRecords } from '../data/publicationRecords';
import type { PublicationTier } from '../types';

const achievementIcons: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="h-5 w-5 text-orange-600" />,
  FileCheck: <FileCheck className="h-5 w-5 text-orange-600" />,
  BookOpen: <BookOpen className="h-5 w-5 text-orange-600" />,
  GraduationCap: <GraduationCap className="h-5 w-5 text-orange-600" />,
  Users: <Users className="h-5 w-5 text-orange-600" />,
  Building2: <Building2 className="h-5 w-5 text-orange-600" />,
};

const tierFilters: (PublicationTier | 'all')[] = [
  'all',
  'Nature 子刊',
  'Nature Portfolio',
  '中科院一区',
  '中科院二区',
  '中文核心期刊',
];

const tierBadgeStyle: Record<string, string> = {
  'Nature 子刊': 'border-orange-500/30 bg-orange-50 text-orange-700',
  'Nature Portfolio': 'border-orange-500/30 bg-orange-50 text-orange-700',
  中科院一区: 'border-amber-500/30 bg-amber-50 text-amber-700',
  中科院二区: 'border-stone-300 bg-stone-50 text-stone-600',
  中文核心期刊: 'border-stone-300 bg-stone-50 text-stone-600',
};

const RECORDS_PER_PAGE = 20;

export const PublicationsView: React.FC = () => {
  const [tier, setTier] = useState<PublicationTier | 'all'>('all');
  const [keyword, setKeyword] = useState('');
  const [visibleCount, setVisibleCount] = useState(RECORDS_PER_PAGE);

  const filteredRecords = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return labPublicationRecords
      .filter((record) => (tier === 'all' ? true : record.tier === tier))
      .filter((record) => (kw ? record.citation.toLowerCase().includes(kw) : true))
      .sort((a, b) => b.year - a.year);
  }, [tier, keyword]);

  const visibleRecords = filteredRecords.slice(0, visibleCount);

  const tierCounts = useMemo(() => {
    const counts = new Map<string, number>();
    labPublicationRecords.forEach((record) => {
      if (record.tier) counts.set(record.tier, (counts.get(record.tier) ?? 0) + 1);
    });
    return counts;
  }, []);

  return (
    <div className="space-y-14 py-1">
      <PageHeader
        label="建设期科研产出"
        title="科研成果"
        description="建设期标注论文 80 余篇，总影响因子超过 320。"
      />

      <dl className="grid grid-cols-2 border-y border-brand-100 lg:grid-cols-4 lg:divide-x lg:divide-brand-100">
        {outputMetrics.map((metric) => (
          <div
            key={metric.id}
            className="border-b border-brand-100 px-3 py-5 even:border-l even:border-brand-100 lg:border-b-0 lg:border-l-0 lg:px-6"
          >
            <dd className="font-sans text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              {metric.value}
            </dd>
            <dt className="mt-1 text-sm font-semibold text-stone-700">{metric.labelZh}</dt>
            <p className="mt-2 text-xs leading-relaxed text-stone-500">{metric.noteZh}</p>
          </div>
        ))}
      </dl>

      <section className="space-y-5">
        <SectionHeading
          eyebrow="Selected research"
          title="代表性高水平论著"
          description="聚焦区域气候动力、ENSO 与极端事件的代表性成果。"
          meta={`${featuredPublications.length} 篇`}
        />

        <div className="grid grid-cols-1 border-y border-brand-100 lg:grid-cols-2">
          {featuredPublications.map((pub, index) => (
            <article
              key={pub.id}
              className="flex flex-col gap-3 border-b border-brand-100 p-5 transition hover:bg-white/45 lg:even:border-l lg:even:border-brand-100"
            >
              <span className="font-mono text-xs font-bold text-brand-500">{String(index + 1).padStart(2, '0')}</span>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded border border-orange-500/20 bg-orange-600/10 px-2.5 py-0.5 font-mono text-xs font-bold uppercase tracking-wide text-orange-600">
                  {pub.journal}
                </span>
                <div className="flex items-center gap-2">
                  {pub.tier && (
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${
                        tierBadgeStyle[pub.tier] ?? 'border-stone-300 bg-stone-50 text-stone-600'
                      }`}
                    >
                      {pub.tier}
                    </span>
                  )}
                  <span className="font-mono text-xs font-semibold text-stone-400">{pub.year}</span>
                </div>
              </div>

              <h4 className="font-sans text-base font-bold leading-snug text-stone-900">
                {pub.titleZh}
              </h4>
              <p className="text-sm font-medium italic text-stone-500">{pub.authors}</p>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-stone-100 pt-3">
                <span className="rounded-lg bg-stone-50 px-2.5 py-1 text-xs font-semibold text-stone-600">
                  {pub.topicZh}
                </span>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-mono text-xs font-semibold text-stone-500 transition hover:text-orange-600 hover:underline"
                >
                  DOI: {pub.doi}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeading
          eyebrow="Publication index"
          title="建设期标注论文清单"
          description={`共 ${labPublicationRecords.length} 条标注论文，可按层级或关键词检索。`}
          action={
            <label className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="search"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
                setVisibleCount(RECORDS_PER_PAGE);
              }}
              placeholder="检索作者、题目或期刊"
              className="w-full rounded-xl border border-stone-200 bg-white py-2 pl-9 pr-3 text-sm text-stone-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
              aria-label="检索论文"
            />
            </label>
          }
        />

        <div className="flex snap-x snap-mandatory overflow-x-auto border-y border-brand-100">
          {tierFilters.map((item) => {
            const isActive = tier === item;
            const count = item === 'all' ? labPublicationRecords.length : tierCounts.get(item) ?? 0;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setTier(item);
                  setVisibleCount(RECORDS_PER_PAGE);
                }}
                className={`relative min-h-12 shrink-0 snap-start px-3.5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-brand-50/70 text-brand-900 after:absolute after:inset-x-0 after:bottom-[-1px] after:h-0.5 after:bg-brand-600'
                    : 'text-stone-600 hover:bg-white hover:text-stone-900'
                }`}
              >
                {item === 'all' ? '全部' : item}
                <span className={`ml-1.5 font-mono text-xs ${isActive ? 'text-brand-500' : 'text-stone-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <ol className="divide-y divide-brand-100 border-y border-brand-100">
          {visibleRecords.map((record, index) => (
            <li
              key={record.id}
              className="flex gap-4 px-1 py-4 sm:px-3"
            >
              <span className="mt-0.5 font-mono text-xs font-bold text-stone-300">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 space-y-2">
                <p className="text-sm leading-relaxed text-stone-700">{record.citation}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {record.year > 0 && (
                    <span className="font-mono text-xs font-semibold text-stone-400">
                      {record.year}
                    </span>
                  )}
                  {record.tier && (
                    <span
                      className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${
                        tierBadgeStyle[record.tier] ?? 'border-stone-300 bg-stone-50 text-stone-600'
                      }`}
                    >
                      {record.tier}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        {filteredRecords.length === 0 && (
          <p className="py-10 text-center text-sm text-stone-500">未检索到匹配的论文记录</p>
        )}

        {visibleCount < filteredRecords.length && (
          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + RECORDS_PER_PAGE)}
              className="rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-600 transition hover:border-orange-300 hover:text-orange-600"
            >
              加载更多（剩余 {filteredRecords.length - visibleCount} 条）
            </button>
          </div>
        )}
      </section>

      <section className="space-y-5">
        <SectionHeading eyebrow="Extended outcomes" title="获奖、知识产权与人才培养成果" meta={`${achievementItems.length} 项`} />
        <div className="grid grid-cols-1 border-y border-brand-100 md:grid-cols-2 lg:grid-cols-3">
          {achievementItems.map((item) => (
            <article
              key={item.id}
              className="border-b border-brand-100 p-5 md:even:border-l md:even:border-brand-100 lg:border-l lg:first:border-l-0"
            >
              <div className="flex items-center gap-2">
                <span>{achievementIcons[item.icon]}</span>
                <h4 className="font-sans text-sm font-bold text-stone-900">{item.titleZh}</h4>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{item.descZh}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
