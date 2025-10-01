import { Form, message } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

export const useContactData = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
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

  return { form, onFinish, contactInfo };
};
