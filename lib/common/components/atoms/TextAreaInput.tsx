import React from "react";

export function TextAreaInput({
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
    <div>
      <label htmlFor={name} className="mb-4 text-sm block">
        <span className="mr-1">{required ? "*" : "(اختياري)"}</span>

        {label}
      </label>
      <div className="relative">
        <textarea
          name={name}
          placeholder={placeholder}
          {...props}
          value={value}
          required={required}
          className={`border-2 border-netural-300 py-3 px-2 text-sm rounded-lg block resize-none w-full ${className}`}
        ></textarea>
        <div className="absolute text-xs text-opacity-50 bottom-1 left-1">
          0/255
        </div>
      </div>
    </div>
  );
}
