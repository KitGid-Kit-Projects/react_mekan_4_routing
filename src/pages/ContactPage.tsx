import ContactForm from '@/components/ContactPage/ContactForm';
import ContactInfo from '@/components/ContactPage/ContactInfo';
import { useContactData } from '@/hooks/ContactPage/useContactData';
import { Typography, Row, Col } from 'antd';
const { Title, Paragraph } = Typography;

const ContactPage = () => {
  const { form, onFinish, contactInfo } = useContactData();

  return (
    <div style={{ padding: '24px' }}>
      <Title level={1}>Contact Us</Title>
      <Paragraph style={{ fontSize: '16px', marginBottom: '32px' }}>
        Have questions about React Router or this educational app? We'd love to hear from you!
      </Paragraph>

      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <ContactForm form={form} onFinish={onFinish} />
        </Col>

        <Col xs={24} lg={12}>
          <ContactInfo contactInfo={contactInfo} />
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
