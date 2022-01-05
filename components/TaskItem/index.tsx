import { FaRegCalendarAlt } from "react-icons/fa";
import { Container } from "./styles";

interface TaskItemProps {
  task: string;
  start: Date;
  end: Date;
}

function TaskItem({
  task,
  start,
  end
}: TaskItemProps) {
  return (
    <Container>
      <section>
        <div>{task}</div>
        <span>
          <FaRegCalendarAlt />
          {start.toLocaleDateString()} - {end.toLocaleDateString()}
        </span>
      </section>
      <span>
        <svg viewBox="0 0 8 13" width="8" height="13" className="">
          <path
            opacity=".13"
            d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
          ></path>
          <path
            fill="currentColor"
            d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
          ></path>
        </svg>
      </span>
    </Container>
  );
}

export default TaskItem;
