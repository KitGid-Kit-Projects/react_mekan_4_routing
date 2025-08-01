import { useLocation } from 'react-router-dom';

export default function useAboutPage() {
  // Hook to get the current location info (e.g., pathname, state, etc.)
  const location = useLocation();

  // List of core technologies used in the project
  const technologies = [
    'React 18+',
    'React Router DOM v6+',
    'Ant Design',
    'TypeScript',
    'Vite',
    'Modern Hooks',
    'Functional Components',
  ];

  // Key routing features implemented in the app
  const routingFeatures = [
    'Static Routes (/about, /contact)', // Fixed path routes
    'Dynamic Routes (/questions/:id)', // Route with URL parameters
    'Nested Routes (/dashboard/profile)', // Routes within routes
    'Protected Routes (Dashboard)', // Routes requiring auth/permission
    'Route Parameters (useParams)', // Extracting dynamic params
    'Navigation (useNavigate)', // Programmatic route changes
    'Location State (useLocation)', // Sharing state between routes
  ];

  // Return values for use in the About page component
  return {
    location,
    technologies,
    routingFeatures,
  };
}
