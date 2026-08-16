import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { mockPillars } from '../data/mockData';
import { featuredPublications } from '../data/labData';
import { labNews } from '../data/newsData';
import {
  CloudRain,
  Sun,
  Shield,
  ChevronRight,
  Eye,
  ChevronDown,
  ChevronUp,
  PlayCircle,
} from 'lucide-react';
import type { AppTab } from '../utils/routing';
import { SectionHeading } from './SectionHeading';

interface HomeViewProps {
  onNavigate: (tabId: AppTab) => void;
  onSelectNews: (newsId: string) => void;
}

const HERO_SUMMARY_ZH =
  '实验室于2023年获批筹建，2025年通过建设期验收并转入长期建设。以服务国家「一带一路」倡议与云南省战略定位为目标，依托云南大学，联合云南省气候中心、成都信息工程大学，立足云南、辐射大湄公河次区域，围绕气候动力学、气候资源与气象灾害防灾减灾开展综合研究。';

const HERO_MOBILE_SUMMARY_ZH =
  '实验室依托云南大学，联合云南省气候中心、成都信息工程大学，面向大湄公河次区域开展气候动力、资源利用与防灾减灾研究。';

const HERO_DETAIL_ZH =
  '面向气象防灾减灾、生态安全与清洁能源等重大需求，实验室整合共建单位科研团队与平台设备优势，坚持教育科技人才一体推进，着力建设与国家赋予云南战略定位相匹配的大气科学研究中心与人才培养基地，为云南—东南亚地区气象防灾减灾与气候资源开发利用提供科学依据与决策支持。';

