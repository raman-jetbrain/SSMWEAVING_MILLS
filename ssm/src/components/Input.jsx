import React from 'react';

const Input = () => {
  return (
    <div className="relative w-[200px]">
      <input
        id="name"
        required
        type="text"
        placeholder="Name"
        className="peer block w-full border-0 border-b border-gray-600 bg-transparent px-1.5 pb-2 pt-4 text-base text-slate-800 placeholder:text-transparent outline-none transition-colors duration-200 focus:border-blue-600 valid:border-blue-600"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5">
        <span className="absolute left-1/2 h-full w-0 bg-blue-600 transition-all duration-200 peer-focus:left-0 peer-focus:w-1/2 peer-valid:left-0 peer-valid:w-1/2" />
        <span className="absolute right-1/2 h-full w-0 bg-blue-600 transition-all duration-200 peer-focus:right-0 peer-focus:w-1/2 peer-valid:right-0 peer-valid:w-1/2" />
      </div>

      <label
        htmlFor="name"
        className="pointer-events-none absolute left-1.5 top-3 flex origin-left text-base text-gray-500 transition-all duration-200 peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-blue-600 peer-valid:-translate-y-5 peer-valid:text-xs peer-valid:text-blue-600"
      >
        Name
      </label>
    </div>
  );
};

export default Input;
