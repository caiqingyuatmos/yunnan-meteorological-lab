import React, { useMemo, useState } from 'react';
import { Mail, Search } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { PageHeader } from './PageHeader';

type TeamDirectoryMember = {
  id: string;
  name: string;
  title: string;
  unit: string;
  email: string;
  profileUrl?: string;
};

type UnitFilter = '全部' | '云南大学' | '云南省气候中心' | '成都信息工程大学';

const SENIOR_TITLES = new Set(['教授', '教授级高级工程师', '副教授', '高级工程师']);
const MID_TITLES = new Set(['讲师', '工程师']);
const CORE_TITLES = new Set(['教授', '教授级高级工程师']);

const teamMembers: TeamDirectoryMember[] = [
  { id: 'member-1', name: '杨若文', title: '教授', unit: '云南大学', email: 'yangruowen@ynu.edu.cn', profileUrl: '/yrw/index.html' },
  { id: 'member-2', name: '曹杰', title: '教授', unit: '云南大学', email: 'caoj@ynu.edu.cn' },
  { id: 'member-3', name: '李蒙', title: '教授级高级工程师', unit: '云南省气候中心', email: 'limeng5945@sina.com' },
  { id: 'member-4', name: '赵勇', title: '教授', unit: '成都信息工程大学', email: 'zhaoy608@cuit.edu.cn' },
  { id: 'member-5', name: '陈文', title: '教授', unit: '云南大学', email: 'chenw@mail.iap.ac.cn' },
  { id: 'member-6', name: '黄玮', title: '教授级高级工程师', unit: '云南省气候中心', email: 'hweimao12@163.com' },
  { id: 'member-7', name: '袁俊鹏', title: '教授', unit: '云南大学', email: 'jpyuan@ynu.edu.cn' },
  { id: 'member-8', name: '胡雪琼', title: '教授级高级工程师', unit: '云南省气候中心', email: '435221713@qq.com' },
  { id: 'member-9', name: '华维', title: '教授', unit: '成都信息工程大学', email: 'huawei@cuit.edu.cn' },
  { id: 'member-10', name: '尤卫红', title: '教授', unit: '云南大学', email: 'youwh@sina.com' },
  { id: 'member-11', name: '王鹏云', title: '教授级高级工程师', unit: '云南省气候中心', email: '157430258@qq.com' },
  { id: 'member-12', name: '朱勇', title: '教授级高级工程师', unit: '云南省气候中心', email: 'Windzy78@163.com' },
  { id: 'member-13', name: '杨启东', title: '副教授', unit: '云南大学', email: 'yangqd@ynu.edu.cn' },
  { id: 'member-14', name: '苏秦', title: '副教授', unit: '云南大学', email: 'suqin@ynu.edu.cn' },
  { id: 'member-15', name: '杨亚力', title: '副教授', unit: '云南大学', email: 'ylyang@ynu.edu.cn' },
  { id: 'member-16', name: '蔡磊', title: '副教授', unit: '云南大学', email: 'lcai@ynu.edu.cn' },
  { id: 'member-17', name: '桂术', title: '副教授', unit: '云南大学', email: 'guishu@ynu.edu.cn' },
  { id: 'member-18', name: '赵荻', title: '副教授', unit: '云南大学', email: 'dzhao@ynu.edu.cn' },
  { id: 'member-19', name: '陈兵', title: '副教授', unit: '云南大学', email: 'chenbing@ynu.edu.cn' },
  { id: 'member-20', name: '冯涛', title: '副教授', unit: '云南大学', email: 'taofeng@ynu.edu.cn' },
  { id: 'member-21', name: '査进林', title: '副教授', unit: '云南大学', email: 'zhajl@ynu.edu.cn' },
  { id: 'member-22', name: '李璠', title: '高级工程师', unit: '云南大学', email: 'lifan@ynu.edu.cn' },
  { id: 'member-23', name: '赵恺辉', title: '副教授', unit: '云南大学', email: 'khzhao@ynu.edu.cn' },
  { id: 'member-24', name: '张静唯', title: '副教授', unit: '云南大学', email: 'jwzhang@ynu.edu.cn' },
  { id: 'member-25', name: '刘光鑫', title: '副教授', unit: '云南大学', email: 'njuliuguangxin@gmail.com' },
  { id: 'member-26', name: '常有礼', title: '副教授', unit: '云南大学', email: 'ylchang@ynu.edu.cn' },
  { id: 'member-27', name: '金莉莉', title: '副教授', unit: '云南大学', email: 'jinlili1984@126.com' },
  { id: 'member-28', name: '王颢樾', title: '副教授', unit: '云南大学', email: 'wanghaoyue22@ynu.edu.cn' },
  { id: 'member-29', name: '杨鹏武', title: '高级工程师', unit: '云南省气候中心', email: 'yndxy0111@126.com' },
  { id: 'member-30', name: '周建琴', title: '高级工程师', unit: '云南省气候中心', email: '24095528@qq.com' },
  { id: 'member-31', name: '范立张', title: '高级工程师', unit: '云南省气候中心', email: 'ynccwind@163.com' },
  { id: 'member-32', name: '鲁韦坤', title: '高级工程师', unit: '云南省气候中心', email: 'luweikun@hotmail.com' },
  { id: 'member-33', name: '张明达', title: '高级工程师', unit: '云南省气候中心', email: 'rockerdada@163.com' },
  { id: 'member-34', name: '徐虹', title: '高级工程师', unit: '云南省气候中心', email: 'Hongxu.yn@126.com' },
  { id: 'member-35', name: '张茂松', title: '高级工程师', unit: '云南省气候中心', email: 'YNZMS@163.com' },
  { id: 'member-36', name: '杨晓鹏', title: '高级工程师', unit: '云南省气候中心', email: '16593180@qq.com' },
  { id: 'member-37', name: '金燕', title: '高级工程师', unit: '云南省气候中心', email: 'apple_jjyy25@163.com' },
  { id: 'member-38', name: '张加云', title: '高级工程师', unit: '云南省气候中心', email: '36913878@qq.com' },
  { id: 'member-39', name: '吉文娟', title: '高级工程师', unit: '云南省气候中心', email: '153177628@qq.com' },
  { id: 'member-40', name: '林志强', title: '高级工程师', unit: '成都信息工程大学', email: 'linzq@cuit.edu.cn' },
  { id: 'member-41', name: '李金建', title: '高级工程师', unit: '成都信息工程大学', email: 'ljj@cuit.edu.cn' },
  { id: 'member-42', name: '葛非', title: '副教授', unit: '成都信息工程大学', email: 'figo@cuit.edu.cn' },
  { id: 'member-43', name: '李扬', title: '副教授', unit: '成都信息工程大学', email: 'liyang0711@cuit.edu.cn' },
  { id: 'member-44', name: '郑佳锋', title: '副教授', unit: '成都信息工程大学', email: 'zjf1988@cuit.edu.cn' },
  { id: 'member-45', name: '周欣', title: '副教授', unit: '成都信息工程大学', email: 'zhouxin18@cuit.edu.cn' },
  { id: 'member-46', name: '陈樟', title: '副教授', unit: '成都信息工程大学', email: 'chenzhang@cuit.edu.cn' },
  { id: 'member-47', name: '杨宇', title: '讲师', unit: '云南大学', email: 'yangyu@mail.ynu.edu.cn' },
  { id: 'member-48', name: '樊雯璇', title: '讲师', unit: '云南大学', email: 'fanwenxuan@ynu.edu' },
  { id: 'member-49', name: '张晓', title: '工程师', unit: '云南大学', email: 'zhangxiao@lasg.iap.ac.cn' },
  { id: 'member-50', name: '李粤华', title: '讲师', unit: '云南大学', email: 'yuehuali@ynu.edu.cn' },
  { id: 'member-51', name: '赵靖川', title: '讲师', unit: '云南大学', email: 'zhaojc@ynu.edu.cn' },
  { id: 'member-52', name: '夏兰', title: '讲师', unit: '云南大学', email: 'lanxia@ynu.edu.cn' },
  { id: 'member-53', name: '郭漪然', title: '讲师', unit: '云南大学', email: 'guoyiran@ynu.edu.cn' },
  { id: 'member-54', name: '严欣', title: '讲师', unit: '云南大学', email: 'yanx36@ynu.edu.cn' },
  { id: 'member-55', name: '鲁崇明', title: '讲师', unit: '云南大学', email: 'luchongming@ynu.edu.cn' },
  { id: 'member-56', name: '孙珊珊', title: '讲师', unit: '云南大学', email: 'suns@ynu.edu.cn' },
  { id: 'member-57', name: '程晋昕', title: '工程师', unit: '云南省气候中心', email: 'chjxnuist@163.com' },
  { id: 'member-58', name: '李蕊', title: '工程师', unit: '云南省气候中心', email: 'liruiyncc@163.com' },
  { id: 'member-59', name: '何雨岑', title: '工程师', unit: '云南省气候中心', email: 'xiaoqinzi_hyq@126.com' },
  { id: 'member-60', name: '罗蒙', title: '工程师', unit: '云南省气候中心', email: 'mrluolang@126.com' },
  { id: 'member-61', name: '马思源', title: '工程师', unit: '云南省气候中心', email: 'masiyuan_c@163.com' },
  { id: 'member-62', name: '张少波', title: '讲师', unit: '成都信息工程大学', email: 'zsb@cuit.edu.cn' },
  { id: 'member-63', name: '吴小飞', title: '讲师', unit: '成都信息工程大学', email: 'wuxf@cuit.edu.cn' },
  { id: 'member-64', name: '胡芩', title: '讲师', unit: '成都信息工程大学', email: 'hq@cuit.edu.cn' },
  { id: 'member-65', name: '陈杨瑞雪', title: '讲师', unit: '成都信息工程大学', email: 'ruixue@cuit.edu.cn' },
];

