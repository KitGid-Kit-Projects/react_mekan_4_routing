import { Card, Form, Input, Button, Row, Col } from 'antd';

const ProfileForm = ({ form, userData, onFinish }) => {
  return (
    <Card title="Edit Profile">
      <Form form={form} layout="vertical" onFinish={onFinish} initialValues={userData}>
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
                { type: 'email', message: 'Please enter a valid email!' },
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
            <Form.Item label="Join Date" name="joinDate">
              <Input disabled />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Address" name="address">
          <Input placeholder="Your address" />
        </Form.Item>

        <Form.Item label="Bio" name="bio">
          <Input.TextArea rows={4} placeholder="Tell us about yourself..." />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ProfileForm;
