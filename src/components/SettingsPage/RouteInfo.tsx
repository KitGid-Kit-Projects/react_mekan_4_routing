import { Card, Typography } from 'antd';
import { useLocation } from 'react-router-dom';

const { Paragraph: AntParagraph } = Typography;

const RouteInfo = () => {
  const location = useLocation();

  return (
    <>
      <Card style={{ marginBottom: '16px', backgroundColor: '#f0f2f5' }}>
        <AntParagraph>
          <strong>Current Route:</strong> {location.pathname}
        </AntParagraph>
        <AntParagraph>
          <strong>Route Structure:</strong> Dashboard {'>'} Settings (nested route)
        </AntParagraph>
      </Card>

      <Card title="Settings Information">
        <p>
          <strong>Settings Persistence:</strong><br />
          In a real application, these settings would be saved to a database 
          or local storage and persist across sessions.
        </p>

        <p>
          <strong>Nested Route Benefits:</strong><br />
          Settings are logically grouped under the dashboard while maintaining 
          the same navigation structure.
        </p>

        <p>
          <strong>Form Handling:</strong><br />
          This demonstrates Ant Design's Form component with various input types 
          including switches, selects, and buttons.
        </p>
      </Card>

      <Card title="Route Structure" style={{ marginTop: '16px' }}>
        <ul style={{ paddingLeft: '20px' }}>
          <li>/dashboard (parent route)</li>
          <li style={{ marginLeft: '20px' }}>
            /dashboard/settings (this page)
          </li>
          <li style={{ marginLeft: '20px' }}>
            /dashboard/profile (sibling route)
          </li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          Both nested routes share the same layout and sidebar navigation 
          provided by the parent DashboardPage component.
        </p>
      </Card>
    </>
  );
};

export default RouteInfo;