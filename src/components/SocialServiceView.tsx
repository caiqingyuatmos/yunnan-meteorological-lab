import React from 'react';
import {
  Activity,
  Globe2,
  Radar,
  Sprout,
  Sun,
  Users,
} from 'lucide-react';
import { PageHeader } from './PageHeader';
import { SectionHeading } from './SectionHeading';
import { serviceCases, serviceSystems } from '../data/serviceData';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="h-5 w-5 text-orange-600" />,
  Radar: <Radar className="h-5 w-5 text-orange-600" />,
  Sun: <Sun className="h-5 w-5 text-orange-600" />,
  Sprout: <Sprout className="h-5 w-5 text-orange-600" />,
  Users: <Users className="h-5 w-5 text-orange-600" />,
  Globe2: <Globe2 className="h-5 w-5 text-orange-600" />,
};

export const SocialServiceView: React.FC = () => {
  return (
    <div className="space-y-14 py-1">
      <PageHeader
        label="科技成果转化 · 决策服务 · 开放共享"
        title="社会服务"
        description="推动科研成果进入气象业务与行业应用，开展数值预报、气候资源、农业气象与开放共享服务。"
      />

      <section className="space-y-5">
        <SectionHeading
          eyebrow="Operational systems"
          title="业务化系统与平台"
          description="实验室参与研发并投入业务运行的主要系统。"
          meta={`${serviceSystems.length} 套系统`}
        />

        <div className="grid grid-cols-1 divide-y divide-brand-100 border-y border-brand-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {serviceSystems.map((system) => (
            <article
              key={system.id}
              className="py-6 lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              {system.image && (
                <div className="aspect-video w-full overflow-hidden rounded-[1.25rem] border border-brand-100 bg-stone-50">
                  <img
                    src={system.image}
                    alt={system.nameZh}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="space-y-3 pt-5">
                <div>
                  <h4 className="font-sans text-base font-bold leading-snug text-stone-900">
                    {system.nameZh}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-orange-600">{system.ownerZh}</p>
                </div>
                <p className="text-base leading-relaxed text-stone-600">{system.descZh}</p>
                <ul className="space-y-2 border-t border-stone-100 pt-3">
                  {system.specsZh.map((spec) => (
                    <li key={spec} className="flex gap-2 text-sm leading-relaxed text-stone-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeading
          eyebrow="Service cases"
          title="服务案例"
          description="从科研成果转化到行业应用与区域开放共享。"
          meta={`${serviceCases.length} 个案例`}
        />

        <div className="divide-y divide-brand-100 border-y border-brand-100">
          {serviceCases.map((item, index) => (
            <article
              key={item.id}
              className="grid gap-5 py-7 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-bold text-brand-500">{String(index + 1).padStart(2, '0')}</span>
                <span>{iconMap[item.icon]}</span>
                <div className="min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                    {item.categoryZh}
                  </span>
                  <h4 className="mt-1 font-sans text-base font-bold leading-snug text-stone-900">
                    {item.titleZh}
                  </h4>
                </div>
              </div>

              <div>
                <div className="space-y-3 text-base leading-relaxed text-stone-600">
                  {item.paragraphsZh.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 border-l-2 border-brand-200 pl-4">
                  {item.highlightsZh.map((highlight) => (
                    <li key={highlight} className="text-sm leading-relaxed text-stone-700">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
