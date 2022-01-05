import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TaskData, useTasksList } from "../../contexts/tasks-context";
import { EditTaskPainel } from "../EditTaskPainel";
import { Container } from "./styles";

interface TaskItemProps extends Pick<TaskData, "id" | "isNew"> {
  task: string;
  start: Date;
  end: Date;
}

function TaskItem({ id, task, start, end, isNew }: TaskItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tasks = useTasksList();

  function handleOpenTaskPainel() {
    setIsOpen((state) => !state);
  }

  return (
    <Container isNewTask={isNew} onClick={handleOpenTaskPainel}>
      <span>
        <svg viewBox="0 0 8 13" width="8" height="13">
          {isNew ? (
            <>
              <path
                opacity=".13"
                d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
              />
              <path
                fill="currentColor"
                d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
              />
            </>
          ) : (
            <>
              <path
                opacity=".13"
                fill="#0000000"
                d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
              />
              <path
                fill="currentColor"
                d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
              />
            </>
          )}
        </svg>
      </span>
      <section>
        <div>{task}</div>
        <span>
          <FaRegCalendarAlt />
          {start?.toLocaleDateString?.()} - {end?.toLocaleDateString?.()}
        </span>
      </section>
      <EditTaskPainel
        open={isOpen}
        onClickCheck={() => tasks.update({ id, enable: false })}
        onClickDelete={() => tasks.delete(id)}
        onClickEdit={console.log}
      />
    </Container>
  );
}

export default TaskItem;
