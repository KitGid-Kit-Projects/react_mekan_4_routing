import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

const QuestionsInfoCard = () => (
  <Card title="CRUD Operations Demo" style={{ marginTop: '24px' }}>
    <Paragraph>This page demonstrates:</Paragraph>
    <ul>
      <li><strong>Create:</strong> Add new questions using the "Create New Question" button</li>
      <li><strong>Read:</strong> View questions in the table and navigate to detail pages</li>
      <li><strong>Update:</strong> Edit existing questions using the edit button</li>
      <li><strong>Delete:</strong> Remove questions with confirmation dialog</li>
      <li><strong>Dynamic Routing:</strong> Click question titles to navigate to /questions/:id</li>
      <li><strong>useNavigate Hook:</strong> Programmatic navigation to question details</li>
    </ul>
  </Card>
);

export default QuestionsInfoCard;
