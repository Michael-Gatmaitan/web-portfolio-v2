import type { ButtonHTMLAttributes } from "react";

interface ButtonAttr extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: React.FC<ButtonAttr> = ({ text, ...rest }) => {
  const { className, ...attrWithoutClassName } = rest;

  return (
    <button
      className={`py-3 px-6 bg-pri hover:bg-blend-darken ${className}`}
      {...attrWithoutClassName}
    >
      {text}
    </button>
  );
};

export default Button;
