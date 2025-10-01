import DashboardOverview from '@/components/DashboardPage/DashboardOverview';
import DashboardSidebar from '@/components/DashboardPage/DashboardSidebar';
import { useDashboardData } from '@/hooks/DashboardPage/useDashboardData';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const DashboardPage = () => {
  const { location, menuItems } = useDashboardData();
  const loginState = location.state; // passed from login

  return (
    <Layout style={{ minHeight: '80vh' }}>
      <DashboardSidebar location={location} menuItems={menuItems} />

      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ padding: '24px', background: '#fff', marginTop: '16px' }}>
          {location.pathname === '/dashboard' && (
            <DashboardOverview location={location} loginState={loginState} />
          )}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
