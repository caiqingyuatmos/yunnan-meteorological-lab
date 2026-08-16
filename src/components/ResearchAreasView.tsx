import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { mockThemes } from '../data/mockData';
import { Radio, Sun, Shield } from 'lucide-react';
import { PageHeader } from './PageHeader';

export const ResearchAreasView: React.FC = () => {
  const { t } = useLanguage();
  const [selectedThemeId, setSelectedThemeId] = useState<string>('theme-1');

  const activeTheme = mockThemes.find((theme) => theme.id === selectedThemeId) || mockThemes[0];
  const activeThemeIndex = mockThemes.findIndex((theme) => theme.id === activeTheme.id);

  const handleDirectionKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % mockThemes.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + mockThemes.length) % mockThemes.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = mockThemes.length - 1;
    else return;

    event.preventDefault();
    const nextTheme = mockThemes[nextIndex];
    setSelectedThemeId(nextTheme.id);
    requestAnimationFrame(() => document.getElementById(`direction-tab-${nextTheme.id}`)?.focus());
  };

  const getThemeIcon = (id: string) => {
    switch (id) {
      case 'theme-1':
        return <Radio className="h-5 w-5 text-orange-600" />;
      case 'theme-2':
        return <Sun className="h-5 w-5 text-amber-500" />;
      default:
        return <Shield className="h-5 w-5 text-orange-500" />;
    }
  };

  const getThemeHighlights = (themeId: string) => {
    if (themeId === 'theme-1') {
      return [
        { labelZh: '多源观测资料融合', value: '站点 / 雷达 / 卫星' },
        { labelZh: '灾害性天气事件识别', value: '结构 / 演变' },
        { labelZh: '季风相互作用诊断', value: '东亚 / 印度季风' },
        { labelZh: '外源强迫影响分析', value: '海温 / 积雪 / 海冰' },
      ];
    }
    if (themeId === 'theme-2') {
      return [
        { labelZh: '风能太阳能资源评估', value: '时空分布' },
        { labelZh: '未来气候资源预估', value: 'CMIP6 / 降尺度' },
        { labelZh: '资源开发潜力评价', value: 'GIS 分析' },
        { labelZh: '特色农业气候区划', value: '风险 / 适宜性' },
      ];
    }
    return [
      { labelZh: '区域海气耦合模式', value: '模拟 / 预测' },
      { labelZh: '灾害天气监测预警', value: 'MOS / 机器学习' },
      { labelZh: '气候监测预测系统', value: '观测 / 再分析' },
      { labelZh: '山地气候灾害评估', value: '水循环 / 孕灾环境' },
    ];
  };

  return (
    <div className="space-y-10 py-1">
      <PageHeader
        label={t('三大研究方向', 'Research Directions')}
        title={t('气候动力 · 资源利用 · 防灾减灾', 'Dynamics · Resources · Disaster Reduction')}
        description={t(
          '面向大湄公河次区域气候安全与绿色发展。',
          'Serving climate security and green development in the Greater Mekong Subregion.'
        )}
      />

      <section aria-labelledby="direction-selector-title" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
              Research map
            </span>
            <h3 id="direction-selector-title" className="mt-1 font-sans text-xl font-extrabold tracking-tight text-slate-900">
              选择研究方向
            </h3>
          </div>
          <span className="hidden text-sm text-slate-500 sm:block">共 {mockThemes.length} 个方向</span>
        </div>

        <div
          role="tablist"
          aria-label="研究方向"
          className="flex snap-x snap-mandatory overflow-x-auto border-y border-brand-100"
        >
          {mockThemes.map((theme, index) => {
            const isSelected = selectedThemeId === theme.id;
            return (
              <button
                key={theme.id}
                id={`direction-tab-${theme.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={`direction-panel-${theme.id}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedThemeId(theme.id)}
                onKeyDown={(event) => handleDirectionKeyDown(event, index)}
                className={`relative flex min-w-[270px] flex-1 snap-start items-center gap-3 px-4 py-5 text-left transition-colors duration-200 sm:min-w-0 sm:px-5 ${
                  isSelected
                    ? 'bg-brand-50/60 text-brand-900'
                    : 'text-slate-500 hover:bg-white hover:text-slate-800'
                }`}
              >
                <span className={`font-mono text-xs font-bold ${isSelected ? 'text-orange-600' : 'text-slate-400'}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={isSelected ? '' : 'grayscale'}>{getThemeIcon(theme.id)}</span>
                <span className="font-sans text-sm font-extrabold leading-snug">{theme.titleZh}</span>
                {isSelected && <span className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-orange-500" />}
              </button>
            );
          })}
        </div>
      </section>

      <section
        id={`direction-panel-${activeTheme.id}`}
        role="tabpanel"
        aria-labelledby={`direction-tab-${activeTheme.id}`}
        className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12"
      >
        <article>
          <div className="border-b border-brand-200 pb-7">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
              Direction {String(activeThemeIndex + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-2 max-w-3xl font-sans text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              {activeTheme.titleZh}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{activeTheme.descZh}</p>
          </div>

          <div className="mt-7">
            <div className="flex items-baseline justify-between gap-4">
              <h4 className="font-sans text-base font-extrabold text-slate-900">核心研究任务</h4>
              <span className="font-mono text-xs text-slate-400">{activeTheme.subThemes.length} 项</span>
            </div>

            <ol className="mt-4 divide-y divide-brand-100 border-y border-brand-100">
              {activeTheme.subThemes.map((sub, sIdx) => (
                <li key={sIdx} className="grid gap-3 py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-5">
                  <span className="font-mono text-sm font-bold text-orange-600">
                    {String(sIdx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h5 className="font-sans text-base font-extrabold leading-snug text-slate-900 sm:text-lg">
                      {sub.nameZh}
                    </h5>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{sub.descZh}</p>
                    <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs leading-5 text-slate-500">
                      <span className="font-bold text-slate-400">关键支撑</span>
                      {sub.equipmentZh.map((eq, eIdx) => (
                        <React.Fragment key={eIdx}>
                          {eIdx > 0 && <span aria-hidden="true" className="text-brand-200">·</span>}
                          <span>{eq}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="方向摘要">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-brand-900 p-6 text-white shadow-[0_18px_45px_rgba(23,56,86,0.16)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: 'url(/metmek-contour-texture.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
            <div className="relative">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-brand-200">At a glance</span>
              <h4 className="mt-2 font-sans text-lg font-extrabold">方向摘要</h4>
              <p className="mt-2 text-sm leading-6 text-brand-100">快速了解本方向的观测对象与分析尺度。</p>

              <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
                {getThemeHighlights(selectedThemeId).map((read, idx) => (
                  <div key={idx} className="py-4">
                    <dt className="text-sm font-bold leading-5 text-white">{read.labelZh}</dt>
                    <dd className="mt-1 font-mono text-xs leading-5 text-brand-200">{read.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};
