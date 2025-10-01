import { Menu, Layout } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, DashboardOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: '/about',
      icon: <InfoCircleOutlined />,
      label: <NavLink to="/about">About</NavLink>,
    },

    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
    },

  ];

  return (
    <Header style={{ padding: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', marginRight: '40px', paddingLeft: '24px' }}>
          EduApp
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </div>
    </Header>
  );
};

export default Navbar;