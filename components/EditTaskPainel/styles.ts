import styled from 'styled-components';

interface StyledProps {
  disabled?: boolean
}

export const Container = styled.div<StyledProps>`
  display: flex;
  flex-direction: inherit;
  align-items: center;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  gap: 13px;
  color: ${({ theme }) => theme.colors.primary_strongest};

  button {
    z-index: 400;
    border-radius: 100px;
    color: ${({ theme }) => theme.colors.icon.primary};
    font-size: 1.2rem;
    &:focus-within {
      background-color: ${({ theme }) => theme.colors.highlight};
    }
    
    &:not(:first-of-type) {
      svg {
        padding: .19rem;
      }
    }
  }

  &[disabled] {
    flex: none;
    display: none;
  }
`;
