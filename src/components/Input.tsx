export const Input = ({
  type,
  name,
  value,
  className,
  onChange,
  placeholder,
  error,
}: {
  type: string;
  name: string;
  value: string;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void;
  placeholder: string;
  error?: string;
}) => {
  return (
    <div className="w-full">
      <div className={`relative ${className}`}>
        <input
          type={type}
          name={name}
          id={name}
          className={`block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-gray-100 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer ${
            error ? 'border-red-600 focus:border-red-600 ' : null
          }`}
          value={value}
          onChange={onChange}
          placeholder=" "
        />
        <label
          htmlFor={name}
          className={`absolute text-sm text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white bg-opacity-90 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 
          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
            error ? 'text-red-600 peer-focus:text-red-600' : null
          }`}
        >
          {placeholder}
        </label>
      </div>
      {error ? (
        <p id={name} className="mt-2 text-xs text-red-600 ">
          {error}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
