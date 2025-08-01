import { Layout, Menu, Card, Typography, Tag } from 'antd';
import { Outlet, NavLink } from 'react-router-dom';
import useDashBoard from '@/hooks/dashBoardPage/useDashBorad';

const { Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const DashboardPage = () => {
  // Custom hook to get location, navigation function, login state, and sidebar menu items
  const { location, navigate, loginState, menuItems } = useDashBoard();

  return (
    <Layout style={{ minHeight: '80vh' }}>
      {/* Sidebar Navigation */}
      <Sider width={250} theme="light">
        <div style={{ padding: '16px', borderBottom: '1px solid #f0f0f0' }}>
          <Title level={4} style={{ margin: 0 }}>Dashboard</Title>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]} // Highlight current path
          items={menuItems} // Sidebar menu items (e.g., Profile, Settings)
          style={{ borderRight: 0 }}
        />
      </Sider>

      {/* Main Dashboard Content Area */}
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ padding: '24px', background: '#fff', marginTop: '16px' }}>
          
          {/* Display dashboard overview only on the base /dashboard route */}
          {location.pathname === '/dashboard' && (
            <div>
              <Title level={2}>Dashboard Overview</Title>

              {/* Show welcome message if user is logged in (via state) */}
              {loginState && (
                <Card style={{ marginBottom: '24px', backgroundColor: '#f6ffed' }}>
                  <Title level={4}>
                    Welcome, {loginState.user}! <Tag color="green">Logged In</Tag>
                  </Title>
                  <Paragraph>
                    <strong>Login Time:</strong> {loginState.loginTime}
                  </Paragraph>
                  <Paragraph>
                    <strong>Message:</strong> {loginState.message}
                  </Paragraph>
                </Card>
              )}

              {/* Display current routing info for debugging/education */}
              <Card title="Current Route Information" style={{ marginBottom: '24px' }}>
                <p><strong>Current Path:</strong> {location.pathname}</p>
                <p><strong>Search Params:</strong> {location.search || 'None'}</p>
                <p><strong>Has State:</strong> {location.state ? 'Yes' : 'No'}</p>
                {location.state && (
                  <details style={{ marginTop: '12px' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                      View State Data
                    </summary>
                    <pre style={{
                      backgroundColor: '#f5f5f5',
                      padding: '12px',
                      marginTop: '8px',
                      borderRadius: '4px',
                      overflow: 'auto'
                    }}>
                      {JSON.stringify(location.state, null, 2)}
                    </pre>
                  </details>
                )}
              </Card>

              {/* Educational info about dashboard routing features */}
              <Card title="Dashboard Features">
                <Paragraph>
                  This dashboard demonstrates several important React Router concepts:
                </Paragraph>
                <ul>
                  <li><strong>Nested Routing:</strong> Use the sidebar to navigate to Profile and Settings</li>
                  <li><strong>Outlet Component:</strong> Child routes render in the main content area</li>
                  <li><strong>useLocation Hook:</strong> View current route information above</li>
                  <li><strong>State Passing:</strong> Login state is displayed when available</li>
                  <li><strong>Protected Routes:</strong> This page requires login navigation</li>
                </ul>

                <Paragraph style={{ marginTop: '16px' }}>
                  <strong>Try navigating to:</strong>
                </Paragraph>
                <ul>
                  <li>
                    <NavLink to="/dashboard/profile">Profile Page</NavLink> - See nested routing in action
                  </li>
                  <li>
                    <NavLink to="/dashboard/settings">Settings Page</NavLink> - Another nested route
                  </li>
                </ul>
              </Card>
            </div>
          )}

          {/* Render nested child routes using Outlet */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardPage;
