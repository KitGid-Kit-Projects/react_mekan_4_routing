import { Card, Form, Input, Button, Typography, Row, Col, message } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Contact form submitted:', values);
    message.success('Message sent successfully! (This is just a demo)');
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: <MailOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
      title: 'Email',
      content: 'info@eduapp.com',
    },
    {
      icon: <PhoneOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: '24px', color: '#f5222d' }} />,
      title: 'Address',
      content: '123 Education St, Learning City, LC 12345',
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
      <Title level={1}>Contact Us</Title>
      <Paragraph style={{ fontSize: '16px', marginBottom: '32px' }}>
        Have questions about React Router or this educational app? We'd love to hear from you!
      </Paragraph>

      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <Card title="Send us a Message">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input placeholder="Your full name" />
              </Form.Item>

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

              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: 'Please enter a subject!' }]}
              >
                <Input placeholder="What's this about?" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message!' }]}
              >
                <TextArea 
                  rows={4} 
                  placeholder="Tell us more about your question or feedback..."
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Card title="Get in Touch">
            <div style={{ marginBottom: '24px' }}>
              {contactInfo.map((info, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '16px',
                  padding: '12px',
                  border: '1px solid #f0f0f0',
                  borderRadius: '8px'
                }}>
                  <div style={{ marginRight: '16px' }}>{info.icon}</div>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                      {info.title}
                    </div>
                    <div style={{ color: '#666' }}>{info.content}</div>
                  </div>
                </div>
              ))}
            </div>

            <Title level={4}>About This Contact Page</Title>
            <Paragraph>
              This contact page demonstrates:
            </Paragraph>
            <ul>
              <li>Ant Design Form components and validation</li>
              <li>Form handling with onFinish callback</li>
              <li>Message notifications using Ant Design's message API</li>
              <li>Responsive layout with Row and Col components</li>
              <li>Icon integration from Ant Design</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;