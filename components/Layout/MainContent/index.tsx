import TaskItem from "../../TaskItem";
import { Container, FirstColumn, SecondColumn } from "./styles";
import { TaskForm } from "../../TaskForm";
import { TaskData, useTasksList } from "../../../contexts/tasks-context";
import { DateCheck } from "../DateCheck";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function MainContent() {
  const { addToast } = useToasts();
  const { tasks, insert, reset } = useTasksList();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const valid_tasks = tasks.filter((task) => task.enable);
  const scrollRef = useRef(null);
  const loaderRef = useRef(null);

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y < 20 && !loading) {
        console.log(currPos.y);
        setPage((page) => page + 1);
      }
    },
    [loading],
    loaderRef,
    false,
    300,
    scrollRef
  );

  useEffect(() => {
    if (!loading) {
      handleLoadPage();
    }
    console.log(tasks)
  }, [page]);

  useEffect(() => {
    if (page === 1) {
      handleLoadPage();
    }
  }, []);

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
      addToast("Não é possivel carergar mais!", {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <FirstColumn>
        <DateCheck />
        <TaskForm />
      </FirstColumn>
      <SecondColumn ref={scrollRef}>
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
        </div>
        <p ref={loaderRef}>.</p>
      </SecondColumn>
    </Container>
  );
}

export default MainContent;
