import { useParams, useNavigate } from 'react-router-dom';
import { message } from 'antd';

export const useQuestionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const questions = [
    {
      id: '1',
      title: 'What is React Router?',
      description: 'Explain the purpose and basic usage of React Router in single-page applications.',
      difficulty: 'easy',
      category: 'React',
      createdAt: '2024-01-15',
      fullContent: `React Router is a declarative routing library for React applications...`,
    },
    {
      id: '2',
      title: 'Implementing Nested Routes',
      description: 'How do you create nested routes using React Router v6+ and what is the role of the Outlet component?',
      difficulty: 'medium',
      category: 'React Router',
      createdAt: '2024-01-16',
      fullContent: `Nested routes in React Router v6+ allow you to create hierarchical URL structures...`,
    },
    {
      id: '3',
      title: 'useParams Hook Usage',
      description: 'Demonstrate how to use the useParams hook to access dynamic route parameters.',
      difficulty: 'easy',
      category: 'React Hooks',
      createdAt: '2024-01-17',
      fullContent: `The useParams hook is a React Router hook that returns an object containing...`,
    },
    {
      id: '4',
      title: 'Protected Routes Implementation',
      description: 'Create a system for protecting routes that require authentication using React Router.',
      difficulty: 'hard',
      category: 'Authentication',
      createdAt: '2024-01-18',
      fullContent: `Protected routes (also called private routes) are routes that require user authentication...`,
    },
  ];

  const question = questions.find(q => q.id === id);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'green';
      case 'medium': return 'orange';
      case 'hard': return 'red';
      default: return 'default';
    }
  };

  const handleEdit = () => {
    message.info('Edit functionality would open the edit modal here');
  };

  const handleDelete = () => {
    message.info('Delete functionality would show confirmation dialog here');
  };

  return { id, navigate, question, getDifficultyColor, handleEdit, handleDelete };
};
