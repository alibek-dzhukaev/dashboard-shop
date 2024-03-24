import { FC, useState } from 'react';
import { DashboardContainerProps, Pages } from '../types.ts';
import { useDashboardService } from '../hooks/useDashboardService.ts';
import { DashboardLayout } from '../components/DashboardLayout/DashboardLayout.tsx';
import { navigation } from '../constants';
import Categories from '../pages/Categories/Categories.tsx';
import Manufactures from '../pages/Manufactures/Manufactures.tsx';
import Products from '../pages/Products/Products.tsx';
import Stores from '../pages/Stores/Stores.tsx';
import Customers from '../pages/Customers/Customers.tsx';
import { useLocalStorage } from '../hooks/useLocalStorage.ts';

export const DashboardContainer: FC<DashboardContainerProps> = () => {
  const dashboardService = useDashboardService();
  const localstorage = useLocalStorage();

  const [page, setPage] = useState<Pages>(Pages.CATEGORIES);

  return (
    <DashboardLayout
      navigationItems={navigation}
      selectedItem={page}
      onPage={setPage}
    >
      {
        {
          [Pages.CATEGORIES]: <Categories />,
          [Pages.MANUFACTURES]: <Manufactures />,
          [Pages.PRODUCTS]: <Products />,
          [Pages.STORES]: <Stores />,
          [Pages.CUSTOMERS]: <Customers />,
        }[page]
      }
    </DashboardLayout>
  );
};
