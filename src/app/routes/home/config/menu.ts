import { Menu } from '@shared/interfaces/menu';

export const menus: Menu[] = [
  {
    id: 0,
    label: 'About',
    htmlId: 'about',
  },
  {
    id: 1,
    label: 'Features',
    htmlId: 'features',
  },
  {
    id: 2,
    label: 'Design',
    htmlId: 'design',
  },
  {
    id: 3,
    label: 'Screenshots',
    htmlId: 'screenshots',
  },
  {
    id: 4,
    label: 'Testimonials',
    htmlId: 'testimonials',
  },
  {
    id: 5,
    label: 'Get it',
    htmlId: 'get-it',
    isRound: true,
    icon: 'fa-shopping-cart',
  },
];
