# Component Relation Diagram (CRD) — Code Line Navigation Table

| No | Tree                               | Code Lines STEP 1 | Code Lines STEP 2 | Code Lines STEP 3 | Code Lines STEP 4 | Code Lines STEP 5 | Path                                                     |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|
| 01 | App.tsx                            | 38                | 38                | 38                | 38                | 38                | ./src/App.tsx                                            |
| 02 | └── Navbar                         | 36                | 36                | 36                | 36                | 36                | ./src/components/Navbar.tsx                              |
| 03 |     └── (Outlet → Routed)          |                   |                   |                   |                   |                   |                                                          |
| 04 |         ├── HomePage               | 36                | 36                | 36                | 36                | 36                | ./src/pages/HomePage.tsx                                 |
| 05 |         |   └── useHomeFeatures    | 24                | 24                | 24                | 24                | 24                | ./src/hooks/Home/useHomeFeatures.tsx                     |
| 06 |         ├── AboutPage              |                   | 56                | 56                | 56                | 56                | ./src/pages/AboutPage.tsx                                |
| 07 |         |   └── useAboutData       |                   | 32                | 32                | 32                | 32                | ./src/hooks/AboutPage/useAboutData.tsx                   |
| 08 |         ├── DashboardPage          |                   |                   | 36                | 36                | 36                | ./src/pages/DashboardPage.tsx                            |
| 09 |         |   ├── useDashboardData   |                   |                   | 32                | 32                | 32                | ./src/hooks/DashboardPage/useDashboardData.tsx           |
| 10 |         |   ├── DashboardOverview  |                   |                   | 74                | 74                | 74                | ./src/components/DashboardPage/DashboardOverview.tsx     |
| 11 |         |   └── DashboardSidebar   |                   |                   | 28                | 28                | 28                | ./src/components/DashboardPage/DashboardSidebar.tsx      |
| 12 |         └── ProfilePage            |                   |                   |                   | 38                | 38                | ./src/pages/ProfilePage.tsx                              |
| 13 |         |   ├── useProfileData     |                   |                   |                   | 32                | 32                | ./src/hooks/ProfilePage/useProfileData.tsx               |
| 14 |         |   ├── ProfileAbout       |                   |                   |                   | 27                | 27                | ./src/components/ProfilePage/ProfileAbout.tsx            |
| 15 |         |   ├── ProfileForm        |                   |                   |                   | 61                | 61                | ./src/components/ProfilePage/ProfileForm.tsx             |
| 16 |         |   ├── ProfileInfo        |                   |                   |                   | 44                | 44                | ./src/components/ProfilePage/ProfileInfo.tsx             |
| 17 |         |   └── ProfileRouteInfo   |                   |                   |                   | 27                | 27                | ./src/components/ProfilePage/ProfileRouteInfo.tsx        |
| 18 |         ├── SettingsPage           |                   |                   |                   |                   | 38                | ./src/pages/SettingsPage.tsx                             |
| 19 |         |   ├── useSettingsForm    |                   |                   |                   |                   | 32                | ./src/hooks/SettingsPage/useSettingsForm.tsx             |
| 20 |         |   ├── RouteInfo          |                   |                   |                   |                   | 61                | ./src/components/SettingsPage/RouteInfo.tsx              |
| 21 |         |   └── SettingsForm       |                   |                   |                   |                   | 77                | ./src/components/SettingsPage/SettingsForm.tsx           |
| 22 |         └── NotFound               |                   |                   |                   |                   | 22                | ./src/pages/NotFound.tsx                                 |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|
|    |             TOTAL CODE LINES       | 134               | 222               | 392               | 623               | 1091              |                                                          |
|----|------------------------------------|-------------------|-------------------|-------------------|-------------------|-------------------|----------------------------------------------------------|