const unitFilters: UnitFilter[] = ['全部', '云南大学', '云南省气候中心', '成都信息工程大学'];

function sortMembers(members: TeamDirectoryMember[]): TeamDirectoryMember[] {
  return [...members].sort((a, b) => {
    const aCore = CORE_TITLES.has(a.title) ? 0 : 1;
    const bCore = CORE_TITLES.has(b.title) ? 0 : 1;
    if (aCore !== bCore) return aCore - bCore;
    return a.name.localeCompare(b.name, 'zh');
  });
}

const MemberRow: React.FC<{ member: TeamDirectoryMember }> = ({ member }) => {
  return (
    <tr className="transition hover:bg-orange-50/40">
      <td className="whitespace-nowrap px-5 py-3 font-semibold text-slate-900">
        {member.profileUrl ? (
          <a
            href={member.profileUrl}
            className="text-orange-700 underline-offset-2 transition hover:text-orange-900 hover:underline"
          >
            {member.name}
          </a>
        ) : (
          member.name
        )}
      </td>
      <td className="whitespace-nowrap px-5 py-3 text-slate-600">{member.title}</td>
      <td className="whitespace-nowrap px-5 py-3 text-slate-600">{member.unit}</td>
      <td className="whitespace-nowrap px-5 py-3">
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-2 font-mono text-xs text-orange-700 hover:text-orange-900"
        >
          <Mail className="h-3.5 w-3.5" />
          {member.email}
        </a>
      </td>
    </tr>
  );
};

