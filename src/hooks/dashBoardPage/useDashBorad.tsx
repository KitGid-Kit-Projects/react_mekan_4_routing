import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { UserOutlined, SettingOutlined, DashboardOutlined } from '@ant-design/icons';

export default function useDashBoard(){
 const location = useLocation();
  const navigate = useNavigate();

  // Get the passed state from login
  const loginState = location.state;

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

    return{location,navigate,loginState,menuItems }
}