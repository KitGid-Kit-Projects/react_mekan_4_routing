import { Menu, Layout } from 'antd';
import useNavBar from '@/hooks/navbar/useNavBar';

const { Header } = Layout;

const Navbar = () => {
  // Custom hook to get the current location and menu items
  const { location, menuItems } = useNavBar();

  return (
    <Header style={{ padding: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* App logo or name */}
        <div
          style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            marginRight: '40px',
            paddingLeft: '24px',
          }}
        >
          EduApp
        </div>

        {/* Navigation menu */}
        <Menu
          theme="dark" // Sets dark background theme
          mode="horizontal" // Displays menu items horizontally
          selectedKeys={[location.pathname]} // Highlights the current route
          items={menuItems} // Menu items from the custom hook
          style={{ flex: 1, minWidth: 0 }} // Responsive layout styling
        />
      </div>
    </Header>
  );
};

export default Navbar;
