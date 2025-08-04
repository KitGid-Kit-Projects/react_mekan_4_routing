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
                │       └── useHomePage     // 🔹 Navigation logic and feature definitions
                │                           // 📦 File: ./src/hooks/homepage/useHomePage.tsx
                ├── Route path="/about"
                │   └── AboutPage
                │       └── useAboutPage    // 🔹 Provides logic/content for About
                │                           // 📦 File: ./src/hooks/aboutPage/useAboutPage.tsx
                ├── Route path="/contact"
                │   └── ContactPage
                │       └── useContactPage  // 🔹 Handles form state or contact logic
                │                           // 📦 File: ./src/hooks/contactPage/useContactPage.tsx
                ├── Route path="/login"
                │   └── LoginPage
                │       └── useLoginPage    // 🔹 Handles login logic, demo autofill, redirects
                │                           // 📦 File: ./src/hooks/loginPage/useLoginPage.tsx
                ├── Route path="/dashboard"
                │   └── DashboardPage
                │       ├── useDashBoard    // 🔹 Sidebar nav, state, overview logic
                │       │   ├── useLocation // 🔹 Reads current path and passed state
                │       │   └── useNavigate // 🔹 For sidebar menu navigation
                │       └── Outlet          // 🔹 Renders nested child routes
                │       ├── Route path="profile"
                │       │   └── ProfilePage
                │       │       └── useProfile // 🔹 Profile logic and state
                │       │                      // 📦 File: ./src/hooks/profilePage/useProfile.tsx
                │       └── Route path="settings"
                │           └── SettingsPage
                │               └── useSettings // 🔹 Settings logic and state
                │                               // 📦 File: ./src/hooks/settingsPage/useSettings.tsx
                ├── Route path="/questions"
                │   └── QuestionsPage
                │       └── useQuestionsPage   // 🔹 CRUD logic for questions
                │                              // 📦 File: ./src/hooks/questionsPage/useQuestionsPage.tsx
                └── Route path="*"
                    └── NotFound              // 🔹 404 fallback screen
                                            // 📦 File: ./src/pages/NotFound.tsx
