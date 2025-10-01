import { Layout, Menu, Typography } from 'antd';

const { Sider } = Layout;
const { Title } = Typography;

const DashboardSidebar = ({ location, menuItems }) => {
  return (
    <Sider width={250} theme="light">
      <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
        <Title level={4} style={{ margin: 0 }}>Dashboard</Title>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        style={{ borderRight: 0 }}
      />
    </Sider>
  );
};

export default DashboardSidebar;
