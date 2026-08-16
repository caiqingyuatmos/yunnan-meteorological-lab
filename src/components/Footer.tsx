import React from 'react';
import { MapPin, Building2, Navigation } from 'lucide-react';

const linkBase =
  'rounded-sm no-underline outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900';

const coConstructionUnits = [
  { name: '云南大学', href: 'https://www.ynu.edu.cn' },
  { name: '云南省气候中心', href: 'http://yn.cma.gov.cn/bmgk_137/zsjg/' },
  { name: '成都信息工程大学', href: 'https://www.cuit.edu.cn' },
];

const partnerInstitutes = [
  { name: '中国气象局', href: 'https://www.cma.gov.cn' },
  { name: '云南省气象局', href: 'http://yn.cma.gov.cn/' },
  { name: '南京信息工程大学', href: 'https://www.nuist.edu.cn' },
  { name: '中国气象科学研究院', href: 'https://www.camscma.cn' },
  { name: '中国科学院大气物理研究所', href: 'http://www.iap.ac.cn' },
];

function OrgLinks({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
      {items.map((item, index) => (
        <li key={item.name} className="inline-flex items-center text-sm">
          {index > 0 && <span className="mx-2 text-brand-500" aria-hidden="true">·</span>}
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={`font-medium text-slate-300 hover:text-white ${linkBase}`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export const Footer: React.FC = () => {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-brand-700 bg-brand-900 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: 'url(./metmek-contour-texture.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <img
              src="./metmek-logo.png"
              alt="MetMek 实验室标识"
              className="h-14 w-14 shrink-0 rounded-full border-2 border-white/15 object-cover shadow-lg"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">MetMek Laboratory</p>
              <h3 className="mt-1 font-sans text-base font-bold leading-snug text-white md:text-lg">
                云南省大湄公河次区域气象灾害与气候资源重点实验室
              </h3>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            立足云南、辐射大湄公河次区域，围绕气候动力学、气候资源开发利用和气象灾害防灾减灾开展综合研究。
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-brand-300" />
              依托单位：云南大学
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand-300" />
              云南省昆明市呈贡区呈贡大学城 · 650500
            </span>
          </div>
        </div>

        <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
          <div>
            <span className="text-xs font-bold tracking-[0.14em] text-brand-300">共建单位</span>
            <div className="mt-3"><OrgLinks items={coConstructionUnits} /></div>
          </div>
          <div className="border-t border-white/10 pt-5">
            <span className="text-xs font-bold tracking-[0.14em] text-brand-300">合作机构</span>
            <div className="mt-3"><OrgLinks items={partnerInstitutes} /></div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-brand-950/45 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 text-center text-xs text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-left">
          <p>© 2026 云南省大湄公河次区域气象灾害与气候资源重点实验室 · 保留所有权利</p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-end">
            <a
              href="https://uri.amap.com/marker?position=102.842,24.860&name=云南大学呈贡校区"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1 font-semibold text-slate-300 hover:text-white ${linkBase}`}
            >
              <Navigation className="h-3.5 w-3.5 text-brand-300" />
              查看地图
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
