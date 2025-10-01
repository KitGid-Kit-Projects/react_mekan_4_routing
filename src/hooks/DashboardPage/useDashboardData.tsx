import { useLocation, NavLink } from 'react-router-dom';
import { UserOutlined, SettingOutlined, DashboardOutlined } from '@ant-design/icons';

export const useDashboardData = () => {
  const location = useLocation();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <NavLink to="/dashboard">Overview</NavLink>,
    },
    {
      key: '/dashboard/profile',
      icon: <UserOutlined />,
      label: <NavLink to="/dashboard/profile">Profile</NavLink>,
    },
    {
      key: '/dashboard/settings',
      icon: <SettingOutlined />,
      label: <NavLink to="/dashboard/settings">Settings</NavLink>,
    },
  ];

  return { location, menuItems };
};
