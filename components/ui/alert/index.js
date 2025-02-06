import React from 'react'

export const Alert = ({ className, ...props }) => (
  <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${className}`} {...props} />
)

export const AlertTitle = ({ className, ...props }) => (
  <h5 className={`text-lg font-semibold text-blue-900 ${className}`} {...props} />
)

export const AlertDescription = ({ className, ...props }) => (
  <div className={`text-blue-800 mt-1 ${className}`} {...props} />
)