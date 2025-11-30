import React from "react";

function Input({
  placeholder,
  label,
  text,
  ...props
}: {
  placeholder?: string;
  label?: string;
  text?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="space-y-3">
      {label && (
        <label htmlFor="" className="font-bold">
          {label}
        </label>
      )}
      <input
        {...props}
        type="text"
        className=" px-4 py-2 w-full h-[35px] bg-primary rounded-md"
        placeholder={placeholder}
      />
      {text && <p className="my-1 text-xs text-gray-400">{text}</p>}
    </div>
  );
}

export default Input;
