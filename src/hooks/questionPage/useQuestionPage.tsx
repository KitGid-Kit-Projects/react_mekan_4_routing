import { Button, Form, message, Popconfirm, Space, Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface Question {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  createdAt: string;
}

export default function useQuestionPage(){
      const navigate = useNavigate();
  const [form] = Form.useForm();
  
  // Mock questions data
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      title: 'What is React Router?',
      description: 'Explain the purpose and basic usage of React Router in single-page applications.',
      difficulty: 'easy',
      category: 'React',
      createdAt: '2024-01-15',
    },
    {
      id: '2', 
      title: 'Implementing Nested Routes',
      description: 'How do you create nested routes using React Router v6+ and what is the role of the Outlet component?',
      difficulty: 'medium',
      category: 'React Router',
      createdAt: '2024-01-16',
    },
    {
      id: '3',
      title: 'useParams Hook Usage',
      description: 'Demonstrate how to use the useParams hook to access dynamic route parameters.',
      difficulty: 'easy',
      category: 'React Hooks',
      createdAt: '2024-01-17',
    },
    {
      id: '4',
      title: 'Protected Routes Implementation',
      description: 'Create a system for protecting routes that require authentication using React Router.',
      difficulty: 'hard',
      category: 'Authentication',
      createdAt: '2024-01-18',
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'green';
      case 'medium': return 'orange';
      case 'hard': return 'red';
      default: return 'default';
    }
  };

  const handleView = (id: string) => {
    navigate(`/questions/${id}`);
  };

  const handleEdit = (question: Question) => {
    setEditingQuestion(question);
    form.setFieldsValue(question);
    setIsModalVisible(true);
  };

  const handleDelete = (id: string) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
    message.success('Question deleted successfully!');
  };

  const handleModalOk = () => {
    form.validateFields().then(values => {
      if (editingQuestion) {
        // Update existing question
        setQuestions(prev => prev.map(q => 
          q.id === editingQuestion.id 
            ? { ...editingQuestion, ...values }
            : q
        ));
        message.success('Question updated successfully!');
      } else {
        // Create new question
        const newQuestion: Question = {
          id: Date.now().toString(),
          ...values,
          createdAt: new Date().toISOString().split('T')[0],
        };
        setQuestions(prev => [newQuestion, ...prev]);
        message.success('Question created successfully!');
      }
      
      setIsModalVisible(false);
      setEditingQuestion(null);
      form.resetFields();
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setEditingQuestion(null);
    form.resetFields();
  };

  const showCreateModal = () => {
    setEditingQuestion(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: Question) => (
        <Button type="link" onClick={() => handleView(record.id)} style={{ padding: 0 }}>
          {text}
        </Button>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category: string) => <Tag color="blue">{category}</Tag>,
    },
    {
      title: 'Difficulty',
      dataIndex: 'difficulty',
      key: 'difficulty',
      render: (difficulty: string) => (
        <Tag color={getDifficultyColor(difficulty)}>
          {difficulty.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Question) => (
        <Space>
          <Button 
            icon={<EyeOutlined />} 
            onClick={() => handleView(record.id)}
            title="View Details"
          />
          <Button 
            icon={<EditOutlined />} 
            onClick={() => handleEdit(record)}
            title="Edit Question"
          />
          <Popconfirm
            title="Are you sure you want to delete this question?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button 
              icon={<DeleteOutlined />} 
              danger
              title="Delete Question"
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return{navigate,form,questions, setQuestions,isModalVisible, setIsModalVisible,editingQuestion, setEditingQuestion,
    getDifficultyColor,handleView,handleEdit,handleDelete,handleModalOk,handleModalCancel,showCreateModal,columns
}
}