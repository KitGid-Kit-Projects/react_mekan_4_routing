import { useNavigate } from 'react-router-dom';
import {
  BookOutlined,
  UserOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

export default function useHomePage() {
  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  // List of feature cards displayed on the Home page
  const features = [
    {
      icon: (
        <BookOutlined
          style={{ fontSize: '48px', color: '#1890ff' }}
        />
      ),
      title: 'Learn Routing',
      description:
        'Explore React Router DOM v6+ with static, nested, and dynamic routes.',
      action: () => navigate('/about'), // Navigate to About page on action
    },
    {
      icon: (
        <UserOutlined
          style={{ fontSize: '48px', color: '#52c41a' }}
        />
      ),
      title: 'Dashboard Features',
      description:
        'Experience nested routing with protected dashboard and profile pages.',
      action: () => navigate('/login'), // Navigate to Login page on action
    },
    {
      icon: (
        <QuestionCircleOutlined
          style={{ fontSize: '48px', color: '#f5222d' }}
        />
      ),
      title: 'CRUD Operations',
      description: 'See full Create, Read, Update, Delete functionality in action.',
      action: () => navigate('/questions'), // Navigate to Questions page on action
    },
  ];

  // Return navigate function and features array for use in components
  return {
    navigate,
    features,
  };
}
