# React + Vite + Tailwind CSS - Professional Project Structure

This project demonstrates a professional folder structure for React applications using Vite and Tailwind CSS.

## 🚀 Features

- **Modern Development Stack**: React 18, Vite, Tailwind CSS
- **Professional Architecture**: Feature-based folder structure
- **Component Library**: Reusable UI components with consistent styling
- **Service Layer**: Centralized API management
- **Type Safety**: Ready for TypeScript integration (optional)
- **Performance Optimized**: Tree-shaking, code splitting, and modern bundling

## 📁 Project Structure

```
frontend/
├── public/                     # Static assets
├── src/                        # Source code
│   ├── components/            # Reusable components
│   │   ├── ui/               # Basic UI components
│   │   ├── layout/           # Layout components
│   │   ├── common/           # Common components
│   │   └── forms/            # Form components
│   ├── pages/                # Page components
│   ├── features/             # Feature-based modules
│   │   └── auth/            # Authentication feature
│   │       ├── components/  # Feature-specific components
│   │       ├── hooks/       # Feature-specific hooks
│   │       └── index.js     # Feature exports
│   ├── hooks/                # Custom React hooks
│   ├── services/             # API services
│   ├── store/                # State management
│   ├── utils/                # Utility functions
│   ├── constants/            # Application constants
│   ├── styles/               # Global styles
│   └── assets/               # Images, icons, fonts
├── docs/                      # Documentation
├── tests/                     # Test files
└── FOLDER_STRUCTURE.md       # This documentation
```

## 🧩 Component Architecture

### UI Components (`/src/components/ui/`)
- **Button.jsx** - Reusable button with variants
- **Input.jsx** - Form input with validation
- **Card.jsx** - Container component with sections
- **Loading.jsx** - Loading states and skeletons

### Layout Components (`/src/components/layout/`)
- **Header.jsx** - Application header
- **Footer.jsx** - Application footer
- **Layout.jsx** - Main layout wrapper

### Pages (`/src/pages/`)
- **HomePage.jsx** - Landing page
- **AboutPage.jsx** - About page

### Features (`/src/features/`)
Feature-based organization where each feature contains:
- `components/` - Feature-specific components
- `hooks/` - Feature-specific hooks
- `services/` - Feature-specific API calls
- `types/` - Feature-specific types

## 🛠 Development Guidelines

### File Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile.jsx`)
- **Hooks**: camelCase starting with 'use' (e.g., `useAuth.js`)
- **Utilities**: camelCase (e.g., `formatDate.js`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS`)

### Import Organization
```javascript
// 1. External libraries
import React from 'react'
import { useState } from 'react'

// 2. Internal components
import { Button, Input } from '../components/ui'
import { Layout } from '../components/layout'

// 3. Services and utilities
import { authAPI } from '../services'
import { formatDate } from '../utils'

// 4. Constants and types
import { ROUTES } from '../constants'
```

### Component Structure Template
```javascript
/**
 * Component Name - Brief description
 * 
 * Purpose: What this component does
 * 
 * Features:
 * - Feature 1
 * - Feature 2
 * 
 * Usage: <ComponentName prop={value} />
 */

import { useState } from 'react'
import { Button } from '../ui'

const ComponentName = ({ prop1, prop2, ...props }) => {
  const [state, setState] = useState()
  
  const handleAction = () => {
    // Handle action
  }
  
  return (
    <div className="component-styles">
      {/* Component JSX */}
    </div>
  )
}

export default ComponentName
```

## 🎨 Styling Guidelines

### Tailwind CSS Usage
- Use utility classes for most styling
- Create custom classes in `globals.css` for complex patterns
- Use consistent spacing and color schemes
- Follow responsive design principles

### Custom Styles
Located in `/src/styles/globals.css`:
- Custom utility classes
- Animation keyframes
- Global overrides
- Print styles

## 🔧 Services & API

### API Client (`/src/services/api.js`)
- Centralized HTTP client configuration
- Request/response interceptors
- Error handling
- Authentication token management

### Service Organization
```javascript
// Auth service example
export const authAPI = {
  login: (credentials) => apiClient.post('/auth/login', credentials),
  logout: () => apiClient.post('/auth/logout'),
  register: (userData) => apiClient.post('/auth/register', userData)
}
```

## 📦 State Management

Ready for various state management solutions:
- **React Context** - For simple global state
- **Redux Toolkit** - For complex state management
- **Zustand** - For lightweight state management
- **React Query** - For server state management

## 🧪 Testing Strategy

Recommended testing structure:
```
tests/
├── components/           # Component tests
├── hooks/               # Custom hook tests
├── services/            # API service tests
├── utils/               # Utility function tests
└── e2e/                 # End-to-end tests
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Adding New Features

1. Create feature directory in `/src/features/`
2. Add feature-specific components, hooks, and services
3. Export feature functionality in `index.js`
4. Import and use in other parts of the application

Example:
```javascript
// src/features/dashboard/index.js
export { default as DashboardPage } from './components/DashboardPage'
export { default as useDashboard } from './hooks/useDashboard'

// Usage in App.jsx
import { DashboardPage } from './features/dashboard'
```

## 🔒 Environment Variables

Create `.env.local` file:
```
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=Your App Name
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Component Design Patterns](https://react.dev/learn/thinking-in-react)

---

This structure provides a solid foundation for building scalable React applications with modern development practices.
