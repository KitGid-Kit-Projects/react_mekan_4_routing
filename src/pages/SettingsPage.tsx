import useSettingsPage from '@/hooks/settingsPage/useSettingsPage';
import { Card, Form, Switch, Select, Button, Typography, Row, Col, Divider } from 'antd';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const SettingsPage = () => {
const {location,form,onFinish}=useSettingsPage()
  return (
    <div>
      <Title level={2}>Application Settings</Title>
      <Paragraph>
        Another nested route example under <code>/dashboard/settings</code>.
        Configure your application preferences here.
      </Paragraph>

      <Card style={{ marginBottom: '16px', backgroundColor: '#f0f2f5' }}>
        <Paragraph>
          <strong>Current Route:</strong> {location.pathname}
        </Paragraph>
        <Paragraph>
          <strong>Route Structure:</strong> Dashboard {'>'} Settings (nested route)
        </Paragraph>
      </Card>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card title="User Preferences">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              initialValues={{
                notifications: true,
                emailUpdates: false,
                theme: 'light',
                language: 'en',
                autoSave: true,
                soundEffects: false
              }}
            >
              <Title level={4}>Notifications</Title>
              <Form.Item
                name="notifications"
                valuePropName="checked"
              >
                <Switch checkedChildren="ON" unCheckedChildren="OFF" />
                <span style={{ marginLeft: '12px' }}>Enable push notifications</span>
              </Form.Item>

              <Form.Item
                name="emailUpdates"
                valuePropName="checked"
              >
                <Switch checkedChildren="ON" unCheckedChildren="OFF" />
                <span style={{ marginLeft: '12px' }}>Receive email updates</span>
              </Form.Item>

              <Divider />

              <Title level={4}>Appearance</Title>
              <Form.Item
                label="Theme"
                name="theme"
              >
                <Select placeholder="Select theme">
                  <Option value="light">Light Theme</Option>
                  <Option value="dark">Dark Theme</Option>
                  <Option value="auto">Auto (System)</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Language"
                name="language"
              >
                <Select placeholder="Select language">
                  <Option value="en">English</Option>
                  <Option value="es">Spanish</Option>
                  <Option value="fr">French</Option>
                  <Option value="de">German</Option>
                </Select>
              </Form.Item>

              <Divider />

              <Title level={4}>Application Behavior</Title>
              <Form.Item
                name="autoSave"
                valuePropName="checked"
              >
                <Switch checkedChildren="ON" unCheckedChildren="OFF" />
                <span style={{ marginLeft: '12px' }}>Auto-save changes</span>
              </Form.Item>

              <Form.Item
                name="soundEffects"
                valuePropName="checked"
              >
                <Switch checkedChildren="ON" unCheckedChildren="OFF" />
                <span style={{ marginLeft: '12px' }}>Enable sound effects</span>
              </Form.Item>

              <Form.Item style={{ marginTop: '32px' }}>
                <Button type="primary" htmlType="submit" size="large">
                  Save Settings
                </Button>
                <Button style={{ marginLeft: '12px' }} onClick={() => form.resetFields()}>
                  Reset to Defaults
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="Settings Information">
            <Paragraph>
              <strong>Settings Persistence:</strong><br />
              In a real application, these settings would be saved to a database 
              or local storage and persist across sessions.
            </Paragraph>

            <Paragraph>
              <strong>Nested Route Benefits:</strong><br />
              Settings are logically grouped under the dashboard while maintaining 
              the same navigation structure.
            </Paragraph>

            <Paragraph>
              <strong>Form Handling:</strong><br />
              This demonstrates Ant Design's Form component with various input types 
              including switches, selects, and buttons.
            </Paragraph>
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
            <Paragraph style={{ marginTop: '12px' }}>
              Both nested routes share the same layout and sidebar navigation 
              provided by the parent DashboardPage component.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPage;