import { darken, lighten } from 'polished';
import styled from 'styled-components';

import theme from '../../styles/theme';

interface ButtonStyleProps {
  bgColor: keyof Omit<typeof theme.colors, 'app' | 'text' | 'icon'>
}

export const Container = styled.button<ButtonStyleProps>`
  display: flex;
  background-color: ${props => props.theme.colors[props.bgColor]};
  padding: 8px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition-delay: 0.06s;
  transition-duration: 0.16s;
  
  &:hover {
      cursor: pointer;
      background-color: ${props => lighten(0.1, props.theme.colors[props.bgColor])};
      transform: scale(1.1);
    }
`;
