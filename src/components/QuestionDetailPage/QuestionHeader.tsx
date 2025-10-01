import { Button, Space, Tag, Typography } from 'antd';
import { ArrowLeftOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;

const QuestionHeader = ({ question, navigate, getDifficultyColor, handleEdit, handleDelete }) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <Button 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate('/questions')}
        style={{ marginBottom: '16px' }}
      >
        Back to Questions
      </Button>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <Title level={1} style={{ marginBottom: '8px' }}>
            {question.title}
          </Title>
          <Space style={{ marginBottom: '16px' }}>
            <Tag color="blue">{question.category}</Tag>
            <Tag color={getDifficultyColor(question.difficulty)}>
              {question.difficulty.toUpperCase()}
            </Tag>
            <span style={{ color: '#666' }}>Created: {question.createdAt}</span>
          </Space>
        </div>
        
        <Space>
          <Button icon={<EditOutlined />} onClick={handleEdit}>
            Edit
          </Button>
          <Button icon={<DeleteOutlined />} danger onClick={handleDelete}>
            Delete
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default QuestionHeader;
