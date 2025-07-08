src/
├── assets/                    # Static files (icons, images, etc.)
├── components/                # Reusable UI components
│   ├── Chart.jsx              # Chart component (can wrap Chart.js or Recharts)
│   ├── Header.jsx             # Top header (profile, notifications, etc.)
│   ├── Sidebar.jsx            # Sidebar navigation
│   ├── StatCard.jsx           # Reusable card for metrics like "Users", "Revenue"
│   └── Dashboard.jsx          # Main content area with cards + charts
├── layouts/                   # Layout components
│   └── DashboardLayout.jsx    # Layout wrapper (Sidebar + Header + Content)
├── pages/                     # Full pages (optional if using routing)
│   └── Home.jsx               # Home page (dashboard view)
├── services/                  # API utilities (e.g., axios + MockAPI functions)
│   └── api.js                 # API config and functions
├── App.js                     # Main app component (routes + layout)
├── index.js                   # Entry point
└── styles/                    # Tailwind or custom CSS (optional)
    └── global.css
