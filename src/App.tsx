// Import Ant Design's Layout component
import { Layout } from 'antd';

// Import React Query tools for managing server state
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import React Router tools for client-side routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

// Destructure the Content layout component from Ant Design's Layout
const { Content } = Layout;

// Create a QueryClient instance which will be used to configure React Query
const queryClient = new QueryClient();

// Main App component - wraps everything with context providers
const App = () => {
  console.log('App component rendering'); // Debug log

  return (
    // React Query provider: makes server state accessible throughout the app
    <QueryClientProvider client={queryClient}>
      {/* React Router provider: enables client-side routing */}
   
      <BrowserRouter>
        {/* All the visual content and routes are handled in this component */}
        <AppContent />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

// AppContent is where the actual layout and routing are defined
const AppContent = () => {
  console.log('AppContent component rendering'); // Debug log

  return (
    // Ant Design layout with full viewport height
    <Layout style={{ minHeight: '100vh' }}>
      {/* Main page content area */}
         <Navbar/>
      <Content>
        {/* Define all routes inside Routes */}
        <Routes>
          
            {/* You can define static routes like: */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
         
  {/* Dashboard with Nested Routes */}
          <Route path="/dashboard" element={<DashboardPage />}>
            {/* <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} /> */}
          </Route>
          {/* Catch-all route (404 page) - Add this last */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Content>
    </Layout>
  );
};

// Export the App component as the default export
export default App;
