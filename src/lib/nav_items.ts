type NavItemType = {
  id: number;
  title: string;
  slug: string;
};

export const NAV_ITEMS: NavItemType[] = [
  { id: 0, slug: '/', title: 'Home' },
  { id: 1, slug: '/works', title: 'Works' },
  { id: 2, slug: '/resume', title: 'Resume' },
  { id: 3, slug: '/contact', title: 'Contact' },
];
