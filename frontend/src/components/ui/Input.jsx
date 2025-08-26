/**
 * Input Component - Reusable form input with validation
 * 
 * Purpose: Provides a standardized input component with built-in validation and error handling
 * 
 * Features to implement:
 * - Multiple input types (text, email, password, number, etc.)
 * - Label and placeholder support
 * - Error state and error message display
 * - Required field indicator
 * - Disabled state
 * - Icon support (prefix/suffix icons)
 * - Custom validation rules
 * - Form integration (React Hook Form, Formik, etc.)
 * 
 * Usage Examples:
 * <Input label="Email" type="email" required error={errors.email} />
 * <Input label="Password" type="password" placeholder="Enter password" />
 */

import { forwardRef } from 'react'
import { cn } from '../../utils'

const Input = forwardRef(({ 
  label,
  type = 'text',
  placeholder,
  error,
  required = false,
  disabled = false,
  className = '',
  id,
  ...props 
}, ref) => {
  
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={inputId}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        id={inputId}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          error && 'border-red-500 focus-visible:ring-red-500',
          className
        )}
        {...props}
      />
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
