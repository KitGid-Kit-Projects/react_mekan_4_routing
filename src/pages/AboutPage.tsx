import useAboutPage from '@/hooks/aboutPage/useAboutPage';
import { Card, Typography, Row, Col, Tag } from 'antd';
const { Title, Paragraph } = Typography;

const AboutPage = () => {

const {location,technologies,routingFeatures}=useAboutPage()
  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Title level={1}>About This Educational App</Title>
        
        <Paragraph style={{ fontSize: '16px', marginBottom: '24px' }}>
          This React application serves as a comprehensive educational resource for learning 
          modern React development patterns, particularly focusing on routing with React Router DOM v6+.
        </Paragraph>

        <Title level={2}>Current Route Information</Title>
        <Card size="small" style={{ marginBottom: '24px', backgroundColor: '#f0f2f5' }}>
          <p><strong>Current Path:</strong> {location.pathname}</p>
          <p><strong>Search:</strong> {location.search || 'None'}</p>
          <p><strong>State:</strong> {location.state ? JSON.stringify(location.state) : 'None'}</p>
        </Card>

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

        <Title level={3}>Learning Objectives</Title>
        <Paragraph>
          By exploring this application, you will understand:
        </Paragraph>
        <ul>
          <li>How to set up React Router DOM v6+ with modern syntax</li>
          <li>Implementing nested routes with Outlet components</li>
          <li>Using React Router hooks (useNavigate, useParams, useLocation)</li>
          <li>Building CRUD operations with local state management</li>
          <li>Creating protected routes and navigation guards</li>
          <li>Integrating Ant Design with React Router for beautiful UIs</li>
        </ul>
      </Card>
    </div>
  );
};

export default AboutPage;