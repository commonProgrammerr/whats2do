import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  
  width: 25.6vw;
  min-width: 350px;

  border-radius: 6px;
  background: ${({ theme }) => theme.colors.background_lighter};
  box-shadow: 0 1px 4px ${({ theme }) => theme.colors.shadow}a0;
  margin-bottom: 16px;
  padding: 14px;
  & > div {
    margin: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    flex: 1;
  }
  
  & > button {
    
    color: ${({ theme }) => theme.colors.text.primary_strong};
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    &:hover {
      background: ${({ theme }) => theme.colors.highlight};
      transform: none;
    }
  }

  &:focus-within {
    & > div {

      box-shadow: 0 0 1px .8px ${({ theme }) => theme.colors.highlight};
      margin-top: 10px;
      
      input {
        transform: translateY(-35%);
      }
      & > div {
        transform: translateY(-100%);
        & > label {
          font-size: .8rem;
          margin-bottom: 3.5px;
          transform: translateX(-10%);
          font-weight: 600;
          color: ${({ theme }) => theme.colors.text.high_emphasis};
        }
        & > small {
          transform: translateY(100%);
        }
      }
      
    }
    button {
      flex: 1;
      margin-top: 10px;
      box-shadow: 0 0 1px .8px ${({ theme }) => theme.colors.highlight};
    }
  }
`;
