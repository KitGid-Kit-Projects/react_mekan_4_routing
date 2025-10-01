import { useAboutData } from '@/hooks/AboutPage/useAboutData';
import { Card, Typography, Row, Col, Tag } from 'antd';
import { useLocation } from 'react-router-dom';


const { Title, Paragraph } = Typography;

const AboutPage = () => {
  const location = useLocation();
  const { technologies, routingFeatures, learningObjectives } = useAboutData();

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Title level={1}>About This Educational App</Title>
        
        <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
          This React application serves as a comprehensive educational resource for learning 
          modern React development patterns, particularly focusing on routing with React Router DOM v6+.
        </Paragraph>

        {/* Current Route Info */}
        <Title level={2}>Current Route Information</Title>
        <Card size="small" style={{ marginBottom: '24px', backgroundColor: '#f0f2f5' }}>
          <p><strong>Current Path:</strong> {location.pathname}</p>
          <p><strong>Search:</strong> {location.search || 'None'}</p>
          <p><strong>State:</strong> {location.state ? JSON.stringify(location.state) : 'None'}</p>
        </Card>

        {/* Technologies & Routing Features */}
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Title level={3}>Technologies Used</Title>
            <div style={{ marginBottom: '16px' }}>
              {technologies.map(tech => (
                <Tag key={tech} color="blue" style={{ marginBottom: '8px' }}>
                  {tech}
                </Tag>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <Title level={3}>Routing Features Demonstrated</Title>
            <ul>
              {routingFeatures.map((feature, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  {feature}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* Learning Objectives */}
        <Title level={3}>Learning Objectives</Title>
        <Paragraph>By exploring this application, you will understand:</Paragraph>
        <ul>
          {learningObjectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default AboutPage;
