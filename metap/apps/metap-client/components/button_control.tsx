import {  FC } from "react";

interface ButtonControlProps {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
  className?: string;
  onClick?: () => void;
}
const ButtonControl: FC<ButtonControlProps> = ({
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={onClick}
      {...props}
      className={`font-medium text-xs text-center leading-tight uppercase rounded  focus:outline-none focus:ring-0 transition duration-150 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonControl;
