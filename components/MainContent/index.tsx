import { Container, FirstColumn, SecondColumn } from "./styles";
import { useForm } from "react-hook-form";
import { InputForm } from "../Form/Input";

interface MainContentProps {}

const required = {
  message: "Missing field!",
  value: true,
};

function MainContent({}: MainContentProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("submit", data);
  };
  console.log(errors);
  return (
    <Container>
      <FirstColumn>
        <form onSubmit={handleSubmit(onSubmit)}>
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
        </form>
      </FirstColumn>
      <SecondColumn>
        <div></div>
      </SecondColumn>
    </Container>
  );
}

export default MainContent;
