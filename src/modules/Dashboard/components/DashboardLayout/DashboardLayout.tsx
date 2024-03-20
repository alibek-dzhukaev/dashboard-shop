import { FC, PropsWithChildren, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, theme, Menu } from 'antd';

import styles from './DashboardLayout.module.scss';
import { NavigationItem, Pages } from '../../types.ts';
import { Logo } from '../Logo/Logo.tsx';

const { Header, Sider, Content } = Layout;

interface Props {
  navigationItems: NavigationItem[];
  selectedItem: Pages;
  onPage: (key: Pages) => void;
}

export const DashboardLayout: FC<PropsWithChildren<Props>> = ({
  children,
  navigationItems,
  selectedItem,
  onPage,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onSelect = ({ key }: { key: string }) => {
    onPage(key as unknown as Pages);
  };

  return (
    <Layout className={styles.dashboardLayout}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo collapsed={collapsed} />
        <Menu
          className={styles.dashboardLayout_navigation}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedItem]}
          onSelect={onSelect}
          items={navigationItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className={styles.dashboardLayout_collapseButton}
          />
        </Header>
        <Content
          className={styles.dashboardLayout__content}
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