const MemberCard: React.FC<{ member: TeamDirectoryMember }> = ({ member }) => {
  return (
    <article className="py-5">
      <div className="flex items-start justify-between gap-2">
        <div>
          {member.profileUrl ? (
            <a
              href={member.profileUrl}
              className="font-sans text-base font-bold text-orange-700 underline-offset-2 transition hover:text-orange-900 hover:underline"
            >
              {member.name}
            </a>
          ) : (
            <p className="font-sans text-base font-bold text-slate-900">{member.name}</p>
          )}
          <p className="mt-0.5 text-sm text-slate-600">{member.title}</p>
        </div>
        {CORE_TITLES.has(member.title) && (
          <span className="shrink-0 font-mono text-xs font-semibold uppercase tracking-wide text-brand-600">
            核心
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-slate-500">{member.unit}</p>
      <a
        href={`mailto:${member.email}`}
        className="mt-3 inline-flex max-w-full items-center gap-1.5 break-all font-mono text-xs text-orange-700 hover:text-orange-900"
      >
        <Mail className="h-3.5 w-3.5" />
        {member.email}
      </a>
    </article>
  );
};

export const ResearchTeamView: React.FC = () => {
  const { t } = useLanguage();
  const [selectedUnit, setSelectedUnit] = useState<UnitFilter>('全部');
  const [keyword, setKeyword] = useState('');

  const stats = useMemo(
    () => ({
      total: teamMembers.length,
      senior: teamMembers.filter((m) => SENIOR_TITLES.has(m.title)).length,
      mid: teamMembers.filter((m) => MID_TITLES.has(m.title)).length,
    }),
    []
  );

  const filteredMembers = useMemo(() => {
    const unitMatched =
      selectedUnit === '全部'
        ? teamMembers
        : teamMembers.filter((member) => member.unit === selectedUnit);
    const normalizedKeyword = keyword.trim().toLocaleLowerCase('zh-CN');
    const keywordMatched = normalizedKeyword
      ? unitMatched.filter((member) =>
          [member.name, member.title, member.unit, member.email]
            .join(' ')
            .toLocaleLowerCase('zh-CN')
            .includes(normalizedKeyword)
        )
      : unitMatched;
    return sortMembers(keywordMatched);
  }, [selectedUnit, keyword]);

  const coreMembers = useMemo(
    () => filteredMembers.filter((m) => CORE_TITLES.has(m.title)),
    [filteredMembers]
  );
  const otherMembers = useMemo(
    () => filteredMembers.filter((m) => !CORE_TITLES.has(m.title)),
    [filteredMembers]
  );

  const unitCount = (unit: UnitFilter) =>
    unit === '全部' ? teamMembers.length : teamMembers.filter((m) => m.unit === unit).length;

  const renderGroupedTable = () => (
    <>
      {coreMembers.length > 0 && (
        <>
          <tr className="bg-orange-50/50">
            <td colSpan={4} className="px-5 py-2 text-xs font-bold uppercase tracking-wide text-orange-800">
              {t('核心成员', 'Core Members')}
            </td>
          </tr>
          {coreMembers.map((member) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </>
      )}
      {otherMembers.length > 0 && (
        <>
          <tr className="bg-stone-50/80">
            <td colSpan={4} className="px-5 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
              {t('全体成员', 'All Members')}
            </td>
          </tr>
          {otherMembers.map((member) => (
            <MemberRow key={member.id} member={member} />
          ))}
        </>
      )}
    </>
  );

  return (
    <div className="space-y-10 py-1">
      <PageHeader
        label={t('项目组主要成员', 'Research Team Directory')}
        title={t('科研团队成员名录', 'Research Team Members')}
        description={t(
          '团队由云南大学、云南省气候中心、成都信息工程大学共同组成，覆盖模式研发、气候资源开发利用、灾害性天气机理及预报预测等重点方向。',
          'Members from Yunnan University, Yunnan Climate Center, and Chengdu University of Information Technology.'
        )}
      />

      <dl className="grid grid-cols-3 divide-x divide-brand-100 border-y border-brand-100">
        {[
          { label: t('团队成员', 'Members'), value: stats.total },
          { label: t('高级职称', 'Senior Titles'), value: stats.senior },
          { label: t('中级职称', 'Mid-Level Titles'), value: stats.mid },
        ].map((stat) => (
          <div key={stat.label} className="px-3 py-5 sm:px-6">
            <dt className="text-xs font-semibold text-slate-500 sm:text-sm">{stat.label}</dt>
            <dd className="mt-1 font-mono text-2xl font-bold text-brand-900 sm:text-3xl">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-sans text-base font-bold text-slate-900">成员检索</h3>
            <p className="mt-0.5 text-xs text-slate-500">按姓名、职称、单位或邮箱快速查找</p>
          </div>
          <label className="relative w-full sm:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
            <input
              type="search"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="输入姓名、单位或邮箱"
              className="min-h-11 w-full rounded-xl border border-stone-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
              aria-label="检索团队成员"
            />
          </label>
        </div>

        <div className="flex snap-x snap-mandatory overflow-x-auto border-y border-brand-100">
          {unitFilters.map((unit) => (
            <button
              key={unit}
              type="button"
              onClick={() => setSelectedUnit(unit)}
              aria-pressed={selectedUnit === unit}
              className={`relative min-h-12 shrink-0 snap-start px-4 py-2 text-sm font-semibold transition ${
                selectedUnit === unit
                  ? 'bg-brand-50/70 text-brand-900 after:absolute after:inset-x-0 after:bottom-[-1px] after:h-0.5 after:bg-brand-600'
                  : 'text-slate-600 hover:bg-white hover:text-brand-800'
              }`}
            >
              {unit}
              <span className={`ml-2 font-mono text-xs ${selectedUnit === unit ? 'text-brand-500' : 'text-slate-400'}`}>
                {unitCount(unit)}
              </span>
            </button>
          ))}
        </div>
        <p className="text-xs text-slate-500" aria-live="polite">
          当前显示 {filteredMembers.length} 位成员
        </p>
      </section>

      <section className="divide-y divide-brand-100 border-y border-brand-100 md:hidden">
        {filteredMembers.length === 0 ? (
          <p className="text-center text-sm text-slate-500 py-8">{t('未找到匹配成员', 'No members found')}</p>
        ) : (
          filteredMembers.map((member) => <MemberCard key={member.id} member={member} />)
        )}
      </section>

      <section className="hidden overflow-hidden border-y border-brand-100 bg-white/45 md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-stone-100 text-left text-sm">
            <thead className="bg-stone-50/80">
              <tr>
                <th className="whitespace-nowrap px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {t('姓名', 'Name')}
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {t('职称', 'Title')}
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {t('单位', 'Institution')}
                </th>
                <th className="whitespace-nowrap px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {t('邮箱', 'Email')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredMembers.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-5 py-8 text-center text-slate-500">
                    {t('未找到匹配成员', 'No members found')}
                  </td>
                </tr>
              ) : (
                renderGroupedTable()
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
