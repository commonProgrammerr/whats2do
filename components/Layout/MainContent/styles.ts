import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  padding: 24px 32px;
  padding-bottom: 8px;
  padding-right: 8px;
  width: 1fr;
  background-image: url("./wpp-bg-chat-tile-dark.png");
  background-size: 38%;
  height: calc(100vh - 3.5rem);  
`

export const FirstColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 25.6vw;
  min-width: 350px;
  margin-right: 12px;
`

export const SecondColumn = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  padding: 16px;
  padding-right: 32px;
  overflow-y: auto;
`