App.tsx (# File: ./App.tsx)
│ 🔹 Root application component
│
└── [QueryClientProvider] (# '@tanstack/react-query')
    └── [BrowserRouter] (# 'react-router-dom')
        └── AppContent (# Internal component in App.tsx)
            ├── [Layout] (# 'antd')
            │   ├── [Content] (# 'antd')
            │   │   └── [Routes] (# 'react-router-dom')
            │   │       ├── [Route] path="/" (# 'react-router-dom')
            │   │       │   └──≫ HomePage (# './pages/HomePage.tsx')
            │   │       │       ├── [Card] (# 'antd')
            │   │       │       ├── [Row] (# 'antd')
            │   │       │       └── [Col] (# 'antd')
            │   │       │
            │   │       ├── [Route] path="/about" (# 'react-router-dom')
            │   │       │   └──≫ AboutPage (# './pages/AboutPage.tsx')
            │   │       │       ├── [Card] (# 'antd')
            │   │       │       ├── [Tag] (# 'antd')
            │   │       │       └── [Row] (# 'antd')
            │   │       │
            │   │       ├── [Route] path="/contact" (# 'react-router-dom')
            │   │       │   └──≫ ContactPage (# './pages/ContactPage.tsx')
            │   │       │
            │   │       ├── [Route] path="/login" (# 'react-router-dom')
            │   │       │   └──≫ LoginPage (# './pages/LoginPage.tsx')
            │   │       │       ├── [Form] (# 'antd')
            │   │       │       ├── [Input] (# 'antd')
            │   │       │       └── [Button] (# 'antd')
            │   │       │
            │   │       └── [Route] path="/dashboard" (# 'react-router-dom')
            │   │           └──≫ DashboardPage (# './pages/DashboardPage.tsx')
            │   │               ├── [Layout] (# 'antd')
            │   │               │   ├── [Sider] (# 'antd')
            │   │               │   │   └── [Menu] (# 'antd')
            │   │               │   └── [Content] (# 'antd')
            │   │               │       └── [Outlet] (# 'react-router-dom')
            │   │               │           ├──≫ ProfilePage (# Commented in code)
            │   │               │           └──≫ SettingsPage (# Commented in code)
            │   │
            │   └──≫ Navbar (# './pages/Navbar')
            │
            └── (Commented) [Route] path="*" (# 'react-router-dom')
                └──≫ NotFoundPage
