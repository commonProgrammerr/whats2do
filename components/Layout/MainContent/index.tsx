import TaskItem from "../../TaskItem";
import { Container, FirstColumn, SecondColumn } from "./styles";
import { TaskForm } from "../../TaskForm";
import { TaskData, useTasksList } from "../../../contexts/tasks-context";
import { DateCheck } from "../DateCheck";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function MainContent() {
  const [hasNext, setHasNext] = useState(true);
  const { tasks, insert, reset } = useTasksList();
  const [page, setPage] = useState(0);

  const valid_tasks = tasks.filter((task) => task.enable);
  const loaderRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    if (page < 1) {
      (async () => {
        const { data } = await axios.get("./api/tasks", {
          params: {
            page: 1,
            limit: 16,
          },
        });
        console.log(data);
        setPage(2);
        reset(data as TaskData[]);
      })();
    }

    const observer = new IntersectionObserver(async (entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        const { data } = await axios.get("./api/tasks", {
          params: {
            page,
            limit: 8,
          },
        });
        console.log(data);
        if (data?.length) {
          insert(data as TaskData[]);
          setPage(page + 1);
        }
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);

  return (
    <Container>
      <FirstColumn>
        <DateCheck />
        <TaskForm />
      </FirstColumn>
      <SecondColumn>
        <div>
          {valid_tasks.map((task, i) => (
            <TaskItem
              id={task.id}
              isNew={task.isNew}
              key={task.id}
              task={task.task_name}
              end={new Date(task.end_date)}
              start={new Date(task.start_date)}
            />
          ))}
          <p ref={loaderRef}>loading...</p>
        </div>
      </SecondColumn>
    </Container>
  );
}

export default MainContent;
