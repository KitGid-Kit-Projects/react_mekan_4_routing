export const useAboutData = () => {
  const technologies = [
    'React 18+',
    'React Router DOM v6+',
    'Ant Design',
    'TypeScript',
    'Vite',
    'Modern Hooks',
    'Functional Components',
  ];

  const routingFeatures = [
    'Static Routes (/about, /contact)',
    'Dynamic Routes (/questions/:id)',
    'Nested Routes (/dashboard/profile)',
    'Protected Routes (Dashboard)',
    'Route Parameters (useParams)',
    'Navigation (useNavigate)',
    'Location State (useLocation)',
  ];

  const learningObjectives = [
    'How to set up React Router DOM v6+ with modern syntax',
    'Implementing nested routes with Outlet components',
    'Using React Router hooks (useNavigate, useParams, useLocation)',
    'Building CRUD operations with local state management',
    'Creating protected routes and navigation guards',
    'Integrating Ant Design with React Router for beautiful UIs',
  ];

  return { technologies, routingFeatures, learningObjectives };
};
