import {SideNavItem, SideNavSection} from "../models";

export const sideNavSections: SideNavSection[] = [
  /*{
    text: 'CORE',
    items: ['dashboard'],
  },*/
  {
    text: 'ADMIN',
    items: [
      {
        icon: 'calendar_month',
        text: 'Events',
        link: '/events',
      },
      {
        icon: 'group',
        text: 'Promoters',
        link: '/promoters',
      }
    ],
  }
];

export const sideNavItems: SideNavItem[] = [
  {
    icon: 'query_stats',
    text: 'Dashboard',
    link: '/dashboard',
  },
  {
    icon: 'event_available',
    text: 'Current event',
    link: '/event',
  },
  {
    icon: 'calendar_month',
    text: 'Events',
    link: '/events',
  },
  {
    icon: 'group',
    text: 'Promoters',
    link: '/promoters',
  }
];
