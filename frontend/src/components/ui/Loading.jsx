/**
 * Loading Component - Various loading states and skeletons
 * 
 * Purpose: Provides loading indicators and skeleton screens for better UX
 * 
 * Features to implement:
 * - Spinner component
 * - Skeleton loaders for different content types
 * - Full page loading overlay
 * - Button loading state
 * - Progress indicators
 * 
 * Usage Examples:
 * <Spinner size="sm" />
 * <Skeleton className="h-4 w-32" />
 * <LoadingOverlay isLoading={loading}>Content</LoadingOverlay>
 */

import { cn } from '../../utils'

// Basic spinner component
export const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  }
  
  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-gray-200 border-t-blue-600',
        sizes[size],
        className
      )}
    />
  )
}

// Skeleton loader for content placeholders
export const Skeleton = ({ className = '' }) => (
  <div
    className={cn(
      'animate-pulse rounded-md bg-gray-200',
      className
    )}
  />
)

// Loading overlay for containers
export const LoadingOverlay = ({ isLoading, children, className = '' }) => (
  <div className={cn('relative', className)}>
    {children}
    {isLoading && (
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
        <Spinner size="lg" />
      </div>
    )}
  </div>
)

// Text skeleton for multiple lines
export const TextSkeleton = ({ lines = 3, className = '' }) => (
  <div className={cn('space-y-2', className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton 
        key={i} 
        className={cn(
          'h-4',
          i === lines - 1 ? 'w-3/4' : 'w-full'
        )} 
      />
    ))}
  </div>
)

export default { Spinner, Skeleton, LoadingOverlay, TextSkeleton }
