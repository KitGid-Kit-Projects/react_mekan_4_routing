import { Card, Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Login attempt:', values);
    
    // Simulate login validation
    if (values.username === 'admin' && values.password === 'password') {
      message.success('Login successful! Redirecting to dashboard...');
      
      // Navigate to dashboard with state
      setTimeout(() => {
        navigate('/dashboard', { 
          state: { 
            user: values.username,
            loginTime: new Date().toLocaleString(),
            message: 'Welcome back! You successfully logged in.' 
          } 
        });
      }, 1000);
    } else {
      message.error('Invalid credentials! Use admin/password');
    }
  };

  const demoLogin = () => {
    form.setFieldsValue({
      username: 'admin',
      password: 'password'
    });
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh',
      backgroundColor: '#f0f2f5',
      padding: '24px'
    }}>
      <Card style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <Title level={2}>Login to Dashboard</Title>
          <Paragraph>
            This demonstrates protected route navigation with useNavigate() and state passing.
          </Paragraph>
        </div>

        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Username"
              size="large"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Log In
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <Button type="link" onClick={demoLogin}>
            Fill Demo Credentials
          </Button>
        </div>

        <Card size="small" style={{ marginTop: '16px', backgroundColor: '#fff7e6' }}>
          <Title level={5}>Demo Instructions:</Title>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li><strong>Username:</strong> admin</li>
            <li><strong>Password:</strong> password</li>
            <li>Click "Fill Demo Credentials" for quick access</li>
            <li>After login, check the dashboard for passed state data</li>
          </ul>
        </Card>
      </Card>
    </div>
  );
};

export default LoginPage;