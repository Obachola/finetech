import React from 'react';

const Button = ({ variant, children, onClick }) => {
  const variantClass = `btn ${variant ? `btn-${variant}` : 'btn-primary'}`;

  return (
    <button className={variantClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
