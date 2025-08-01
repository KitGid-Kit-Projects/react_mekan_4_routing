
import { Card, Button,  message, Typography } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
const { Title, Paragraph } = Typography;
export default function useQuestionDetailPage(){
      const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock questions data (in a real app, this would come from state management or API)
  const questions = [
    {
      id: '1',
      title: 'What is React Router?',
      description: 'Explain the purpose and basic usage of React Router in single-page applications.',
      difficulty: 'easy',
      category: 'React',
      createdAt: '2024-01-15',
      fullContent: `React Router is a declarative routing library for React applications. It enables navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

Key features of React Router:
• Declarative routing
• Dynamic route matching
• Nested routing
• Lazy code splitting
• History management

React Router is essential for building single-page applications (SPAs) because it:
1. Enables navigation without page refreshes
2. Maintains browser history
3. Supports bookmarkable URLs
4. Provides a better user experience

Basic usage involves wrapping your app with BrowserRouter and defining routes using Routes and Route components.`,
    },
    {
      id: '2', 
      title: 'Implementing Nested Routes',
      description: 'How do you create nested routes using React Router v6+ and what is the role of the Outlet component?',
      difficulty: 'medium',
      category: 'React Router',
      createdAt: '2024-01-16',
      fullContent: `Nested routes in React Router v6+ allow you to create hierarchical URL structures that correspond to nested UI components.

The Outlet component is crucial for nested routing:
• It acts as a placeholder for child routes
• Renders the matching child component
• Enables shared layouts between parent and child routes

Example structure:
/dashboard (parent route with shared layout)
  /dashboard/profile (child route)
  /dashboard/settings (child route)

Implementation steps:
1. Define parent route with nested routes in your route configuration
2. Use <Outlet /> in parent component where child content should render
3. Create child components for each nested route
4. Navigate between nested routes using Link or NavLink

Benefits of nested routing:
• Shared layouts and navigation
• Better code organization
• Intuitive URL structure
• Improved user experience`,
    },
    {
      id: '3',
      title: 'useParams Hook Usage',
      description: 'Demonstrate how to use the useParams hook to access dynamic route parameters.',
      difficulty: 'easy',
      category: 'React Hooks',
      createdAt: '2024-01-17',
      fullContent: `The useParams hook is a React Router hook that returns an object containing the current route's dynamic parameters.

Syntax:
const params = useParams();
const { id, category } = useParams();

Use cases:
• Accessing route parameters like /users/:id
• Building dynamic content based on URL
• API calls using route parameters
• Conditional rendering based on params

Example route: /questions/:id
In component: const { id } = useParams();
This gives you access to the 'id' value from the URL.

Best practices:
1. Always check if parameters exist before using them
2. Use TypeScript for better type safety
3. Handle invalid parameter values gracefully
4. Consider using default values for optional parameters

The useParams hook makes it easy to create dynamic, data-driven routes in your React applications.`,
    },
    {
      id: '4',
      title: 'Protected Routes Implementation',
      description: 'Create a system for protecting routes that require authentication using React Router.',
      difficulty: 'hard',
      category: 'Authentication',
      createdAt: '2024-01-18',
      fullContent: `Protected routes (also called private routes) are routes that require user authentication to access. They're essential for securing sensitive areas of your application.

Implementation approaches:

1. Higher-Order Component (HOC) approach:
   Create a ProtectedRoute component that wraps protected content and checks authentication status.

2. Custom hook approach:
   Use useAuth hook to check authentication status and conditionally render content.

3. Route guard approach:
   Implement route-level guards that redirect unauthenticated users.

Key considerations:
• Redirect to login page when not authenticated
• Preserve intended destination after login
• Handle loading states during auth checks
• Implement role-based access control
• Secure both frontend and backend

Example implementation:
- Check authentication status
- Show loading spinner during verification
- Redirect to login if not authenticated
- Render protected content if authenticated

Security note: Frontend route protection is for UX only. Always implement proper authorization on your backend APIs.`,
    },
  ];

  const question = questions.find(q => q.id === id);

  if (!question) {
    return (
      <div style={{ padding: '24px' }}>
        <Card>
          <Title level={2}>Question Not Found</Title>
          <Paragraph>
            The question with ID "{id}" could not be found.
          </Paragraph>
          <Button type="primary" onClick={() => navigate('/questions')}>
            Back to Questions
          </Button>
        </Card>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'green';
      case 'medium': return 'orange';
      case 'hard': return 'red';
      default: return 'default';
    }
  };

  const handleEdit = () => {
    message.info('Edit functionality would open the edit modal here');
  };

  const handleDelete = () => {
    message.info('Delete functionality would show confirmation dialog here');
  };

  return{id,navigate,questions,question,getDifficultyColor,handleEdit,handleDelete }

}