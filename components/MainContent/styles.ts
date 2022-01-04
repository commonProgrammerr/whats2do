import styled from 'styled-components';

export const Container = styled.main`
display: flex;
padding: 24px 32px;
flex: 1;
`

export const FirstColumn = styled.section`
  width: 32vw;
  min-height: 100px;
  max-height: 600px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.background_lighter};
  margin-right: 12px;
  
`

export const SecondColumn = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`