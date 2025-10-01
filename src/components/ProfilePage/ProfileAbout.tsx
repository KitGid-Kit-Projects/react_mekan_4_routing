import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

const ProfileAbout = () => {
  return (
    <Card title="About Nested Routing" style={{ marginTop: '16px' }}>
      <Paragraph>This Profile page demonstrates:</Paragraph>
      <ul>
        <li><strong>Nested Route Structure:</strong> /dashboard/profile</li>
        <li><strong>Outlet Usage:</strong> Renders inside DashboardPage layout</li>
        <li><strong>Shared Layout:</strong> Uses the same sidebar navigation</li>
        <li><strong>Route Isolation:</strong> Independent from other dashboard pages</li>
      </ul>
    </Card>
  );
};

export default ProfileAbout;
