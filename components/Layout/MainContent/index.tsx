import TaskItem from "../../TaskItem";
import { Container, FirstColumn, SecondColumn } from "./styles";
import { TaskForm } from "../../TaskForm";
import { useTasksList } from "../../../contexts/tasks-context";
import { DateCheck } from "../DateCheck";

function MainContent() {
  const { tasks } = useTasksList();
  return (
    <Container>
      <FirstColumn>
        <DateCheck />
        <TaskForm />
      </FirstColumn>
      <SecondColumn>
        {tasks
          .filter((task) => task.enable)
          .map((task) => (
            <TaskItem
              id={task.id}
              isNew={task.isNew}
              key={task.id}
              task={task.task_name}
              end={new Date(task.end_date)}
              start={new Date(task.start_date)}
            />
          ))}
      </SecondColumn>
    </Container>
  );
}

export default MainContent;
