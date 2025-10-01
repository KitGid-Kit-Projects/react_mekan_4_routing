import { Card, Typography } from 'antd';
import { useLocation } from 'react-router-dom';

const { Paragraph } = Typography;

const ProfileRouteInfo = () => {
  const location = useLocation();

  return (
    <Card style={{ marginBottom: '16px', backgroundColor: '#f0f2f5' }}>
      <Paragraph>
        <strong>Current Route:</strong> {location.pathname}
      </Paragraph>
      <Paragraph>
        <strong>Route Structure:</strong> Dashboard {'>'} Profile (nested route)
      </Paragraph>
    </Card>
  );
};

export default ProfileRouteInfo;
