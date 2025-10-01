import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const QuestionDescription = ({ description }) => (
  <div style={{ marginBottom: '24px' }}>
    <Title level={3}>Description</Title>
    <Paragraph style={{ fontSize: '16px' }}>
      {description}
    </Paragraph>
  </div>
);

export default QuestionDescription;
