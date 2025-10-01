import { useState } from 'react';
import { message } from 'antd';

export const useSettingsForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      console.log('Settings saved:', values);
      // Burada API çağrısı edə bilərsiniz
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulyasiya
      message.success('Settings saved successfully!');
    } catch (error) {
      message.error('Error saving settings');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    onFinish
  };
};