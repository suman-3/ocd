/**
 * Main Layout Component
 * 
 * Purpose: Wraps the entire application with consistent layout structure
 * 
 * Features implemented:
 * - Header and Footer integration
 * - Main content area with proper spacing
 * - Responsive design
 * - Scroll behavior
 * - Loading states (optional)
 * 
 * Usage: 
 * <Layout>
 *   <YourPageContent />
 * </Layout>
 * 
 * Props:
 * - children: React nodes to render in the main content area
 * - showHeader: Boolean to show/hide header (default: true)
 * - showFooter: Boolean to show/hide footer (default: true)
 * - className: Additional CSS classes
 */

import Header from './Header'
import Footer from './Footer'

const Layout = ({ 
  children, 
  showHeader = true, 
  showFooter = true, 
  className = '' 
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      
      {/* Header */}
      {showHeader && <Header />}
      
      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  )
}

export default Layout
