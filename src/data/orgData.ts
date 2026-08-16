import type { CommitteeMember } from '../types';

/**
 * 组织架构与运行机制，内容整理自实验室建设情况总结报告 6.3 节、附表 9 及 2025 年度运行总结报告。
 * 团队规模口径与科研团队页名录一致，均取自科技计划项目合同书（202302AN360006）「项目组主要成员」表。
 */

export const orgOverviewZh =
  '实行实验室主任负责制，建立主任—学术委员会—管理委员会三级治理，三家单位共建共管。';

export const orgScaleZh =
  '项目组主要成员 65 人：高级职称 46 人、中级 19 人；云南大学 31 人、云南省气候中心 21 人、成都信息工程大学 13 人。';

export const labLeadership = [
  {
    id: 'lead-director',
    nameZh: '杨若文',
    roleZh: '实验室主任',
    titleZh: '云南大学教授，教育部「长江学者」特聘教授',
    profileUrl: './yrw/index.html',
    notesZh: [
      '云南省「云岭学者」「杰青」',
      '中国气象局横断山区灾害性天气研究中心学术委员会委员',
    ],
  },
  {
    id: 'lead-deputy',
    nameZh: '李蒙',
    roleZh: '实验室副主任',
    titleZh: '正研级高级工程师（云南省气候中心）',
    notesZh: [
      '中国气象局气象高层次科技创新人才计划首席气象专家',
      '实验室学术委员会委员',
    ],
  },
];

export const academicCommittee: CommitteeMember[] = [
  { name: '王会军', titleZh: '中国科学院院士，教授', roleZh: '主任委员' },
  { name: '戴永久', titleZh: '中国科学院院士，教授', roleZh: '副主任委员' },
  { name: '黄建平', titleZh: '中国科学院院士，教授', roleZh: '副主任委员' },
  { name: '胡永云', titleZh: '教授', roleZh: '副主任委员' },
  { name: '杨修群', titleZh: '教授', roleZh: '副主任委员' },
  { name: '陈文', titleZh: '教授', roleZh: '副主任委员' },
  { name: '费建芳', titleZh: '教授', roleZh: '委员' },
  { name: '罗勇', titleZh: '教授', roleZh: '委员' },
  { name: '温之平', titleZh: '教授', roleZh: '委员' },
  { name: '孙建奇', titleZh: '研究员', roleZh: '委员' },
  { name: '段晚锁', titleZh: '研究员', roleZh: '委员' },
  { name: '曹杰', titleZh: '教授', roleZh: '委员' },
  { name: '张宇', titleZh: '教授', roleZh: '委员' },
  { name: '王林', titleZh: '研究员', roleZh: '委员' },
  { name: '田立德', titleZh: '研究员', roleZh: '委员' },
  { name: '贾晓静', titleZh: '教授', roleZh: '委员' },
  { name: '孟宪红', titleZh: '研究员', roleZh: '委员' },
  { name: '李蒙', titleZh: '正研级高工', roleZh: '委员' },
  { name: '郑小童', titleZh: '教授', roleZh: '委员' },
  { name: '胡斯乐图', titleZh: '研究员', roleZh: '委员' },
];
