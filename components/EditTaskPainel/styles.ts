import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
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
      background-color: ${({ theme }) => darken(0.01, theme.colors.highlight)};
    }
    
  }
  .delete-button {
    svg {
      padding: .14rem;
    }
  }
  .edit-button {
    svg {
      padding: .1rem;
    }
    &:focus-within {
      color: ${({ theme }) => theme.colors.inverse};
    }
  }
  
  &[disabled] {
    flex: none;
    display: none;
  }
`;