const NEWS_CATEGORY_LABELS: Record<string, string> = {
  news: '实验室动态',
  conference: '学术会议',
  seminar: '学术报告与培训',
  announcement: '建设通告',
};

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectNews }) => {
  const { t } = useLanguage();
  const [heroExpanded, setHeroExpanded] = useState(false);

  const latestNews = labNews.slice(0, 2);
  const featuredPubs = featuredPublications.slice(0, 2);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'CloudRain':
        return <CloudRain className="h-8 w-8 text-amber-600" />;
      case 'Sun':
        return <Sun className="h-8 w-8 text-amber-500" />;
      default:
        return <Shield className="h-8 w-8 text-orange-500" />;
    }
  };

  return (
    <div className="space-y-16 py-1 sm:space-y-20">
      <div className="space-y-3">
        <section className="relative flex items-center overflow-hidden rounded-[2rem] border border-[#1a365d]/60 bg-gradient-to-br from-[#16304f] via-[#1a365d] to-[#0f2138] px-6 py-10 text-stone-100 shadow-[0_24px_65px_rgba(13,29,49,0.22)] sm:min-h-[24rem] sm:px-10 sm:py-12 lg:min-h-[26rem]">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_72%_22%,rgba(125,184,220,0.14),transparent_50%)]" />
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-[0.22]"
            aria-hidden="true"
            style={{
              backgroundImage: 'url(./metmek-contour-texture.png)',
              backgroundSize: 'cover',
              backgroundPosition: '70% 30%',
              backgroundRepeat: 'no-repeat',
              mixBlendMode: 'soft-light',
            }}
          />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <img
              src="./metmek-logo.png"
              alt="MetMek 实验室标识"
              className="mx-auto h-24 w-24 rounded-full border-4 border-white/10 object-cover shadow-[0_12px_35px_rgba(0,0,0,0.28)] md:h-32 md:w-32"
            />

            <h1 className="mt-5 font-sans text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-[2rem] lg:text-[2.15rem]">
              云南省大湄公河次区域气象灾害与气候资源重点实验室
            </h1>
            <p className="mt-3 max-w-6xl text-[13px] font-medium leading-6 text-brand-200 sm:text-base sm:leading-7 lg:text-[17px]">
              Yunnan Key Laboratory of <strong className="text-white">Met</strong>eorological Disasters and Climate Resources in the Greater <strong className="text-white">Mek</strong>ong Subregion <strong className="text-white">(MetMek)</strong>
            </p>

            <div className="mt-6 h-px w-14 bg-white/25" aria-hidden="true" />
            <span className="mt-5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand-200 sm:text-xs">
              Our mission
            </span>
            <h2 className="mt-2 font-sans text-xl font-extrabold leading-snug tracking-tight text-brand-200 sm:whitespace-nowrap sm:text-2xl lg:text-[1.7rem]">
              <span className="block sm:inline">筑牢西南气象灾害防线 </span>
              <span className="block sm:inline">探究高原气候变化规律</span>
            </h2>
          </div>
        </section>

        <section className="relative isolate overflow-hidden rounded-[1.75rem] border border-brand-100 bg-white/90 px-6 py-7 shadow-[0_18px_45px_rgba(23,56,86,0.10)] sm:px-9 sm:py-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20 opacity-[0.07]"
            style={{
              backgroundImage: 'url(/metmek-contour-texture.png)',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'min(760px, 72vw) auto',
            }}
          />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.96)_50%,rgba(255,255,255,0.68)_100%)]" />

          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="text-center">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-brand-600">About the lab</span>
              <h2 className="mt-2 font-sans text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-3xl">
                实验室简介
              </h2>
            </div>

            <div className="mt-6 flex flex-col items-center space-y-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
              <p className={heroExpanded ? 'hidden' : 'sm:hidden'}>
                {t(HERO_MOBILE_SUMMARY_ZH, HERO_MOBILE_SUMMARY_ZH)}
              </p>
              <p className={heroExpanded ? 'block' : 'hidden sm:block'}>
                {t(HERO_SUMMARY_ZH, HERO_SUMMARY_ZH)}
              </p>
              {heroExpanded && <p className="text-slate-500">{t(HERO_DETAIL_ZH, HERO_DETAIL_ZH)}</p>}
              <button
                type="button"
                onClick={() => setHeroExpanded((v) => !v)}
                className="inline-flex min-h-11 items-center gap-1 border-b border-brand-200 px-1 text-sm font-semibold text-brand-600 transition hover:border-brand-600 hover:text-brand-800"
              >
                {heroExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    收起简介
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    了解更多
                  </>
                )}
              </button>

              <div className="flex flex-col justify-center gap-3 pt-1 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => onNavigate('areas')}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-900/15 transition hover:bg-brand-600 active:bg-brand-800"
                >
                  <span>深度探索研究方向</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('team')}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-200 bg-white/75 px-5 py-2.5 text-sm font-bold text-brand-800 transition hover:border-brand-400 hover:bg-white"
                >
                  <span>了解科研团队</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section aria-labelledby="lab-video-title" className="space-y-6">
        <SectionHeading
          id="lab-video-title"
          eyebrow="Laboratory film"
          title="云南省大湄公河次区域实验室建设成效"
          description="通过影像了解实验室建设历程、科研平台与区域气象服务成果。"
          action={<PlayCircle className="h-5 w-5 text-brand-500" aria-hidden="true" />}
        />

        <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] border border-brand-100 bg-stone-950 p-2 shadow-[0_18px_45px_rgba(23,56,86,0.14)]">
          <video
            className="aspect-video w-full rounded-2xl bg-black object-contain"
            controls
            poster="./videos/lab-intro-poster.jpg"
            preload="metadata"
            playsInline
            aria-label="云南省大湄公河次区域实验室建设成效视频"
          >
            <source src="./videos/lab-intro.mp4" type="video/mp4" />
            您的浏览器暂不支持视频播放，请升级浏览器后重试。
          </video>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Research map"
          title="面向区域需求的三大研究方向"
          description="从气候动力到资源评估与灾害预警，系统支撑区域气候安全。"
          meta="3 个方向"
        />

        <div className="grid grid-cols-1 divide-y divide-brand-100 border-y border-brand-100 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {mockPillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className="group flex flex-col px-1 py-6 sm:px-4 lg:px-6"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-brand-500">{String(index + 1).padStart(2, '0')}</span>
                <div className="[&_svg]:h-5 [&_svg]:w-5">{getPillarIcon(pillar.icon)}</div>
                <h4 className="font-sans text-base font-bold text-slate-900">{pillar.titleZh}</h4>
              </div>
              <p className="mt-4 flex-grow text-sm leading-relaxed text-slate-500">{pillar.descZh}</p>
              <button
                type="button"
                onClick={() => onNavigate('areas')}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
              >
                查看研究方向详情
                <ChevronRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-brand-100">
        <div className="space-y-6 lg:pr-8">
          <div className="flex items-end justify-between border-b border-stone-200 pb-3">
            <h4 className="font-sans text-xl font-bold text-slate-900">最新学术动态</h4>
            <button
              type="button"
              onClick={() => onNavigate('news')}
              className="flex items-center space-x-1 text-sm font-semibold text-orange-600 hover:text-orange-700 hover:underline"
            >
              <span>查看全部新闻</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-5">
            {latestNews.map((news) => (
              <button
                key={news.id}
                type="button"
                onClick={() => onSelectNews(news.id)}
                className="group flex w-full gap-4 border-b border-brand-100 pb-5 text-left transition last:border-b-0 last:pb-0"
              >
                <div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg border border-stone-200/50 bg-slate-100">
                  {news.image ? (
                    <img
                      src={news.image}
                      alt={news.imageCaptionZh ?? news.titleZh}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center text-xs font-semibold text-slate-400">
                      {NEWS_CATEGORY_LABELS[news.category]}
                    </span>
                  )}
                </div>
                <div className="flex min-w-0 flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-orange-600">
                      <span>{NEWS_CATEGORY_LABELS[news.category]}</span>
                      <span className="text-slate-300">•</span>
                      <span className="font-mono text-slate-400">{news.date}</span>
                    </div>
                    <h5 className="mt-1 line-clamp-2 font-sans text-base font-bold text-slate-800 transition group-hover:text-orange-600">
                      {news.titleZh}
                    </h5>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:pl-8">
          <div className="flex items-end justify-between border-b border-stone-200 pb-3">
            <h4 className="font-sans text-xl font-bold text-slate-900">高水平论著</h4>
            <button
              type="button"
              onClick={() => onNavigate('publications')}
              className="flex items-center space-x-1 text-sm font-semibold text-orange-600 hover:text-orange-700 hover:underline"
            >
              <span>学术论著检索</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {featuredPubs.map((pub) => (
              <button
                key={pub.id}
                type="button"
                onClick={() => onNavigate('publications')}
                className="group w-full cursor-pointer border-b border-brand-100 pb-4 text-left transition last:border-b-0 last:pb-0"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <span className="max-w-full rounded-full bg-orange-50 px-2 py-0.5 font-mono text-sm font-bold text-orange-600">
                    {pub.journal}
                  </span>
                  <span className="shrink-0 font-mono text-xs font-medium text-slate-400">#{pub.year}</span>
                </div>
                <h5 className="mt-2 line-clamp-2 font-sans text-base font-bold leading-snug text-slate-800 transition group-hover:text-orange-600">
                  {pub.titleZh}
                </h5>
                <p className="mt-1 line-clamp-1 text-sm italic text-slate-400">{pub.authors}</p>
                <div className="mt-3 flex items-center justify-end text-sm font-medium text-slate-500">
                  <span className="flex items-center space-x-1 text-slate-400 transition-colors group-hover:text-orange-600">
                    <Eye className="h-3.5 w-3.5" />
                    <span>查看成果详情</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
