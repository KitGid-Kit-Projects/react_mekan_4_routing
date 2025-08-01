import { Card, Form, Input, Button, Avatar, Typography, Row, Col, Tag, message } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const ProfilePage = () => {
  const location = useLocation();
  const [form] = Form.useForm();

  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
    bio: 'React developer passionate about creating educational content and modern web applications.',
    skills: ['React', 'TypeScript', 'Node.js', 'React Router', 'Ant Design'],
    joinDate: '2023-01-15'
  };

  const onFinish = (values: any) => {
    console.log('Profile updated:', values);
    message.success('Profile updated successfully!');
  };

  return (
    <div>
      <Title level={2}>User Profile</Title>
      <Paragraph>
        This is a nested route under <code>/dashboard/profile</code>. 
        It demonstrates how nested routing works with the Outlet component.
      </Paragraph>

      <Card style={{ marginBottom: '16px', backgroundColor: '#f0f2f5' }}>
        <Paragraph>
          <strong>Current Route:</strong> {location.pathname}
        </Paragraph>
        <Paragraph>
          <strong>Route Structure:</strong> Dashboard {'>'} Profile (nested route)
        </Paragraph>
      </Card>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          <Card title="Profile Information">
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Avatar size={120} icon={<UserOutlined />} />
              <Title level={3} style={{ marginTop: '16px', marginBottom: '8px' }}>
                {userData.name}
              </Title>
              <Paragraph type="secondary">Member since {userData.joinDate}</Paragraph>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p><MailOutlined /> {userData.email}</p>
              <p><PhoneOutlined /> {userData.phone}</p>
              <p><HomeOutlined /> {userData.address}</p>
            </div>

            <div>
              <Title level={5}>Skills</Title>
              {userData.skills.map(skill => (
                <Tag key={skill} color="blue" style={{ marginBottom: '8px' }}>
                  {skill}
                </Tag>
              ))}
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={16}>
          <Card title="Edit Profile">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={userData}
            >
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                  >
                    <Input placeholder="Your full name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: 'Please enter your email!' },
                      { type: 'email', message: 'Please enter a valid email!' }
                    ]}
                  >
                    <Input placeholder="your.email@example.com" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[{ required: true, message: 'Please enter your phone!' }]}
                  >
                    <Input placeholder="Your phone number" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Join Date"
                    name="joinDate"
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                label="Address"
                name="address"
              >
                <Input placeholder="Your address" />
              </Form.Item>

              <Form.Item
                label="Bio"
                name="bio"
              >
                <Input.TextArea 
                  rows={4} 
                  placeholder="Tell us about yourself..."
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large">
                  Update Profile
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <Card title="About Nested Routing" style={{ marginTop: '16px' }}>
            <Paragraph>
              This Profile page demonstrates:
            </Paragraph>
            <ul>
              <li><strong>Nested Route Structure:</strong> /dashboard/profile</li>
              <li><strong>Outlet Usage:</strong> Renders inside DashboardPage layout</li>
              <li><strong>Shared Layout:</strong> Uses the same sidebar navigation</li>
              <li><strong>Route Isolation:</strong> Independent from other dashboard pages</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;