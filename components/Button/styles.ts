import styled from 'styled-components';

import theme from '../../styles/theme';

interface ButtonStyleProps {
  bgColor: keyof Omit<typeof theme.colors, 'app' | 'text' | 'icon'>
}

export const Container = styled.button<ButtonStyleProps>`
  background-color: ${props => props.theme.colors[props.bgColor]};
  padding: 16px 32px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 160px;
`;
