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

interface TaskDTO {
  id: string;
  task_name: string;
  start_date: Date;
  end_date: Date;
};

interface NewTaskDTO {
  task_name: string;
  start_date: string;
  end_date: string;
}

interface TaskData extends TaskDTO {
  enable?: boolean
  isNew?: boolean
}

interface TasksContextType {
  tasks: TaskData[]
  create(task: NewTaskDTO): Promise<void>
  // read(id:string): TaskDTO
  // update(task: TaskDTO): Promise<void>
  // delete(id: string): Promise<void>
}

const tasksContext = createContext<TasksContextType | null>(null);


export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState([] as TaskData[]);

  useEffect(() => {
    (async () => {
      const { data } = await crud_api.get("/tasks");
      setTasks(data ? [...data] : []);
    })();
  }, []);

  return (
    <tasksContext.Provider
      value={{
        tasks,
        async create(task_data) {
          const new_task = (await crud_api.post('/tasks', {
            ...task_data,
            enable: true
          })).data as TaskDTO

          const task = {
            ...new_task,
            start_date: new Date(new_task.start_date),
            end_date: new Date(new_task.end_date),
            isNew: true
          }
          console.log(task)
          return setTasks(tasks => [task, ...tasks])
        }

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