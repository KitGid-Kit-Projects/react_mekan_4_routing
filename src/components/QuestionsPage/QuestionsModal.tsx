import { Question } from '@/hooks/QuestionsPage/useQuestions';
import { Modal, Form, Input, Select } from 'antd';


const { TextArea } = Input;
const { Option } = Select;

interface Props {
  form: any;
  editingQuestion: Question | null;
  isModalVisible: boolean;
  handleModalOk: () => void;
  handleModalCancel: () => void;
}

const QuestionsModal = ({ form, editingQuestion, isModalVisible, handleModalOk, handleModalCancel }: Props) => {
  return (
    <Modal
      title={editingQuestion ? 'Edit Question' : 'Create New Question'}
      open={isModalVisible}
      onOk={handleModalOk}
      onCancel={handleModalCancel}
      width={600}
    >
      <Form form={form} layout="vertical" autoComplete="off">
        <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please enter question title!' }]}>
          <Input placeholder="Enter question title" />
        </Form.Item>

        <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter description!' }]}>
          <TextArea rows={4} placeholder="Describe the question in detail..." />
        </Form.Item>

        <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select a category!' }]}>
          <Select placeholder="Select category">
            <Option value="React">React</Option>
            <Option value="React Router">React Router</Option>
            <Option value="React Hooks">React Hooks</Option>
            <Option value="JavaScript">JavaScript</Option>
            <Option value="TypeScript">TypeScript</Option>
            <Option value="Authentication">Authentication</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Difficulty" name="difficulty" rules={[{ required: true, message: 'Please select difficulty!' }]}>
          <Select placeholder="Select difficulty">
            <Option value="easy">Easy</Option>
            <Option value="medium">Medium</Option>
            <Option value="hard">Hard</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default QuestionsModal;
