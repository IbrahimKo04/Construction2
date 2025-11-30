import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  to,
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-bold uppercase tracking-wide rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group";
  
  const variants = {
    primary: "text-white bg-gradient-to-r from-primary to-primary-dark hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] border border-transparent",
    outline: "text-primary border-2 border-primary bg-transparent hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  const Content = () => (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        <Content />
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      <Content />
    </button>
  );
};

export default Button;