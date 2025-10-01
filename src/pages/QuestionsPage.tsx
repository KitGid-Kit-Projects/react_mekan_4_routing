import { Card, Typography, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useQuestions } from '@/hooks/QuestionsPage/useQuestions';
import QuestionsTable from '@/components/QuestionsPage/QuestionsTable';
import QuestionsInfoCard from '@/components/QuestionsPage/QuestionsInfoCard';
import QuestionsModal from '@/components/QuestionsPage/QuestionsModal';


const { Title, Paragraph } = Typography;

const QuestionsPage = () => {
  const {
    questions,
    form,
    isModalVisible,
    editingQuestion,
    getDifficultyColor,
    handleView,
    handleEdit,
    handleDelete,
    handleModalOk,
    handleModalCancel,
    showCreateModal,
  } = useQuestions();

  return (
    <div style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px' }}>
        <Title level={1}>Questions Management</Title>
        <Paragraph>
          This page demonstrates CRUD operations and dynamic routing. Click on any question title 
          or the view button to navigate to <code>/questions/:id</code>.
        </Paragraph>
      </div>

      <Card>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3} style={{ margin: 0 }}>All Questions ({questions.length})</Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={showCreateModal}>
            Create New Question
          </Button>
        </div>

        <QuestionsTable
          questions={questions}
          getDifficultyColor={getDifficultyColor}
          handleView={handleView}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </Card>

      <QuestionsInfoCard />

      <QuestionsModal
        form={form}
        editingQuestion={editingQuestion}
        isModalVisible={isModalVisible}
        handleModalOk={handleModalOk}
        handleModalCancel={handleModalCancel}
      />
    </div>
  );
};

export default QuestionsPage;
