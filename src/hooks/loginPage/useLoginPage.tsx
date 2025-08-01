import { Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function useLoginPage() {
  // Hook for programmatic navigation
  const navigate = useNavigate();
  
  // Initialize Ant Design form instance
  const [form] = Form.useForm();

  // Function to handle form submission
  const onFinish = (values: any) => {
    console.log('Login attempt:', values);

    // Simple demo validation: check username and password
    if (values.username === 'admin' && values.password === 'password') {
      message.success('Login successful! Redirecting to dashboard...');

      // Delay navigation for UX effect, passing user info in location state
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
      // Show error message if credentials are invalid
      message.error('Invalid credentials! Use admin/password');
    }
  };

  // Helper to autofill demo credentials into the form
  const demoLogin = () => {
    form.setFieldsValue({
      username: 'admin',
      password: 'password',
    });
  };

  // Return navigation, form instance, demo autofill, and submit handler
  return {
    navigate,
    form,
    demoLogin,
    onFinish,
  };
}
