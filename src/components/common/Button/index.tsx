import React from 'react';
import { StyledButton } from './styled';

interface buttonProps {
  text: string;
  color?: string;
  disable?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
const ClasstingButtonL = (props: buttonProps) => {
  const { text, disable = false, onClick, type } = props;

  return (
    <StyledButton
      size={'large'}
      disable={disable}
      onClick={onClick}
      type={type}
    >
      {text}
    </StyledButton>
  );
};
const ClasstingButton = (props: buttonProps) => {
  const { text, color, disable, onClick, type } = props;

  return (
    <StyledButton disable={disable} onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export { ClasstingButtonL, ClasstingButton };
