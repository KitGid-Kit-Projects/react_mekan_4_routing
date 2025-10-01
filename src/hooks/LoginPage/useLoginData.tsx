import { Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';

export const useLoginData = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Login attempt:', values);

    if (values.username === 'admin' && values.password === 'password') {
      message.success('Login successful! Redirecting to dashboard...');

      setTimeout(() => {
        navigate('/dashboard', {
          state: {
            user: values.username,
            loginTime: new Date().toLocaleString(),
            message: 'Welcome back! You successfully logged in.',
          },
        });
      }, 1000);
    } else {
      message.error('Invalid credentials! Use admin/password');
    }
  };

  const demoLogin = () => {
    form.setFieldsValue({
      username: 'admin',
      password: 'password',
    });
  };

  return { form, onFinish, demoLogin };
};
