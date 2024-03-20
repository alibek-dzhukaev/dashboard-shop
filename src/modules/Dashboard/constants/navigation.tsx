import { BiCategoryAlt } from 'react-icons/bi';
import { FaProductHunt } from 'react-icons/fa';
import { FaAppStore } from 'react-icons/fa6';
import { MdOutlinePrecisionManufacturing } from 'react-icons/md';
import { RiCustomerService2Line } from 'react-icons/ri';
import { NavigationItem, Pages } from '../types.ts';

export const navigation: NavigationItem[] = [
  {
    key: Pages.CATEGORIES,
    label: 'Categories',
    icon: <BiCategoryAlt />,
    to: Pages.CATEGORIES,
  },
  {
    key: Pages.MANUFACTURES,
    label: 'Manufacturers',
    icon: <MdOutlinePrecisionManufacturing />,
    to: Pages.MANUFACTURES,
  },
  {
    key: Pages.PRODUCTS,
    label: 'Products',
    icon: <FaProductHunt />,
    to: Pages.PRODUCTS,
  },
  {
    key: Pages.STORES,
    label: 'Stores',
    icon: <FaAppStore />,
    to: Pages.STORES,
  },
  {
    key: Pages.CUSTOMERS,
    label: 'Customers',
    icon: <RiCustomerService2Line />,
    to: Pages.CUSTOMERS,
  },
];
