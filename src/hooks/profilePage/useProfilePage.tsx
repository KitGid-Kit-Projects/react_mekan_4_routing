
import { Form, message } from 'antd';
import { useLocation } from 'react-router-dom';
export default function useProfilePage(){
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

  return{location,form,userData,onFinish}
}