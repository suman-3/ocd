/**
 * Button Component - Reusable button with consistent styling
 * 
 * Purpose: Provides a standardized button component with variants for different use cases
 * 
 * Features to implement:
 * - Multiple variants (primary, secondary, outline, ghost)
 * - Different sizes (sm, md, lg)
 * - Loading state with spinner
 * - Disabled state
 * - Icon support (left/right icons)
 * - Custom click handlers
 * 
 * Usage Examples:
 * <Button variant="primary" size="md" onClick={handleClick}>Click me</Button>
 * <Button variant="outline" size="sm" loading>Loading...</Button>
 */

import { cn } from '../../utils'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled = false,
  className = '',
  onClick,
  ...props 
}) => {
  
  
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  
  // Define variant styles
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50',
    ghost: 'hover:bg-gray-100'
  }
  
  // Define size styles
  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8 text-lg'
  }
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
          {/* Add spinner SVG here */}
        </svg>
      )}
      {children}
    </button>
  )
}

export default Button
