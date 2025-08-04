App.tsx                                     // 🔹 Root file that exports the entire app tree
│                                           // 🔸 Combines data layer, UI theme, and routing
│                                           // 📦 File: ./App.tsx
└── QueryClientProvider                     // 🔹 Provides global React Query client
    │                                       // 🔸 Enables caching & async state mgmt
    │                                       // 📦 Imported from '@tanstack/react-query'
    └── BrowserRouter                       // 🔹 Enables navigation and routing
        │                                   // 🔸 Keeps UI in sync with URL (SPA behavior)
        │                                   // 📦 Imported from 'react-router-dom'
        └── Layout                          // 🔹 Ant Design layout component
            │                               // 🔸 Provides overall page structure
            │                               // 📦 Imported from 'antd'
            ├── Navbar                      // 🔹 Header bar with logo and navigation
            │   │                           // 📦 File: ./src/pages/Navbar.jsx
            │   └── useNavBar               // 🔹 Custom hook to generate menu items
            │                               // 📦 File: ./src/hooks/navbar/useNavBar.tsx
            │     
            │                               // 📦 Imported from 'react-router-dom'
            └── Routes                      // 🔹 Container for route declarations
                │                           // 📦 Imported from 'react-router-dom'
                ├── Route path="/"          
                │   └── AppLayout           // 🔹 Main layout: navigation, header, Outlet etc.
                │                           // 🔸 Placeholder for nested pages
                │                           // 📦 Imported from './components/Layout.tsx'
                └── Route path="*"
                    └── NotFound            // 🔹 Catch-all 404 fallback component
                                            // 🔸 Prevents blank screen on wrong URLs
                                            // 📦 Imported from './pages/NotFound.tsx'
