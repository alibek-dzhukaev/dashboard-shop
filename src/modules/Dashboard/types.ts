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

export interface Manufacturer {
  readonly manufacturerId: string;
  readonly manufacturerName: string;
}

export interface Product {
  readonly productId: string;
  readonly productName: string;
  readonly manufactureId: string
  readonly categoryId: string
}

export interface Store {
  readonly storeId: string
  readonly storeName: string
}

export interface Customer {
  readonly customerId: string
  readonly customerFname: string
  readonly customerLname: string
}
