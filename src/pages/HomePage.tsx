import { Card, Row, Col, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BookOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BookOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: 'Learn Routing',
      description: 'Explore React Router DOM v6+ with static, nested, and dynamic routes.',
      action: () => navigate('/about'),
    },
    {
      icon: <UserOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      title: 'Dashboard Features',
      description: 'Experience nested routing with protected dashboard and profile pages.',
      action: () => navigate('/login'),
    },
    {
      icon: <QuestionCircleOutlined style={{ fontSize: '48px', color: '#f5222d' }} />,
      title: 'CRUD Operations',
      description: 'See full Create, Read, Update, Delete functionality in action.',
      action: () => navigate('/questions'),
    },
  ];

  return (
    <div style={{ padding: '24px', minHeight: '80vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <Title level={1}>Welcome to Educational React App</Title>
        <Paragraph style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          This app demonstrates modern React patterns including React Router DOM v6+, 
          nested routing, CRUD operations, and Ant Design integration. Perfect for learning!
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} md={8} key={index}>
            <Card
              hoverable
              style={{ textAlign: 'center', height: '100%' }}
              actions={[
                <Button type="primary" onClick={feature.action} key="explore">
                  Explore
                </Button>
              ]}
            >
              <div style={{ marginBottom: '16px' }}>{feature.icon}</div>
              <Title level={3}>{feature.title}</Title>
              <Paragraph>{feature.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;