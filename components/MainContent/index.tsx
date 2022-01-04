import { ReactNode } from "react";

import { Container, FirstColumn, SecondColumn } from "./styles";

interface MainContentProps {}

function MainContent({}: MainContentProps) {
  return (
    <Container>
      <FirstColumn></FirstColumn>
      <SecondColumn>
        <div></div>
      </SecondColumn>
    </Container>
  );
}

export default MainContent;
