import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { labNews } from '../data/newsData';
import type { NewsCategory } from '../types';

interface NewsViewProps {
  selectedNewsId: string | null;
  setSelectedNewsId: (id: string | null) => void;
}

const ARTICLES_PER_PAGE = 6;

const categoryLabels: Record<NewsCategory | 'all', string> = {
  all: '全部动态',
  news: '实验室动态',
  conference: '学术会议',
  seminar: '学术报告与培训',
  announcement: '建设通告',
};

const filterTags: (NewsCategory | 'all')[] = ['all', 'news', 'conference', 'seminar', 'announcement'];

export const NewsView: React.FC<NewsViewProps> = ({ selectedNewsId, setSelectedNewsId }) => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory | 'all'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredNews = useMemo(
    () =>
      labNews.filter((news) =>
        selectedCategory === 'all' ? true : news.category === selectedCategory
      ),
    [selectedCategory]
  );

  const totalPages = Math.max(1, Math.ceil(filteredNews.length / ARTICLES_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedNews = filteredNews.slice(
    (safePage - 1) * ARTICLES_PER_PAGE,
    safePage * ARTICLES_PER_PAGE
  );

  const activeFullNews = labNews.find((n) => n.id === selectedNewsId) ?? null;

  return (
    <div className="space-y-10 py-1">
      <PageHeader
        label="建设历程 · 学术交流 · 平台进展"
        title="学术动态"
        description="记录实验室建设期以来的重要节点、学术会议与交流活动、观测平台建设和业务系统进展。"
      />

      {activeFullNews ? (
        <article className="mx-auto max-w-3xl space-y-6 py-2">
          <button
            type="button"
            onClick={() => setSelectedNewsId(null)}
            className="mb-2 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-stone-400 transition hover:text-orange-600"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>返回动态列表</span>
          </button>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-orange-600">
              <span>{categoryLabels[activeFullNews.category]}</span>
              <span className="text-stone-300">•</span>
              <span className="font-mono text-stone-500">{activeFullNews.date}</span>
            </div>
            <h3 className="font-sans text-2xl font-bold leading-snug text-stone-900 md:text-3xl">
              {activeFullNews.titleZh}
            </h3>
          </div>

          {activeFullNews.image && (
            <figure className="space-y-2">
              <div className="aspect-video w-full overflow-hidden rounded-xl border border-stone-100 bg-stone-50">
                <img
                  src={activeFullNews.image}
                  alt={activeFullNews.imageCaptionZh ?? activeFullNews.titleZh}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              {activeFullNews.imageCaptionZh && (
                <figcaption className="text-center text-xs text-stone-400">
                  {activeFullNews.imageCaptionZh}
                </figcaption>
              )}
            </figure>
          )}

          <div className="space-y-4 border-y border-brand-100 py-6 text-justify font-sans text-base leading-7 text-stone-600">
            <p className="border-l-2 border-brand-300 pl-4 text-base font-semibold leading-relaxed text-stone-800">
              {activeFullNews.summaryZh}
            </p>
            {activeFullNews.paragraphsZh.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={() => setSelectedNewsId(null)}
              className="cursor-pointer border-b border-brand-300 px-1 py-2 text-sm font-semibold text-brand-700 transition hover:border-brand-700"
            >
              返回动态列表
            </button>
          </div>
        </article>
      ) : (
        <div className="space-y-6">
          <div className="flex snap-x snap-mandatory overflow-x-auto border-y border-brand-100" role="group" aria-label="动态分类">
            {filterTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => {
                  setSelectedCategory(tag);
                  setCurrentPage(1);
                }}
                aria-pressed={selectedCategory === tag}
                className={`relative min-h-12 shrink-0 snap-start cursor-pointer px-4 py-2 text-sm font-semibold transition ${
                  selectedCategory === tag
                    ? 'bg-brand-50/70 text-brand-900 after:absolute after:inset-x-0 after:bottom-[-1px] after:h-0.5 after:bg-brand-600'
                    : 'text-stone-600 hover:bg-white hover:text-stone-900'
                }`}
              >
                {categoryLabels[tag]}
              </button>
            ))}
          </div>

          <div className="divide-y divide-brand-100 border-y border-brand-100">
            {paginatedNews.map((news) => (
              <button
                key={news.id}
                type="button"
                onClick={() => setSelectedNewsId(news.id)}
                className="group flex w-full cursor-pointer flex-col gap-5 py-6 text-left transition hover:bg-white/45 sm:flex-row sm:px-3"
              >
                {news.image ? (
                  <div className="h-40 w-full shrink-0 overflow-hidden rounded-xl border border-brand-100 bg-stone-50 sm:h-32 sm:w-48">
                    <img
                      src={news.image}
                      alt={news.imageCaptionZh ?? news.titleZh}
                      className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex h-40 w-full shrink-0 items-center justify-center rounded-xl border border-brand-100 bg-brand-50/50 text-xs font-semibold text-stone-400 sm:h-32 sm:w-48">
                    {categoryLabels[news.category]}
                  </div>
                )}

                <div className="flex w-full flex-col justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-orange-600">
                      <span>{categoryLabels[news.category]}</span>
                      <span className="text-stone-300">•</span>
                      <span className="font-mono text-stone-400">{news.date}</span>
                    </div>

                    <h4 className="font-sans text-base font-bold leading-snug text-stone-900 transition group-hover:text-orange-600">
                      {news.titleZh}
                    </h4>

                    <p className="line-clamp-2 text-sm leading-relaxed text-stone-500">
                      {news.summaryZh}
                    </p>
                  </div>

                  <div className="flex items-center justify-end pt-2 text-sm font-semibold text-stone-400">
                    <span className="flex shrink-0 items-center gap-1 transition group-hover:text-orange-600">
                      <Eye className="h-3.5 w-3.5" />
                      <span>阅读正文</span>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <p className="py-12 text-center text-base text-stone-500">暂无该分类下的动态</p>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
                className="rounded-lg border border-stone-200 bg-white p-2 text-stone-600 transition hover:bg-stone-50 disabled:opacity-40"
                aria-label="上一页"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-mono text-sm font-bold text-stone-600">
                {safePage} / {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
                className="rounded-lg border border-stone-200 bg-white p-2 text-stone-600 transition hover:bg-stone-50 disabled:opacity-40"
                aria-label="下一页"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
