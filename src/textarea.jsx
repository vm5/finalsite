import React from 'react';

export default function Textarea({ name, value, onChange, required, ...props }) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
}
