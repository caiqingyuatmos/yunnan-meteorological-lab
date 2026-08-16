import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { SectionHeading } from './SectionHeading';
import {
  academicCommittee,
  labLeadership,
  orgOverviewZh,
  orgScaleZh,
} from '../data/orgData';

const roleBadgeStyle: Record<string, string> = {
  主任委员: 'border-orange-500/30 bg-orange-600/10 text-orange-700',
  副主任委员: 'border-amber-500/30 bg-amber-50 text-amber-700',
  委员: 'border-stone-200 bg-stone-50 text-stone-600',
};

export const OrganizationView: React.FC = () => {
  const chairs = academicCommittee.filter((m) => m.roleZh !== '委员');
  const members = academicCommittee.filter((m) => m.roleZh === '委员');

  return (
    <div className="space-y-12 py-1">
      <PageHeader
        label="治理与运行"
        title="组织框架"
        description="实验室主任负责制，主任—学术委员会—管理委员会三级共管。"
      />

      <section className="grid grid-cols-1 divide-y divide-brand-100 border-y border-brand-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
        <div className="py-6 lg:pr-8">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-brand-600">Governance</span>
          <h3 className="mt-1 font-sans text-lg font-extrabold text-stone-900">运行模式</h3>
          <p className="mt-3 text-base leading-relaxed text-stone-600">{orgOverviewZh}</p>
        </div>
        <div className="py-6 lg:pl-8">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-brand-600">Scale</span>
          <h3 className="mt-1 font-sans text-lg font-extrabold text-stone-900">团队规模</h3>
          <p className="mt-3 text-base leading-relaxed text-stone-600">{orgScaleZh}</p>
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeading eyebrow="Leadership" title="实验室负责人" meta={`${labLeadership.length} 位负责人`} />
        <div className="grid grid-cols-1 divide-y divide-brand-100 border-y border-brand-100 md:grid-cols-2 md:divide-x md:divide-y-0">
          {labLeadership.map((person) => {
            const cardContent = (
              <>
                <div className="flex items-baseline gap-3">
                  <h4 className="font-sans text-lg font-bold text-stone-900">{person.nameZh}</h4>
                  <span className="rounded-full border border-orange-500/30 bg-orange-600/10 px-2.5 py-0.5 text-xs font-semibold text-orange-700">
                    {person.roleZh}
                  </span>
                  {person.profileUrl && (
                    <ArrowUpRight className="ml-auto h-4 w-4 text-stone-400 transition-colors group-hover:text-orange-600" />
                  )}
                </div>
                <p className="mt-2 text-sm text-stone-600">{person.titleZh}</p>
                <ul className="mt-4 space-y-2 border-t border-stone-100 pt-4">
                  {person.notesZh.map((note) => (
                    <li key={note} className="flex gap-2 text-sm leading-relaxed text-stone-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300" />
                      {note}
                    </li>
                  ))}
                </ul>
                {person.profileUrl && (
                  <p className="mt-4 text-xs font-medium text-orange-600 opacity-0 transition-opacity group-hover:opacity-100">
                    查看个人主页
                  </p>
                )}
              </>
            );

            const cardClassName =
              'group p-6 transition hover:bg-white/55';

            return person.profileUrl ? (
              <a
                key={person.id}
                href={person.profileUrl}
                className={`${cardClassName} block cursor-pointer no-underline text-inherit`}
                aria-label={`查看${person.nameZh}个人主页`}
              >
                {cardContent}
              </a>
            ) : (
              <article key={person.id} className={cardClassName}>
                {cardContent}
              </article>
            );
          })}
        </div>
        <p className="text-xs text-stone-400">
          注：另设副主任三人；主任由学校聘任，副主任由主任任命。
        </p>
      </section>

      <section className="space-y-5">
        <SectionHeading
          eyebrow="Academic committee"
          title="学术委员会成员"
          description="主任委员 1 人、副主任委员 5 人、委员 14 人（含院士 3 人）。"
          meta={`${academicCommittee.length} 位成员`}
        />

        <div className="grid grid-cols-1 divide-y divide-brand-100 border-y border-brand-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
          {chairs.map((member) => (
            <div
              key={member.name}
              className="p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-sans text-lg font-bold text-stone-900">{member.name}</span>
                <span
                  className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                    roleBadgeStyle[member.roleZh] ?? roleBadgeStyle['委员']
                  }`}
                >
                  {member.roleZh}
                </span>
              </div>
              <p className="mt-2 text-sm text-stone-600">{member.titleZh}</p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden border-y border-brand-100 bg-white/35">
          <div className="border-b border-stone-100 bg-stone-50/80 px-5 py-3">
            <h4 className="font-sans text-sm font-bold text-stone-900">委员（14 人）</h4>
          </div>
          <ul className="grid grid-cols-1 divide-y divide-stone-100 sm:grid-cols-2 sm:divide-y-0">
            {members.map((member) => (
              <li
                key={member.name}
                className="flex items-center justify-between gap-3 px-5 py-3 text-sm sm:border-b sm:border-stone-100"
              >
                <span className="font-semibold text-stone-800">{member.name}</span>
                <span className="text-stone-500">{member.titleZh}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
