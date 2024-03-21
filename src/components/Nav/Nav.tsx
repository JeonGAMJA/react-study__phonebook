import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavProps {
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  prevButtonText: string;
  buttonText: string;
  buttonType?: 'button' | 'submit' | 'reset';
  mode: string;
  id?: string;
}
const Nav = ({
  onButtonClick,
  prevButtonText,
  buttonText,
  buttonType,
  mode,
  id,
}: NavProps) => {
  const navigate = useNavigate();

  const handlePrevButton = () => {
    if (mode === 'edit') {
      navigate(`/${id}`);
      mode = '';
    } else {
      navigate(`/`);
      mode = '';
    }
  };
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
