import React from 'react';

export function Button({ type = 'button', variant = 'default', className, children, ...props }) {
  const buttonStyles = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    ghost: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100',
  };

  return (
    <button
      type={type}
      className={`py-2 px-4 rounded transition-colors ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
