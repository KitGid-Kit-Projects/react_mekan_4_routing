App.tsx                                     // 🔹 Root file that exports the entire app tree
│                                           // 🔸 Combines data layer, UI theme, and routing
│                                           // 📦 File: ./App.tsx
└── QueryClientProvider                     // 🔹 Provides global React Query client
    │                                       // 🔸 Enables caching & async state mgmt
    │                                       // 📦 Imported from '@tanstack/react-query'
    └── BrowserRouter                       // 🔹 Enables navigation and routing
        │                                   // 🔸 Keeps UI in sync with URL (SPA behavior)
        │                                   // 📦 Imported from 'react-router-dom'
        └── Layout                          // 🔹 Ant Design layout container
            │                               // 🔸 Provides overall page structure
            │                               // 📦 Imported from 'antd'
            ├── Navbar                      // 🔹 Top header bar with logo and navigation menu
            │   │                           // 📦 File: ./src/pages/Navbar.jsx
            │   └── useNavBar               // 🔹 Generates dynamic menu items
            │       │                       // 📦 File: ./src/hooks/navbar/useNavBar.tsx
            │                               // 📦 Imported from 'react-router-dom'
            └── Content + Routes            // 🔹 Page container with route logic
                │                           // 📦 File: defined in AppContent
                ├── Route path="/"          
                │   └── HomePage            // 🔹 Welcome screen with feature cards
                │       │                   // 📦 File: ./src/pages/HomePage.tsx
                │       └── useHomePage     // 🔹 Navigation logic and feature definitions
                │                           // 📦 File: ./src/hooks/homepage/useHomePage.tsx
                ├── Route path="/about"
                │   └── AboutPage           // 🔹 Info about the app
                │       └── useAboutPage    // 🔹 Provides logic/content for About
                │                           // 📦 File: ./src/hooks/aboutPage/useAboutPage.tsx
                ├── Route path="/contact"
                │   └── ContactPage         // 🔹 Contact form or team info
                │       └── useContactPage  // 🔹 Handles form state or contact logic
                │                           // 📦 File: ./src/hooks/contactPage/useContactPage.tsx
                ├── Route path="/login"
                │   └── LoginPage           // 🔹 Login form with validation
                │       └── useLoginPage    // 🔹 Handles login logic, demo autofill, redirects
                │                           // 📦 File: ./src/hooks/loginPage/useLoginPage.tsx
                ├── Route path="/dashboard"
                │   └── DashboardPage       // 🔹 Authenticated dashboard layout with nested routing
                │       │                   // 📦 File: ./src/pages/DashboardPage.tsx
                │       ├── useDashBoard    // 🔹 Handles sidebar nav, route state, and overview
                │       │   │               // 📦 File: ./src/hooks/dashBoardPage/useDashBoard.tsx
                │       │   ├── useLocation // 🔹 Reads current path and passed state
                │       │   └── useNavigate // 🔹 For sidebar menu navigation
                │       └── Outlet          // 🔹 Renders nested child routes
                │                           // 📦 Imported from 'react-router-dom'
                │       ├── Route path="profile"
                │       │   └── ProfilePage // 🔹 User profile section
                │       │       └── useProfile   // 🔹 Profile data fetching or state logic
                │       │                       // 📦 File: ./src/hooks/profilePage/useProfile.tsx
                │       └── Route path="settings"
                │           └── SettingsPage// 🔹 App or account settings
                │               └── useSettings  // 🔹 Settings logic and state handlers
                │                               // 📦 File: ./src/hooks/settingsPage/useSettings.tsx
                └── Route path="*"
                    └── NotFound            // 🔹 404 fallback screen
                                            // 📦 File: ./src/pages/NotFound.tsx
