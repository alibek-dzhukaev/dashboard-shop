import { CategoryService } from '../services/CategoryService.ts';
import { CustomerService } from '../services/CustomerService.ts';
import { ManufacturerService } from '../services/ManufacturerService.ts';
import { ProductService } from '../services/ProductService.ts';
import { StoreService } from '../services/StoreService.ts';
import { useEffect } from 'react';

export const useDashboardService = () => {
  useEffect(() => {
    return () => {
      CategoryService.destroyed();
      CustomerService.destroyed();
      ManufacturerService.destroyed();
      ProductService.destroyed();
      StoreService.destroyed();
    };
  }, []);

  return {
    categoryService: CategoryService.created(),
    customerService: CustomerService.created(),
    manufacturerService: ManufacturerService.created(),
    productService: ProductService.created(),
    storeService: StoreService.created(),
  };
};
