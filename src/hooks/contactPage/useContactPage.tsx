import { Form, message } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

export default function useContactPage() {
  // Initialize Ant Design form instance
  const [form] = Form.useForm();

  // Handle form submission
  const onFinish = (values: any) => {
    console.log('Contact form submitted:', values);
    message.success('Message sent successfully! (This is just a demo)');
    form.resetFields(); // Clear form fields after submission
  };

  // Static contact information to display
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
      icon: (
        <EnvironmentOutlined style={{ fontSize: '24px', color: '#f5222d' }} />
      ),
      title: 'Address',
      content: '123 Education St, Learning City, LC 12345',
    },
  ];

  // Expose form instance, submit handler, and contact details
  return {
    form,
    onFinish,
    contactInfo,
  };
}
