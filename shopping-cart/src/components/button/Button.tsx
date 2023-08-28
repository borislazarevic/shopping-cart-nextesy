interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className = "" }: ButtonProps) => {
  return <button className={`button ${className}`}>{children}</button>;
};
