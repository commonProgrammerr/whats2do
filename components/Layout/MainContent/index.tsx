import { Container, FirstColumn, SecondColumn } from "./styles";
import AddTaskForm from "../../AddTaskForm";
import TaskItem from "../../TaskItem";

interface MainContentProps {}

function MainContent({}: MainContentProps) {
  return (
    <Container>
      <FirstColumn>
        <AddTaskForm />
      </FirstColumn>
      <SecondColumn>
        <TaskItem
          task="teste"
          end={new Date()}
          start={new Date("12/12/2022")}
        />
      </SecondColumn>
    </Container>
  );
}

export default MainContent;
