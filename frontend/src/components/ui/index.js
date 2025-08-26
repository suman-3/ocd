/**
 * UI Components Barrel Export
 * 
 * Purpose: Centralizes all UI component exports for easier imports
 * 
 * Usage: import { Button, Input, Card } from '../components/ui'
 * 
 * Benefits:
 * - Cleaner import statements
 * - Single source of truth for UI components
 * - Easier refactoring and component management
 */

// Form components
export { default as Button } from './Button'
export { default as Input } from './Input'

// Layout components
export { default as Card } from './Card'

// Feedback components
export { Spinner, Skeleton, LoadingOverlay, TextSkeleton } from './Loading'

// TODO: Add more UI components as they are created
// export { default as Modal } from './Modal'
// export { default as Dropdown } from './Dropdown'
// export { default as Tabs } from './Tabs'
// export { default as Badge } from './Badge'
// export { default as Avatar } from './Avatar'
// export { default as Tooltip } from './Tooltip'
// export { default as Alert } from './Alert'
