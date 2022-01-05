import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;
  box-shadow: 0 1px 0.5px ${({ theme }) => theme.colors.shadow}0d;
  color: ${({ theme }) => theme.colors.text.primary_strong}f0;
  
  & > span {
    margin-top: -5px;
    color: ${({ theme }) => theme.colors.background_high_emphasis};
  }

  & > section{
    display: flex;
    flex-direction: column;
    flex: none;
    max-width: 80%;
    min-width: 20%;
    background-color: ${({ theme }) => theme.colors.background_high_emphasis};
    padding: 6px 7px 8px 9px;
    border-radius: 7.5px;
    border-top-right-radius: 0;
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
      font-size: 0.8875rem;
      line-height: 1.1875rem;
      word-break: break-all;
    }
  }

`;
