import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, size, disabled, children }) => {
  const baseClasses = 'font-semibold rounded transition duration-300';
  const variants = {
    primary: 'bg-cyan-500 text-white hover:bg-cyan-600',
    ghost: 'bg-transparent text-cyan-500 hover:bg-cyan-100',
  };
  const sizes = {
    small: 'text-sm px-3 py-1',
    medium: 'text-md px-4 py-2',
    large: 'text-lg px-5 py-3',
  };

  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.medium;

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizeClasses}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};

export default Button;
