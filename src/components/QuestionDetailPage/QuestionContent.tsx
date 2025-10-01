import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const QuestionContent = ({ fullContent }) => (
  <div>
    <Title level={3}>Detailed Content</Title>
    <div style={{ 
      backgroundColor: '#f9f9f9', 
      padding: '20px', 
      borderRadius: '8px',
      lineHeight: '1.6'
    }}>
      {fullContent.split('\n').map((paragraph, index) => (
        <Paragraph key={index} style={{ marginBottom: '12px' }}>
          {paragraph}
        </Paragraph>
      ))}
    </div>
  </div>
);

export default QuestionContent;
