# Component Relation Diagram (CRD)

| No  | Tree                               | Code Line Count | Path                                                     |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
| 1   | App.tsx                            | 38              | src/App.tsx                                              |
| 2   | └── Navbar                         | 36              | src/components/Navbar.tsx                                |
| 3   |     └── (Outlet → Routed)          |                 |                                                          |
| 4   |         ├── HomePage               | 36              | src/pages/HomePage.tsx                                   |
| 5   |         │   └── useHomeFeatures    | 24              | src/hooks/Home/useHomeFeatures.tsx                       |
| 6   |         ├── AboutPage              | 56              | src/pages/AboutPage.tsx                                  |
| 7   |         │   └── useAboutData       | 32              | src/hooks/AboutPage/useAboutData.tsx                     |
| 16  |         ├── DashboardPage          | 36              | src/pages/DashboardPage.tsx                              |
| 17  |         │   ├── useDashboardData   | 32              | src/hooks/DashboardPage/useDashboardData.tsx             |
| 18  |         │   ├── DashboardOverview  | 74              | src/components/DashboardPage/DashboardOverview.tsx       |
| 19  |         │   └── DashboardSidebar   | 28              | src/components/DashboardPage/DashboardSidebar.tsx        |
| 20  |         ├── ProfilePage            | 38              | src/pages/ProfilePage.tsx                                |
| 21  |         │   ├── useProfileData     | 32              | src/hooks/ProfilePage/useProfileData.tsx                 |
| 22  |         │   ├── ProfileAbout       | 27              | src/components/ProfilePage/ProfileAbout.tsx              |
| 23  |         │   ├── ProfileForm        | 61              | src/components/ProfilePage/ProfileForm.tsx               |
| 24  |         │   ├── ProfileInfo        | 44              | src/components/ProfilePage/ProfileInfo.tsx               |
| 25  |         │   └── ProfileRouteInfo   | 27              | src/components/ProfilePage/ProfileRouteInfo.tsx          |
| 26  |         ├── SettingsPage           | 38              | src/pages/SettingsPage.tsx                               |
| 27  |         │   ├── useSettingsForm    | 32              | src/hooks/SettingsPage/useSettingsForm.tsx               |
| 28  |         │   ├── RouteInfo          | 61              | src/components/SettingsPage/RouteInfo.tsx                |
| 29  |         │   └── SettingsForm       | 77              | src/components/SettingsPage/SettingsForm.tsx             |
| 30  |         └── NotFound               | 22              | src/pages/NotFound.tsx                                   |
|-----|------------------------------------|-----------------|----------------------------------------------------------|
|     |         TOTAL CODE LINES           | 1092            |                                                          |
|-----|------------------------------------|-----------------|----------------------------------------------------------|