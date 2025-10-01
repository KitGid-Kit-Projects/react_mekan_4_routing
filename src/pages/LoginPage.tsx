import LoginForm from '@/components/LoginPage/LoginForm';
import LoginInfo from '@/components/LoginPage/LoginInfo';
import { useLoginData } from '@/hooks/LoginPage/useLoginData';
import { Card } from 'antd';


const LoginPage = () => {
  const { form, onFinish, demoLogin } = useLoginData();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        backgroundColor: '#f0f2f5',
        padding: '24px',
      }}
    >
      <Card style={{ width: '100%', maxWidth: '400px' }}>
        <LoginForm form={form} onFinish={onFinish} demoLogin={demoLogin} />
        <LoginInfo />
      </Card>
    </div>
  );
};

export default LoginPage;
