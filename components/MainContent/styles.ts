import { darken, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
display: flex;
padding: 24px 32px;
flex: 1;
`

export const FirstColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 25.6vw;
  min-width: 350px;
  min-height: 250px; 
  max-height: 30rem;
  border-radius: 6px;
  margin-right: 12px;
  padding: 1.4rem 1rem;
  background: ${({ theme }) => theme.colors.background_lighter};
  box-shadow: 0 1px 4px ${({theme}) => theme.colors.shadow}a0;
  
  & > form {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    & > div:last-of-type {
      flex: 1;
      min-height: 1px;
    }
  }


  input[type="submit"] {
    justify-self: flex-end;
    font-weight: 600;
    background-color: ${({theme}) => theme.colors.highlight};
    color: ${({theme}) => theme.colors.primary};
    border-radius: 3px;
    min-height: 32px;
    transition-delay: 0.07s;
    transition-duration: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: ${({theme}) => darken(0.1, theme.colors.highlight)};
      transform: scaleX(1.01) scaleY(1.1);
    }
  }
`

export const SecondColumn = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`