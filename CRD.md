# Component Relation Diagram (CRD)

| No  | Tree                               | Code Line Count | Path                                                     |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
| 1   | App.tsx                            | 38              | ./src/App.tsx                                            |
| 2   | └── Navbar                         | 36              | ./src/components/Navbar.tsx                              |
| 3   |     └── (Outlet → Routed)          |                 |                                                          |
| 4   |         ├── HomePage               | 36              | ./src/pages/HomePage.tsx                                 |
| 5   |         │   └── useHomeFeatures    | 24              | ./src/hooks/Home/useHomeFeatures.tsx                     |
| 6   |         ├── AboutPage              | 56              | ./src/pages/AboutPage.tsx                                |
| 7   |         │   └── useAboutData       | 32              | ./src/hooks/AboutPage/useAboutData.tsx                   |
| 8   |         └── DashboardPage          | 36              | ./src/pages/DashboardPage.tsx                            |
| 9   |             ├── useDashboardData   | 32              | ./src/hooks/DashboardPage/useDashboardData.tsx           |
| 10  |             ├── DashboardOverview  | 74              | ./src/components/DashboardPage/DashboardOverview.tsx     |
| 11  |             └── DashboardSidebar   | 28              | ./src/components/DashboardPage/DashboardSidebar.tsx      |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
|     |                 TOTAL CODE LINES   | 392             |                                                          |
|-----|------------------------------------|-----------------|----------------------------------------------------------|