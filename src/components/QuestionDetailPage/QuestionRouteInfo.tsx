import { Card, Typography } from 'antd';

const { Paragraph } = Typography;

const QuestionRouteInfo = ({ id }) => (
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
);

export default QuestionRouteInfo;
