import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  padding: 10px 14px;
  height: 3.5rem;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.header_background};
  color: ${({theme}) => theme.colors.text.primary_strong};
  box-shadow: 0 1px 3px ${({theme}) => theme.colors.shadow};
  
  h1 {
    font-size: 1.5rem;
    letter-spacing: 0.16rem;
    color: ${({theme}) => theme.colors.text.high_emphasis};
  }
  
  .git-container {
    display: flex;
    align-items: center;
    font-size: 2rem;
    padding-right: 16px;
    color: ${({theme}) => theme.colors.icon.header};
  }
`;
