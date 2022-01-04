import React, { ReactNode } from 'react';
import theme from '../../styles/theme';



import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  bgColor: keyof Omit<typeof theme.colors, 'app' | 'text' | 'icon'>
}

function Button({ children, bgColor, ...rest }: ButtonProps) {
  return (
    <Container bgColor={bgColor} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
