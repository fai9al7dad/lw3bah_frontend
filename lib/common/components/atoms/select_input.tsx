import Select from "react-select";

export const SelectInput = ({
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
      <Select
        className="basic-single"
        classNamePrefix="select"
        required={required}
        onChange={onChange}
        options={options}
        isRtl={true}
        // isSearchable={isSearchable}
        {...props}
      />
    </div>
  );
};
