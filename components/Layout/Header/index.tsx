import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { Container } from "./styles";

interface HeaderProps {
  children: ReactNode;
}

function Header() {
  const git_url = 'https://github.com/commonProgrammerr/whats2do'
  return (
    <Container>
      <h1>What'sToDo</h1>
      <a href={git_url} className="git-container" >
        <FaGithub />
      </a>
    </Container>
  );
}

export default Header;
