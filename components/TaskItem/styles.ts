import styled, { css } from 'styled-components';

interface StyleProps {
  isNewTask?: boolean
}

export const Container = styled.div<StyleProps>`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 1px 0.5px ${({ theme }) => theme.colors.shadow}0d;
  color: ${({ theme }) => theme.colors.text.primary_strong}f0;
  padding: 10px;
  padding-left: 0;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.colors.highlight}16;
  }

  & > span {
    margin-top: -5px;
    color: ${({ theme }) => theme.colors.background_overlay};
  }
  
  & > section{
    display: flex;
    flex-direction: column;
    flex: none;
    max-width: 80%;
    min-width: 40%;
    background-color: ${({ theme }) => theme.colors.background_overlay};
    padding: 6px 7px 8px 9px;
    border-radius: 7.5px;
    border-top-left-radius: 0;
    z-index: 200;
    
    & > span {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: .6875rem;
      padding-right: 4px;
      margin-bottom: -5px;
      color: rgba(241,241,242,0.63);
      
      svg {
        margin-right: 3px;
        margin-top: -2px;
      }
    }
    
    & > div {
      font-size: .8875rem;
      line-height: 1.1875rem;
      word-break: break-all;
    }
    
  }
  
  ${(props) => props.isNewTask && css`
    flex-direction: row-reverse;
    padding-left: 10px;
    padding-right: 0;
    & > span {
      color: ${({ theme }) => theme.colors.background_high_emphasis};
    }
    & > section {
      border-top-left-radius: 7.5px;
      border-top-right-radius: 0;
      background-color: ${({ theme }) => theme.colors.background_high_emphasis};
    }
  `}
  `;
