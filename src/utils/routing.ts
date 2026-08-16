export type AppTab =
  | 'home'
  | 'areas'
  | 'team'
  | 'organization'
  | 'publications'
  | 'service'
  | 'news';

const VALID_TABS: AppTab[] = [
  'home',
  'areas',
  'team',
  'organization',
  'publications',
  'service',
  'news',
];

export function parseHashRoute(): { tab: AppTab; newsId: string | null } {
  const raw = window.location.hash.replace(/^#\/?/, '').trim();
  if (!raw) return { tab: 'home', newsId: null };

  const segments = raw.split('/').filter(Boolean);
  const first = segments[0] as AppTab;

  if (first === 'news') {
    return { tab: 'news', newsId: segments[1] ?? null };
  }

  if (VALID_TABS.includes(first)) {
    return { tab: first, newsId: null };
  }

  return { tab: 'home', newsId: null };
}

export function buildHash(tab: AppTab, newsId?: string | null): string {
  if (tab === 'home') return '';
  if (tab === 'news' && newsId) return `#/news/${newsId}`;
  return `#/${tab}`;
}

export function navigateTo(tab: AppTab, newsId?: string | null): void {
  window.location.hash = buildHash(tab, newsId);
}
