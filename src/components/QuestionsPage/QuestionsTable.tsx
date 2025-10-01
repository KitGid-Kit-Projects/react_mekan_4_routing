import { Table, Button, Space, Tag, Popconfirm } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Question } from '@/hooks/QuestionsPage/useQuestions';


interface Props {
  questions: Question[];
  getDifficultyColor: (difficulty: string) => string;
  handleView: (id: string) => void;
  handleEdit: (question: Question) => void;
  handleDelete: (id: string) => void;
}

const QuestionsTable = ({ questions, getDifficultyColor, handleView, handleEdit, handleDelete }: Props) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text: string, record: Question) => (
        <Button type="link" onClick={() => handleView(record.id)} style={{ padding: 0 }}>
          {text}
        </Button>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category: string) => <Tag color="blue">{category}</Tag>,
    },
    {
      title: 'Difficulty',
      dataIndex: 'difficulty',
      key: 'difficulty',
      render: (difficulty: string) => (
        <Tag color={getDifficultyColor(difficulty)}>
          {difficulty.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Question) => (
        <Space>
          <Button icon={<EyeOutlined />} onClick={() => handleView(record.id)} title="View Details" />
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} title="Edit Question" />
          <Popconfirm
            title="Are you sure you want to delete this question?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger title="Delete Question" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={questions} rowKey="id" pagination={{ pageSize: 10 }} />;
};

export default QuestionsTable;
