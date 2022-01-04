import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  padding: 3px 14px;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.header_background};
  color: ${({theme}) => theme.colors.text.primary_strong};
  
  h1 {
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.text.high_emphasis};
  }
  
  .git-container {
    display: flex;
    align-items: center;
    font-size: 2rem;
    padding-right: 16px;
    color: ${({theme}) => theme.colors.text.primary_strong};
  }
`;
