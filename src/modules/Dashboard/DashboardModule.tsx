import { DashboardContainer } from './containers/DashboardContainer.tsx';
import { FC } from 'react';
import { DashboardModuleProps } from './types.ts';

export const DashboardModule: FC<DashboardModuleProps> = (props) => {
  return <DashboardContainer {...props} />;
};
