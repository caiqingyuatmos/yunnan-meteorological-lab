import type { ServiceCase, ServiceSystem } from '../types';

/**
 * 社会服务与科技成果转化，内容整理自实验室建设情况总结报告第 5 章及相关业务材料。
 */

export const serviceCases: ServiceCase[] = [
  {
    id: 'case-indices',
    titleZh: '气候诊断指数进入国家与省级业务应用',
    categoryZh: '业务技术转化',
    icon: 'Activity',
    paragraphsZh: [
      '团队定义西太平洋副热带高压西伸、南亚高压中心活动指数，已用于国家气候中心及云南省气象局气候诊断与监测业务。',
    ],
    highlightsZh: [
      '相关成果融入云南省气候中心气候预测业务预警系统',
      '支撑短期气候预测业务',
    ],
  },
  {
    id: 'case-nwp',
    titleZh: '区域快速同化系统服务「1262」联动机制',
    categoryZh: '数值预报业务',
    icon: 'Radar',
    paragraphsZh: [
      '受云南省气象台委托建成区域快速同化（6 小时）系统并业务化运行，服务云南「1262」精细化预报与响应联动机制，支撑复杂地形下短时强降水预报。',
    ],
    highlightsZh: [
      '1 公里分辨率、12 分钟循环同化，运行于「云岭 1 号」',
      '2024 年夏季小雨、暴雨预报评分优于国内同类系统',
    ],
  },
  {
    id: 'case-energy',
    titleZh: '风能太阳能资源评估与绿色能源服务',
    categoryZh: '气候资源开发',
    icon: 'Sun',
    paragraphsZh: [
      '形成全省 5 公里分辨率风光资源月预测产品并定期发布；建立光伏开发气候适宜性评价，服务「双碳」与地方能源规划。',
    ],
    highlightsZh: [
      '云南中西南部约 45% 区域光伏开发气候适宜性较好',
      '开展普洱等地厅级以上能源气候资源评估项目',
    ],
  },
  {
    id: 'case-agriculture',
    titleZh: '高原特色农业气象服务与产学研合作',
    categoryZh: '农业气象服务',
    icon: 'Sprout',
    paragraphsZh: [
      '与风电企业、普洱茶与咖啡种植基地、云南中烟等单位合作，开展特色作物气象监测、适宜性与灾害风险区划。',
    ],
    highlightsZh: [
      '咖啡品质与环境、气候变化对茶叶影响等专题研究',
      '覆盖烤烟、茶叶、甘蔗、橡胶、咖啡等主要作物',
    ],
  },
  {
    id: 'case-training',
    titleZh: '技术培训、教学开放与资源共享',
    categoryZh: '开放共享服务',
    icon: 'Users',
    paragraphsZh: [
      '联合开展高分辨率数值模式培训；仪器设备与观测场、会商室面向本硕教学与科研开放。',
    ],
    highlightsZh: [
      '观测与会商设施支撑专业核心课程，年授课 200 余人次',
      '开放课题近 10 项，揭榜挂帅 2 项',
    ],
  },
  {
    id: 'case-asean',
    titleZh: '面向南亚东南亚的科技合作与气候治理参与',
    categoryZh: '区域合作服务',
    icon: 'Globe2',
    paragraphsZh: [
      '参与中国—东盟应对气候变化国家合作研讨会并作主题报告；与东南亚科研机构开展季风与极端气候灾害合作研究。',
    ],
    highlightsZh: [
      '服务面向南亚东南亚辐射中心与「一带一路」建设',
      '共建单位参与横断山区（低纬高原）灾害性天气研究中心',
    ],
  },
];

export const serviceSystems: ServiceSystem[] = [
  {
    id: 'sys-rapid',
    nameZh: '云南省区域快速同化（6 小时）系统',
    ownerZh: '云南省气象台委托建设 · 业务化运行',
    descZh: '融合省内雷达拼图，提供本地化高分辨率 6 小时数值预报。',
    specsZh: [
      '1 km 分辨率，12 分钟循环同化，「云岭 1 号」超算运行',
      '预报产品专线传输省气象局，日 4 次 36 小时预报',
    ],
    image: '/images/sys-climate-prediction.jpg',
  },
  {
    id: 'sys-climate',
    nameZh: '云南智能化气候综合业务服务系统',
    ownerZh: '云南省气候中心 · 业务运行',
    descZh: '气候资源评估、变化影响预估及干旱、暴雨、冷害等灾害监测与风险预估。',
    specsZh: [
      '集成监测、预测、气候变化与「双碳」、灾害风险等模块',
      '支撑防灾减灾与应急管理预报预警业务',
    ],
    image: '/images/sys-climate-service.jpg',
  },
  {
    id: 'sys-agri',
    nameZh: '云南高原特色农业气象业务服务系统 V1.0',
    ownerZh: '云南省气候中心 · 业务运行',
    descZh: '网格化农业气象监测与预报，服务特色作物生育期与灾害监测。',
    specsZh: [
      '生育期、土壤湿度与气温监测预测',
      '水稻抽扬期低温、霜冻等灾害精细化监测',
    ],
    image: '/images/sys-agri-service.jpg',
  },
  {
    id: 'sys-subseasonal',
    nameZh: '次季节—季节多模式产品释用预测系统 V1.0',
    ownerZh: '云南省气候中心 · 业务运行',
    descZh: '次季节至季节尺度多模式产品集成释用，支撑短期气候预测。',
    specsZh: ['面向业务化短期气候预测'],
    image: '/images/sys-subseasonal.jpg',
  },
];
