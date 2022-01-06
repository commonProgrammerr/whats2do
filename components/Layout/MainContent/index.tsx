import TaskItem from "../../TaskItem";
import { Container, FirstColumn, SecondColumn } from "./styles";
import { TaskForm } from "../../TaskForm";
import { TaskData, useTasksList } from "../../../contexts/tasks-context";
import { DateCheck } from "../DateCheck";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useToasts } from "react-toast-notifications";

function MainContent() {
  const { addToast } = useToasts();
  const { tasks, insert, reset } = useTasksList();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const valid_tasks = tasks.filter((task) => task.enable);
  const loaderRef = useRef(null);

  async function handleLoadPage() {
    try {
      setLoading(true);
      const { data } = await axios.get("./api/tasks", {
        params: {
          page,
          limit: 10,
        },
      });

      if (data?.length) {
        insert(data as TaskData[]);
      }
    } catch (error) {
      console.error(error);
      addToast("Não foi possivel carergar mais!", {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    handleLoadPage();

    const observer = new IntersectionObserver(async (entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        console.log("loading");
        setPage(page => page + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      handleLoadPage();
    }
  }, [page]);

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
