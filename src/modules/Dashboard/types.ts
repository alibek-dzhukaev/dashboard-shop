import { ReactNode } from 'react';

export interface DashboardModuleProps {}

export interface DashboardContainerProps extends DashboardModuleProps {}

export interface NavigationItem {
  key: string;
  icon: ReactNode;
  label: string;
  to: string;
}

export const enum Pages {
  CATEGORIES = 'categories',
  MANUFACTURES = 'manufactures',
  PRODUCTS = 'products',
  STORES = 'stores',
  CUSTOMERS = 'customers',
}

export interface Category {
  readonly categoryId: string;
  readonly categoryName: string;
}
