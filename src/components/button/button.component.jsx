import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import './button.scss';

const Button = ({ onClick, className, children }) => {
  const buttonClass = classNames(
    'button',
    {
      [className]: className,
    },
  );
  return (
    <button onClick={onClick} className={buttonClass} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
