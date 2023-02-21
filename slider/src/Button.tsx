import React, { ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
}) => {
  return (
    <button
      className={`${variant === "primary" ? "bg-blue-500" : "bg-gray-500"}
                   ${
                     size === "small"
                       ? "text-sm"
                       : size === "large"
                       ? "text-lg"
                       : "text-base"
                   }
                   px-4 py-2 rounded-md text-white hover:bg-blue-600 focus:bg-blue-600`}
    >
      {children}
    </button>
  );
};

export default Button;
