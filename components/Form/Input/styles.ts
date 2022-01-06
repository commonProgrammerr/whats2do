import styled, { css } from 'styled-components';

export const Input = styled.input`
  font-size: .95rem;
  color: ${({ theme }) => theme.colors.text.secondary_lighter};
  word-break: break-all;
  ::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
  }
  background-color: transparent;
`;


export const Container = styled.div<{ label: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #33383b;
  padding: 6px 16px;
  padding-top: 3px;
  border-radius: 6px; 
  margin-bottom: 18px;
  transition-delay: 0.1s;
  transition-duration: 0.4s;
  & > div {
    display: flex;
    justify-content: space-between;
  }
  &:focus-within {
    box-shadow: 0 0 1px .8px ${({ theme }) => theme.colors.highlight};
    margin-top: 10px;
    
    ${props => props.label && css`
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
    `}

  }
`;

export const Error = styled.small`
  font-size: .7rem;
  color: ${({ theme }) => theme.colors.danger};
  `;

export const Label = styled.label`
  font-size: .7rem;
  color: ${({ theme }) => theme.colors.text.primary_strong};
  margin-left: -3.5px;
  margin-bottom: 2.5px;

`