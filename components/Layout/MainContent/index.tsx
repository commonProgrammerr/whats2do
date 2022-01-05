import { Container, FirstColumn, SecondColumn } from "./styles";
import AddTaskForm from "../../AddTaskForm";
import TaskItem from "../../TaskItem";
import { useEffect, useState } from "react";
import { crud_api } from "../../../services/api";
import { useTasksList } from "../../../contexts/tasks-context";

type TaskDTO = {
  id: string;
  task_name: string;
  start_date: string;
  end_date: string;
  enable: boolean;
};

interface MainContentProps {}

function MainContent({}: MainContentProps) {
  const { tasks } = useTasksList();
  return (
    <Container>
      <FirstColumn>
        <AddTaskForm />
      </FirstColumn>
      <SecondColumn>
        {tasks.filter(task => task.enable).map((task) => (
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
