import { useState } from 'react';
import { Table, Button, Card, Typography, Space, Tag, Modal, Form, Input, Select, message, Popconfirm } from 'antd';
import { PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

interface Question {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  createdAt: string;
}

const QuestionsPage = () => {
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

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Title level={1}>Questions Management</Title>
        <Paragraph>
          This page demonstrates CRUD operations and dynamic routing. Click on any question title 
          or the view button to navigate to <code>/questions/:id</code> using the useNavigate hook.
        </Paragraph>
      </div>

      <Card>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3} style={{ margin: 0 }}>All Questions ({questions.length})</Title>
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={showCreateModal}
          >
            Create New Question
          </Button>
        </div>

        <Table 
          columns={columns} 
          dataSource={questions}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>

      <Card title="CRUD Operations Demo" style={{ marginTop: '24px' }}>
        <Paragraph>
          This page demonstrates:
        </Paragraph>
        <ul>
          <li><strong>Create:</strong> Add new questions using the "Create New Question" button</li>
          <li><strong>Read:</strong> View questions in the table and navigate to detail pages</li>
          <li><strong>Update:</strong> Edit existing questions using the edit button</li>
          <li><strong>Delete:</strong> Remove questions with confirmation dialog</li>
          <li><strong>Dynamic Routing:</strong> Click question titles to navigate to /questions/:id</li>
          <li><strong>useNavigate Hook:</strong> Programmatic navigation to question details</li>
        </ul>
      </Card>

      <Modal
        title={editingQuestion ? 'Edit Question' : 'Create New Question'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter question title!' }]}
          >
            <Input placeholder="Enter question title" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter question description!' }]}
          >
            <TextArea 
              rows={4} 
              placeholder="Describe the question in detail..."
            />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: 'Please select a category!' }]}
          >
            <Select placeholder="Select category">
              <Option value="React">React</Option>
              <Option value="React Router">React Router</Option>
              <Option value="React Hooks">React Hooks</Option>
              <Option value="JavaScript">JavaScript</Option>
              <Option value="TypeScript">TypeScript</Option>
              <Option value="Authentication">Authentication</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Difficulty"
            name="difficulty"
            rules={[{ required: true, message: 'Please select difficulty level!' }]}
          >
            <Select placeholder="Select difficulty">
              <Option value="easy">Easy</Option>
              <Option value="medium">Medium</Option>
              <Option value="hard">Hard</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default QuestionsPage;