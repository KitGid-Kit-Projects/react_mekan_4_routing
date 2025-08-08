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
            │   │       │       └── [Card] (# 'antd')
            │   │       │           └── [Row] (# 'antd')
            │   │       │               └── [Col] (# 'antd')
            │   │       │                   └── [Button] (# 'antd')
            │   │       │
            │   │       ├── [Route] path="/about" (# 'react-router-dom')
            │   │       │   └──≫ AboutPage (# './pages/AboutPage.tsx')
            │   │       │       └── [Card] (# 'antd')
            │   │       │           ├── [Tag] (# 'antd')
            │   │       │           └── [Row] (# 'antd')
            │   │       │               └── [Col] (# 'antd')
            │   │       │
            │   │       └── [Route] path="/login" (# 'react-router-dom')
            │   │           └──≫ LoginPage (# './pages/LoginPage.tsx')
            │   │               └── [Form] (# 'antd')
            │   │                   ├── [Input] (# 'antd')
            │   │                   └── [Button] (# 'antd')
            │   │
            │   └──≫ Navbar (# './pages/Navbar')
            │
            └── (Commented) [Route] path="*" (# 'react-router-dom')
                └──≫ NotFoundPage
