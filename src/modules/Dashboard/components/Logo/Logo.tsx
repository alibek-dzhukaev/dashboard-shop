import logo from '@assets/logo.avif';
import styles from './Logo.module.scss';
import { FC } from 'react';
import { clsx } from 'clsx';
import { Typography } from 'antd';

interface Props {
  parentClass?: string;
  collapsed: boolean;
}

export const Logo: FC<Props> = ({ parentClass, collapsed }) => {
  return (
    <header className={clsx(styles.logo, parentClass)}>
      <div className={styles.logo_wrapper}>
        <img src={logo} alt="logo" className={styles.logo_image} />
      </div>
      {!collapsed && (
        <Typography.Title level={4} className={styles.logo_title}>
          @abanasi
        </Typography.Title>
      )}
    </header>
  );
};
