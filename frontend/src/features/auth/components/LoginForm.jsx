/**
 * Login Form Component
 * 
 * Purpose: User login form with validation and error handling
 * 
 * Features:
 * - Email and password validation
 * - Loading states
 * - Error message display
 * - Remember me functionality
 * - Forgot password link
 * - Form submission handling
 * 
 * Usage: <LoginForm onSuccess={handleLoginSuccess} />
 */

import { useState } from 'react'
import { Button, Input } from '../../../components/ui'
import { authAPI } from '../../../services'
import { VALIDATION } from '../../../constants'

const LoginForm = ({ onSuccess, onError }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  // Validate form
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = VALIDATION.MESSAGES.REQUIRED
    } else if (!VALIDATION.EMAIL_REGEX.test(formData.email)) {
      newErrors.email = VALIDATION.MESSAGES.INVALID_EMAIL
    }
    
    if (!formData.password) {
      newErrors.password = VALIDATION.MESSAGES.REQUIRED
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setLoading(true)
    
    try {
      const response = await authAPI.login({
        email: formData.email,
        password: formData.password
      })
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess(response)
      }
      
    } catch (error) {
      const errorMessage = error.message || 'Login failed. Please try again.'
      setErrors({ submit: errorMessage })
      
      // Call error callback if provided
      if (onError) {
        onError(error)
      }
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
        <p className="text-gray-600 mt-2">Welcome back! Please sign in to your account.</p>
      </div>
      
      {/* Email Input */}
      <Input
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        placeholder="Enter your email"
        required
      />
      
      {/* Password Input */}
      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        placeholder="Enter your password"
        required
      />
      
      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        
        <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
          Forgot password?
        </a>
      </div>
      
      {/* Submit Error */}
      {errors.submit && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{errors.submit}</p>
        </div>
      )}
      
      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full"
        size="lg"
        loading={loading}
        disabled={loading}
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </Button>
      
      {/* Sign Up Link */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
            Sign up here
          </a>
        </p>
      </div>
    </form>
  )
}

export default LoginForm
