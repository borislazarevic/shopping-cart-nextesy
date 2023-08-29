type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};
