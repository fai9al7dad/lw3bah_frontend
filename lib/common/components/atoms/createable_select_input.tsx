import Creatable, { useCreatable } from "react-select/creatable";

export const CreateAbleSelectInput = ({
  options,
  onChange,
  name,
  className,
  label,
  required = true,
  ...props
}: {
  options: any;
  onChange: any;
  name: string;
  className?: string;
  label: string;
  required?: boolean;
  [x: string]: any;
}) => {
  return (
    <div className={`${className}`}>
      <label htmlFor={name} className="mb-4 text-sm block text-right">
        {label}
        <span className="mr-1">{required ? "*" : "(اختياري)"}</span>
      </label>
      <Creatable
        required={required}
        formatCreateLabel={(inputValue: any) => `إنشاء "${inputValue}"`}
        {...props}
        onChange={onChange}
        options={options}
      />
    </div>
  );
};
