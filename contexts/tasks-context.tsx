import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { crud_api } from "../services/api";

interface TasksProviderProps {
  children: ReactNode;
}

export interface TaskDTO {
  id: string;
  task_name: string;
  start_date: Date;
  end_date: Date;
}

interface NewTaskDTO {
  task_name: string;
  start_date: string;
  end_date: string;
}

interface TaskUpdateDTO {
  id: string;
  task_name?: string;
  start_date?: Date;
  end_date?: Date;
  enable?: boolean;
}

export interface TaskData extends TaskDTO {
  enable?: boolean;
  isNew?: boolean;
}

interface TasksContextType {
  tasks: TaskData[];
  editMode: {
    open: boolean;
    id: string;
  };
  create(task: NewTaskDTO): Promise<void>;
  openEditMode(id: string): void;
  closeEditMode(): void;
  update(task: TaskUpdateDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

const tasksContext = createContext<TasksContextType | null>(null);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState([] as TaskData[]);
  const [editMode, setEditMode] = useState({
    open: false,
    id: "",
  });

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("./api/tasks");
      setTasks(data ? [...data] : []);
    })();
  }, []);

  return (
    <tasksContext.Provider
      value={{
        tasks,
        editMode, 
        openEditMode(id) {
          setEditMode({
            open: true,
            id,
          });
        },

        closeEditMode() {
          setEditMode({
            open: false,
            id: "",
          });
        },
        async create(task_data) {
          const new_task = (
            await crud_api.post("/tasks", {
              ...task_data,
              enable: true,
            })
          ).data as TaskDTO;

          const task = {
            ...new_task,
            start_date: new Date(new_task.start_date),
            end_date: new Date(new_task.end_date),
            isNew: true,
          };
          console.log(task);
          return setTasks((tasks) => [...tasks, task]);
        },

        async delete(id) {
          try {
            const { data } = await crud_api.delete("/tasks/" + id);
            setTasks((tasksList) => {
              return tasksList.filter((task) => task.id !== data?.id);
            });
          } catch (error) {}
        },

        async update(task_data) {
          try {
            const { data } = await crud_api.delete("/tasks/" + task_data.id);
            setTasks((tasksList) => {
              return tasksList.map((task) =>
                task.id !== data?.id ? task : { ...task, ...task_data }
              );
            });
          } catch (error) {}
        },
      }}
    >
      {children}
    </tasksContext.Provider>
  );
}

export function useTasksList() {
  const context = useContext(tasksContext);

  if (!context) {
    throw new Error("This hook, must be used inside a 'TasksProvider'!");
  }

  return context;
}
