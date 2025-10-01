import { Card, Avatar, Typography, Tag } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ProfileInfo = ({ userData }) => {
  return (
    <Card title="Profile Information">
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <Avatar size={120} icon={<UserOutlined />} />
        <Title level={3} style={{ marginTop: '16px', marginBottom: '8px' }}>
          {userData.name}
        </Title>
        <Paragraph type="secondary">Member since {userData.joinDate}</Paragraph>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <p><MailOutlined /> {userData.email}</p>
        <p><PhoneOutlined /> {userData.phone}</p>
        <p><HomeOutlined /> {userData.address}</p>
      </div>

      <div>
        <Title level={5}>Skills</Title>
        {userData.skills.map(skill => (
          <Tag key={skill} color="blue" style={{ marginBottom: '8px' }}>
            {skill}
          </Tag>
        ))}
      </div>
    </Card>
  );
};

export default ProfileInfo;
