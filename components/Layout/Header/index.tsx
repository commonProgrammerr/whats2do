import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { Container } from "./styles";

interface HeaderProps {
  children: ReactNode;
}

function Header() {
  const git_url = process.env.GITHUB_REPO_URL
  return (
    <Container>
      <h1>To-do List</h1>
      <a href={git_url} className="git-container" >
        <FaGithub />
      </a>
    </Container>
  );
}

export default Header;
