import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  padding: 24px 32px;
  flex: 1;
  background-image: url("./wpp-bg-chat-tile-dark.png");
  background-size: 38%;
  
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
  flex-direction: column;
  gap: 12px;
  padding: 16px;
`