import React from "react";

export function TextInput({
  name,
  className,
  label,
  required = true,
  ...props
}: {
  placeholder?: string;
  className?: string;
  required?: boolean;
  label?: string;
  [key: string]: any;
}) {
  return (
    <div className="">
      {label != null && (
        <label htmlFor={name} className="mb-4 text-sm block text-right">
          {label}
          <span className="mr-1">{required ? "*" : "(اختياري)"}</span>
        </label>
      )}
      <input
        type="text"
        name={name}
        required={required}
        className={`border-2 border-netural-300 py-3 px-2 text-sm rounded-lg block w-full ${className}`}
        {...props}
      />
    </div>
  );
}
