import React from "react";

export function Button({ children, className = "", size = "md", ...props }) {
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
