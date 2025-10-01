import { Form, message } from 'antd';

export const useProfileData = () => {
  const [form] = Form.useForm();

  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, City, State 12345',
    bio: 'React developer passionate about creating educational content and modern web applications.',
    skills: ['React', 'TypeScript', 'Node.js', 'React Router', 'Ant Design'],
    joinDate: '2023-01-15',
  };

  const onFinish = (values) => {
    console.log('Profile updated:', values);
    message.success('Profile updated successfully!');
  };

  return { form, userData, onFinish };
};
