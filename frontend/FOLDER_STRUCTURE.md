# Professional React + Vite + Tailwind├── constants/               # Application constants
├── styles/                  # Global styles and Tailwind customizations
└── assets/                  # Images, icons, fonts Folder Structure



## Root Structure

```
frontend/
├── public/                     # Static assets served directly
├── src/                        # Source code
├── tests/                      # Test files
├── docs/                       # Documentation
├── .env.example               # Environment variables template
├── .gitignore                 # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # Main HTML template
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Project documentation
├── tailwind.config.js        # Tailwind CSS configuration
└── vite.config.js            # Vite configuration
```

## Detailed Src Structure

```
src/
├── components/               # Reusable UI components
│   ├── ui/                  # Basic UI components (buttons, inputs, etc.)
│   ├── layout/              # Layout components (header, footer, sidebar)
│   ├── common/              # Common components used across features
│   └── forms/               # Form-specific components
├── pages/                   # Page components (route components)
├── features/                # Feature-based modules
├── hooks/                   # Custom React hooks
├── services/                # API calls and external services
├── store/                   # State management (Redux, Zustand, etc.)
├── utils/                   # Utility functions and helpers
├── constants/               # Application constants
├── styles/                  # Global styles and Tailwind customizations
├── assets/                  # Images, icons, fonts
├── App.jsx                  # Main App component
├── main.jsx                 # Application entry point
└── index.css               # Global CSS imports
```

## Component Organization Guidelines

### UI Components (/src/components/ui/)
- Button.jsx - Reusable button component
- Input.jsx - Form input component
- Modal.jsx - Modal/dialog component
- Card.jsx - Card container component
- Loading.jsx - Loading spinner/skeleton components

### Layout Components (/src/components/layout/)
- Header.jsx - Application header
- Footer.jsx - Application footer
- Sidebar.jsx - Navigation sidebar
- Layout.jsx - Main layout wrapper

### Feature-Based Organization (/src/features/)
Each feature should have its own folder containing:
- components/ - Feature-specific components
- hooks/ - Feature-specific hooks
- services/ - Feature-specific API calls
- index.js - Feature exports

Example feature structure:
```
features/
├── auth/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   └── SignupForm.jsx
│   ├── hooks/
│   │   └── useAuth.js
│   ├── services/
│   │   └── authAPI.js
│   └── index.js
└── dashboard/
    ├── components/
    ├── hooks/
    └── services/
```


