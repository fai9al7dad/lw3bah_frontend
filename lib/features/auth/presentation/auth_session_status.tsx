const AuthSessionStatus = ({
  status,
  className,
  ...props
}: {
  status: any;
  className: any;
  [x: string]: any;
}) => (
  <>
    {status && (
      <div
        className={`${className} font-medium text-sm text-green-600`}
        {...props}
      >
        {status}
      </div>
    )}
  </>
);

export default AuthSessionStatus;
