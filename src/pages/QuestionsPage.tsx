import { Table, Button, Card, Typography,  Modal, Form, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import useQuestionPage from '@/hooks/questionPage/useQuestionPage';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;


const QuestionsPage = () => {

const {form,questions, isModalVisible,editingQuestion,handleModalOk,handleModalCancel,showCreateModal,columns
}=useQuestionPage()
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Title level={1}>Questions Management</Title>
        <Paragraph>
          This page demonstrates CRUD operations and dynamic routing. Click on any question title 
          or the view button to navigate to <code>/questions/:id</code> using the useNavigate hook.
        </Paragraph>
      </div>

      <Card>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3} style={{ margin: 0 }}>All Questions ({questions.length})</Title>
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={showCreateModal}
          >
            Create New Question
          </Button>
        </div>

        <Table 
          columns={columns} 
          dataSource={questions}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>

      <Card title="CRUD Operations Demo" style={{ marginTop: '24px' }}>
        <Paragraph>
          This page demonstrates:
        </Paragraph>
        <ul>
          <li><strong>Create:</strong> Add new questions using the "Create New Question" button</li>
          <li><strong>Read:</strong> View questions in the table and navigate to detail pages</li>
          <li><strong>Update:</strong> Edit existing questions using the edit button</li>
          <li><strong>Delete:</strong> Remove questions with confirmation dialog</li>
          <li><strong>Dynamic Routing:</strong> Click question titles to navigate to /questions/:id</li>
          <li><strong>useNavigate Hook:</strong> Programmatic navigation to question details</li>
        </ul>
      </Card>

      <Modal
        title={editingQuestion ? 'Edit Question' : 'Create New Question'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please enter question title!' }]}
          >
            <Input placeholder="Enter question title" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter question description!' }]}
          >
            <TextArea 
              rows={4} 
              placeholder="Describe the question in detail..."
            />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: 'Please select a category!' }]}
          >
            <Select placeholder="Select category">
              <Option value="React">React</Option>
              <Option value="React Router">React Router</Option>
              <Option value="React Hooks">React Hooks</Option>
              <Option value="JavaScript">JavaScript</Option>
              <Option value="TypeScript">TypeScript</Option>
              <Option value="Authentication">Authentication</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Difficulty"
            name="difficulty"
            rules={[{ required: true, message: 'Please select difficulty level!' }]}
          >
            <Select placeholder="Select difficulty">
              <Option value="easy">Easy</Option>
              <Option value="medium">Medium</Option>
              <Option value="hard">Hard</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default QuestionsPage;