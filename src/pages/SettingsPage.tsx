import RouteInfo from '@/components/SettingsPage/RouteInfo';
import SettingsForm from '@/components/SettingsPage/SettingsForm';
import { useSettingsForm } from '@/hooks/SettingsPage/useSettingsForm';
import { Card, Typography, Row, Col } from 'antd';
import { Form } from 'antd';


const { Title, Paragraph } = Typography;

const SettingsPage = () => {
  const [form] = Form.useForm();
  const { loading, onFinish } = useSettingsForm();

  return (
    <div>
      <Title level={2}>Application Settings</Title>
      <Paragraph>
        Another nested route example under <code>/dashboard/settings</code>.
        Configure your application preferences here.
      </Paragraph>

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={16}>
          <Card title="User Preferences">
            <SettingsForm
              form={form} 
              onFinish={onFinish} 
              loading={loading} 
            />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <RouteInfo />
        </Col>
      </Row>
    </div>
  );
};

export default SettingsPage;