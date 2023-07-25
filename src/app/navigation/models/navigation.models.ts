export interface RouteData {
  title?: string;
  //breadcrumbs: Breadcrumb[];
}

export interface Breadcrumb {
  text: string;
  link?: string;
  active?: boolean;
}

export interface SideNavItems {
  [index: string]: SideNavItem;
}

export interface SideNavItem {
  icon?: string;
  text: string;
  link?: string;
}

export interface SideNavSection {
  text?: string;
  items: SideNavItem[];
}
