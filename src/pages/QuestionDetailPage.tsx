import QuestionContent from '@/components/QuestionDetailPage/QuestionContent';
import QuestionDescription from '@/components/QuestionDetailPage/QuestionDescription';
import QuestionHeader from '@/components/QuestionDetailPage/QuestionHeader';
import QuestionRouteInfo from '@/components/QuestionDetailPage/QuestionRouteInfo';
import { useQuestionDetail } from '@/hooks/QuestionDetailPage/useQuestionDetail';
import { Card, Typography, Breadcrumb, Button } from 'antd';


const { Title, Paragraph } = Typography;

const QuestionDetailPage = () => {
  const { id, navigate, question, getDifficultyColor, handleEdit, handleDelete } = useQuestionDetail();

  if (!question) {
    return (
      <div style={{ padding: '24px' }}>
        <Card>
          <Title level={2}>Question Not Found</Title>
          <Paragraph>
            The question with ID "{id}" could not be found.
          </Paragraph>
          <Button type="primary" onClick={() => navigate('/questions')}>
            Back to Questions
          </Button>
        </Card>
      </div>
    );
  }

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
        <QuestionHeader
          question={question} 
          navigate={navigate} 
          getDifficultyColor={getDifficultyColor} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete} 
        />
        <QuestionDescription description={question.description} />
        <QuestionContent fullContent={question.fullContent} />
      </Card>

      <QuestionRouteInfo id={id} />
    </div>
  );
};

export default QuestionDetailPage;
