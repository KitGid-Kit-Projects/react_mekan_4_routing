import { Form, Switch, Select, Button, Typography, Divider } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const SettingsForm = ({ form, onFinish, loading }) => {
  return (
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
      <Form.Item name="notifications" valuePropName="checked">
        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
        <span style={{ marginLeft: '12px' }}>Enable push notifications</span>
      </Form.Item>

      <Form.Item name="emailUpdates" valuePropName="checked">
        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
        <span style={{ marginLeft: '12px' }}>Receive email updates</span>
      </Form.Item>

      <Divider />

      <Title level={4}>Appearance</Title>
      <Form.Item label="Theme" name="theme">
        <Select placeholder="Select theme">
          <Option value="light">Light Theme</Option>
          <Option value="dark">Dark Theme</Option>
          <Option value="auto">Auto (System)</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Language" name="language">
        <Select placeholder="Select language">
          <Option value="en">English</Option>
          <Option value="es">Spanish</Option>
          <Option value="fr">French</Option>
          <Option value="de">German</Option>
        </Select>
      </Form.Item>

      <Divider />

      <Title level={4}>Application Behavior</Title>
      <Form.Item name="autoSave" valuePropName="checked">
        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
        <span style={{ marginLeft: '12px' }}>Auto-save changes</span>
      </Form.Item>

      <Form.Item name="soundEffects" valuePropName="checked">
        <Switch checkedChildren="ON" unCheckedChildren="OFF" />
        <span style={{ marginLeft: '12px' }}>Enable sound effects</span>
      </Form.Item>

      <Form.Item style={{ marginTop: '32px' }}>
        <Button type="primary" htmlType="submit" size="large" loading={loading}>
          Save Settings
        </Button>
        <Button style={{ marginLeft: '12px' }} onClick={() => form.resetFields()}>
          Reset to Defaults
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SettingsForm;