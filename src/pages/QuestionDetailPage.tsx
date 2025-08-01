import { Card, Typography, Tag, Button, Space, Breadcrumb, message } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import useQuestionDetailPage from '@/hooks/questionDetailPage/useQuestionDetailPage';

const { Title, Paragraph } = Typography;

const QuestionDetailPage = () => {
const {id,navigate,questions,question,getDifficultyColor,handleEdit,handleDelete }=useQuestionDetailPage()
  return (
    <div style={{ padding: '24px' }}>
      <Breadcrumb style={{ marginBottom: '16px' }}>
        <Breadcrumb.Item>
          <Button type="link" onClick={() => navigate('/questions')} style={{ padding: 0 }}>
            Questions
          </Button>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{question.title}</Breadcrumb.Item>
      </Breadcrumb>

      <Card>
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

        <div style={{ marginBottom: '24px' }}>
          <Title level={3}>Description</Title>
          <Paragraph style={{ fontSize: '16px' }}>
            {question.description}
          </Paragraph>
        </div>

        <div>
          <Title level={3}>Detailed Content</Title>
          <div style={{ 
            backgroundColor: '#f9f9f9', 
            padding: '20px', 
            borderRadius: '8px',
            lineHeight: '1.6'
          }}>
            {question.fullContent.split('\n').map((paragraph, index) => (
              <Paragraph key={index} style={{ marginBottom: '12px' }}>
                {paragraph}
              </Paragraph>
            ))}
          </div>
        </div>
      </Card>

      <Card title="Dynamic Route Information" style={{ marginTop: '24px' }}>
        <Paragraph>
          <strong>Route Pattern:</strong> <code>/questions/:id</code>
        </Paragraph>
        <Paragraph>
          <strong>Current ID Parameter:</strong> <code>{id}</code>
        </Paragraph>
        <Paragraph>
          <strong>useParams() Hook:</strong> This page uses the useParams hook to extract the 'id' 
          parameter from the URL and find the corresponding question data.
        </Paragraph>
        <Paragraph>
          <strong>Navigation:</strong> You can navigate here from the Questions page by clicking 
          on question titles or view buttons, which use the useNavigate hook.
        </Paragraph>
      </Card>
    </div>
  );
};

export default QuestionDetailPage;