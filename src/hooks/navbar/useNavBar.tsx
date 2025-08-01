import { NavLink, useLocation } from 'react-router-dom';
import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  DashboardOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

export default function useNavBar() {
  // Hook to access the current location object from React Router
  const location = useLocation();

  // Define the navigation menu items
  const menuItems = [
    {
      key: '/', // Route path used for highlighting the active item
      icon: <HomeOutlined />, // Icon displayed in the menu
      label: <NavLink to="/">Home</NavLink>, // Link to the Home page
    },
    {
      key: '/about',
      icon: <InfoCircleOutlined />,
      label: <NavLink to="/about">About</NavLink>,
    },
    {
      key: '/contact',
      icon: <ContactsOutlined />,
      label: <NavLink to="/contact">Contact</NavLink>,
    },
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
    },
    {
      key: '/questions',
      icon: <QuestionCircleOutlined />,
      label: <NavLink to="/questions">Questions</NavLink>,
    },
  ];

  // Return both location and menuItems for use in the Navbar component
  return {
    location,
    menuItems,
  };
}
