import ProfileAbout from '@/components/ProfilePage/ProfileAbout';
import ProfileForm from '@/components/ProfilePage/ProfileForm';
import ProfileInfo from '@/components/ProfilePage/ProfileInfo';
import ProfileRouteInfo from '@/components/ProfilePage/ProfileRouteInfo';
import { useProfileData } from '@/hooks/ProfilePage/useProfileData';
import { Typography, Row, Col } from 'antd';


const { Title, Paragraph } = Typography;

const ProfilePage = () => {
  const { form, userData, onFinish } = useProfileData();

  return (
    <div>
      <Title level={2}>User Profile</Title>
      <Paragraph>
        This is a nested route under <code>/dashboard/profile</code>. 
        It demonstrates how nested routing works with the Outlet component.
      </Paragraph>

      <ProfileRouteInfo />

      <Row gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          <ProfileInfo userData={userData} />
        </Col>
        <Col xs={24} lg={16}>
          <ProfileForm form={form} userData={userData} onFinish={onFinish} />
          <ProfileAbout />
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
