import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const LoginForm = ({ form, onFinish, demoLogin }) => {
  return (
    <>
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
          <Input prefix={<UserOutlined />} placeholder="Username" size="large" />
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
    </>
  );
};

export default LoginForm;
