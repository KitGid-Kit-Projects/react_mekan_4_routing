// Ant Design layout and menu components used to build the sidebar
import { Layout, Menu, Typography } from 'antd';

// Destructure Sider and Title for easier usage
const { Sider } = Layout;
const { Title } = Typography;

// DashboardSidebar component
// Props:
// - location: react-router location object (used to determine the active menu item)
// - menuItems: array of menu item definitions (key, icon, label) produced by a hook
const DashboardSidebar = ({ location, menuItems }) => {
  return (
    // Sider provides a left-hand column for navigation. width and theme are set here.
    <Sider width={250} theme="light">
      {/* Title / header area for the sidebar */}
      <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
        <Title level={4} style={{ margin: 0 }}>Dashboard</Title>
      </div>
      {/*
        Menu renders the navigation items vertically (inline mode).
        - selectedKeys uses the current pathname so the active item is highlighted
        - items is the array passed from the dashboard hook
      */}
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
