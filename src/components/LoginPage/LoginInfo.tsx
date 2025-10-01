import { Card, Typography } from 'antd';

const { Title } = Typography;

const LoginInfo = () => {
  return (
    <Card size="small" style={{ marginTop: '16px', backgroundColor: '#fff7e6' }}>
      <Title level={5}>Demo Instructions:</Title>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        <li><strong>Username:</strong> admin</li>
        <li><strong>Password:</strong> password</li>
        <li>Click "Fill Demo Credentials" for quick access</li>
        <li>After login, check the dashboard for passed state data</li>
      </ul>
    </Card>
  );
};

export default LoginInfo;
