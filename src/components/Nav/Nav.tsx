import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavProps {
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  prevButtonText: string;
  buttonText: string;
  buttonType?: 'button' | 'submit' | 'reset';
  handlePrevButton?: React.MouseEventHandler<HTMLButtonElement>;
}
const Nav = ({
  onButtonClick,
  prevButtonText,
  buttonText,
  buttonType,
  handlePrevButton,
}: NavProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button onClick={handlePrevButton}>{prevButtonText}</button>
      <button type={buttonType} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Nav;
