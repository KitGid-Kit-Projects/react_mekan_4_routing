// Ant Design UI components used for the profile information card
import { Card, Avatar, Typography, Tag } from 'antd';
// Icons used next to contact information
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

// Extract commonly used typography pieces to keep JSX concise
const { Title, Paragraph } = Typography;

// ProfileInfo component displays read-only user information
// Props:
// - userData: object containing name, contact info, address, skills, and joinDate
const ProfileInfo = ({ userData }) => {
  return (
    // Card container with a title
    <Card title="Profile Information">
      {/* Centered avatar and name area */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        {/* Avatar with fallback user icon */}
        <Avatar size={120} icon={<UserOutlined />} />
        {/* User's full name */}
        <Title level={3} style={{ marginTop: '16px', marginBottom: '8px' }}>
          {userData.name}
        </Title>
        {/* Secondary text showing when the user joined */}
        <Paragraph type="secondary">Member since {userData.joinDate}</Paragraph>
      </div>

      {/* Contact information block */}
      <div style={{ marginBottom: '16px' }}>
        <p><MailOutlined /> {userData.email}</p>
        <p><PhoneOutlined /> {userData.phone}</p>
        <p><HomeOutlined /> {userData.address}</p>
      </div>

      {/* Skills list rendered as Tags */}
      <div>
        <Title level={5}>Skills</Title>
        {/* Map over the skills array and render a Tag for each skill */}
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
