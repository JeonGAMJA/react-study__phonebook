import React from 'react'

interface NavProps {
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>
  prevButtonText: string
  buttonText: string
  buttonType?: 'button' | 'submit' | 'reset' | undefined
}

const Nav = ({ onButtonClick, prevButtonText, buttonText, buttonType }: NavProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <button>{prevButtonText}</button>
      <button type={buttonType} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}

export default Nav
