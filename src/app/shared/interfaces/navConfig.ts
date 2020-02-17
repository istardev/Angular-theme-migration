import { Menu } from './menu';

export enum LayoutOutType {
  WEB = 'WEB',
  AUTH = 'AUTH',
}

export interface NavConfig {
  type: LayoutOutType;
  menus: Menu[];
  showSideNav?: boolean;
}
