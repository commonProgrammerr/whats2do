import styled from "styled-components";
import Header from "../components/Layout/Header";
import MainContent from "../components/Layout/MainContent";

export default function Home() {
  return (
    <Container>
      <Header />
      <MainContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
