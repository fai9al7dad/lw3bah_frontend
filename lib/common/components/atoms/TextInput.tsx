import React from "react";

export function TextInput({
  name,
  placeholder,
  className,
  value,
  label,
  required = true,
  ...props
}: {
  name: string;
  placeholder?: string;
  className?: string;
  value: string;
  required: boolean;
  label: string;
}) {
  return (
    <div className="">
      <label htmlFor={name} className="mb-4 text-sm block ">
        <span className="mr-1">{required ? "*" : "(اختياري)"}</span>
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        className={`border-2 border-netural-300 py-3 px-2 text-sm rounded-lg block w-full ${className}`}
        {...props}
      />
    </div>
  );
}
