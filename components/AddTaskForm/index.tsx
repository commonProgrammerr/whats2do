import { useForm } from "react-hook-form";
import { useTasksList } from "../../contexts/tasks-context";
import { InputForm } from "../Form/Input";

import { Form } from "./styles";

type FormInputs = {
  task_name: string;
  start_date: string;
  end_date: string;
};

const validation = {
  required: {
    message: "Missing field!",
    value: true,
  },
};

function AddTaskForm() {
  const { create } = useTasksList();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        try {
          const { task_name, start_date, end_date } = data;
          await create({
            task_name,
            start_date: new Date(start_date).toISOString(),
            end_date: new Date(end_date).toISOString(),
          });
          reset()
        } catch (err) {
          console.error(err);
        }
      })}
    >
      <InputForm
        type="text"
        label="Atividade"
        name="task_name"
        placeholder="Descrição da atividade"
        error={errors}
        options={validation}
        register={register}
      />
      <InputForm
        type="date"
        label="Data inicial"
        name="start_date"
        error={errors}
        options={validation}
        register={register}
      />
      <InputForm
        type="date"
        label="Data final"
        name="end_date"
        error={errors}
        options={validation}
        register={register}
      />
      <input type="submit" value="Adicionar" />
    </Form>
  );
}

export default AddTaskForm;
