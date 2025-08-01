import { Form, message } from "antd";
import { useLocation } from "react-router-dom";

export default function useSettingsPage(){
  const location = useLocation();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Settings saved:', values);
    message.success('Settings saved successfully!');
  };

  return{location,form,onFinish}
}