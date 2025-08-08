App.tsx (# File: ./App.tsx)
│ 🔹 Root application component
│
└── [QueryClientProvider] (# '@tanstack/react-query')
    └── [BrowserRouter] (# 'react-router-dom')
        └── AppContent (# Internal component in App.tsx)
            ├── [Layout] (# 'antd')
            │   └── [Content] (# 'antd')
            │       └── [Routes] (# 'react-router-dom')
            │           └── [Route] path="*" (# 'react-router-dom')
            │               └──≫ NotFoundPage (# Commented in code)
            │
            └──≫ Navbar (# './pages/Navbar')