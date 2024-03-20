import { ReactNode } from 'react';
import styles from './BaseList.module.scss';
import { List } from 'antd';

interface Props<T> {
  loading: boolean;
  loadMore: ReactNode;
  dataSource: T[];
  children: (item: T) => ReactNode;
}

export const BaseList = <T extends object>({
  children,
  loadMore,
  loading,
  dataSource,
}: Props<T>) => {
  return (
    <List
      className={styles.baseList}
      loading={loading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={dataSource}
      renderItem={(item) => children(item)}
    />
  );
};
