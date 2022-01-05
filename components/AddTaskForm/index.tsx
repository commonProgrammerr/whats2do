import { useForm } from "react-hook-form";
import { InputForm } from "../Form/Input";

import { Form } from "./styles";


const required = {
  message: "Missing field!",
  value: true,
};

function AddTaskForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("submit", data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        label="Atividade"
        name="task_name"
        placeholder="nome da atividade"
        {...register("task_name", { required })}
        error={errors}
      />
      <InputForm
        type="date"
        label="Data inicial"
        name="start_date"
        {...register("date", { required })}
        error={errors}
      />
      <InputForm
        type="date"
        label="Data final"
        name="final_date"
        {...register("date", { required })}
        error={errors}
      />
      <div />
      <input type="submit" value="Adicionar" />
    </Form>
  );
}

export default AddTaskForm;
