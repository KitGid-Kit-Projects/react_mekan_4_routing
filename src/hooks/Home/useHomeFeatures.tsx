import { useNavigate } from 'react-router-dom';
import { BookOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';

export const useHomeFeatures = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BookOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: 'Learn Routing',
      description: 'Explore React Router DOM v6+ with static, nested, and dynamic routes.',
      action: () => navigate('/about'),
    },
    {
      icon: <UserOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      title: 'Dashboard Features',
      description: 'Experience nested routing with protected dashboard and profile pages.',
      action: () => navigate('/login'),
    },
    {
      icon: <QuestionCircleOutlined style={{ fontSize: '48px', color: '#f5222d' }} />,
      title: 'CRUD Operations',
      description: 'See full Create, Read, Update, Delete functionality in action.',
      action: () => navigate('/questions'),
    },
  ];

  return features;
};
