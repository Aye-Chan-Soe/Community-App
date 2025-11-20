import React from "react";

function Input({
  placeholder,
  label,
}: {
  placeholder?: string;
  label?: string;
}) {
  return (
    <div className="space-y-3">
      {label && <label htmlFor="">{label}</label>}
      <input
        type="text"
        className=" px-4 py-2 w-full h-[35px] bg-primary rounded-md"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
