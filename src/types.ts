export interface StatItem {
  id: string;
  labelZh: string;
  labelEn: string;
  value: number;
  suffix: string;
  icon: string;
  descriptionZh: string;
  descriptionEn: string;
}

export interface PillarItem {
  id: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  icon: string;
  bulletsZh: string[];
  bulletsEn: string[];
}

export interface ResearchTheme {
  id: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  icon: string;
  subThemes: {
    nameZh: string;
    nameEn: string;
    descZh: string;
    descEn: string;
    equipmentZh: string[];
    equipmentEn: string[];
  }[];
}

export type NewsCategory = 'news' | 'seminar' | 'conference' | 'announcement';

export interface NewsArticle {
  id: string;
  titleZh: string;
  summaryZh: string;
  paragraphsZh: string[];
  date: string;
  category: NewsCategory;
  image?: string;
  imageCaptionZh?: string;
}

/** 期刊层次标注，取自实验室建设期验收报告的标注论文列表 */
export type PublicationTier =
  | '中科院一区'
  | '中科院二区'
  | 'Nature 子刊'
  | 'Nature Portfolio'
  | '中文核心期刊';

/** 完整论文清单条目，citation 为报告中的原始引文 */
export interface PublicationRecord {
  id: string;
  citation: string;
  journal: string;
  year: number;
  tier?: PublicationTier;
}

export interface FeaturedPublication {
  id: string;
  titleEn: string;
  titleZh: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  tier?: PublicationTier;
  topicZh: string;
}

export interface MetricItem {
  id: string;
  labelZh: string;
  value: string;
  noteZh: string;
  icon: string;
}

export interface ProjectGroup {
  id: string;
  titleZh: string;
  countZh: string;
  fundingZh: string;
  itemsZh: string[];
}

export interface AchievementItem {
  id: string;
  titleZh: string;
  descZh: string;
  icon: string;
}

export interface ServiceSystem {
  id: string;
  nameZh: string;
  ownerZh: string;
  descZh: string;
  specsZh: string[];
  image?: string;
}

export interface ServiceCase {
  id: string;
  titleZh: string;
  categoryZh: string;
  paragraphsZh: string[];
  highlightsZh: string[];
  icon: string;
}

export interface CommitteeMember {
  name: string;
  titleZh: string;
  roleZh: string;
}
