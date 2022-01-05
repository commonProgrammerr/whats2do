import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { useTasksList } from "../../contexts/tasks-context";
import { crud_api } from "../../services/api";
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

function handleFormatDate(date: Date) {
  console.log(date.getMonth());
  const str = `${date
    .getFullYear()
    .toLocaleString("iso", {
      minimumIntegerDigits: 4,
    })
    .replace(".", "")}-${(date.getMonth() + 1).toLocaleString("iso", {
    minimumIntegerDigits: 2,
  })}-${date.getDay().toLocaleString("iso", {
    minimumIntegerDigits: 2,
  })}`;
  console.log(str);

  return str;
}

export function TaskForm() {
  const { create, update, editMode, closeEditMode } = useTasksList();
  const { addToast } = useToasts();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  useEffect(() => {
    (async () => {
      try {
        if (editMode.open) {
          const { data } = await crud_api.get("/tasks/" + editMode.id);
          console.log(new Date(data.start_date).toDateString());
          reset({
            task_name: data.task_name,
            start_date: handleFormatDate(new Date(data.start_date)),
            end_date: handleFormatDate(new Date(data.end_date)),
          });
        } else {
          reset({});
        }
      } catch {
        addToast('Não conseguimos atualizar essa tarefa! :(', {
          appearance: 'error',
          autoDismiss: true
        })
      }
    })();
  }, [editMode]);

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        try {
          const { task_name, start_date, end_date } = data;
          if (editMode.open) {
            closeEditMode();
            reset({});
            await update({
              id: editMode.id,
              task_name,
              start_date: new Date(start_date),
              end_date: new Date(end_date),
              enable: true,
            });
            addToast(task_name + '. Atualizada!', {
              appearance: 'success',
              autoDismiss: true
            })
          } else {
            const task = {
              task_name,
              start_date: new Date(start_date).toISOString(),
              end_date: new Date(end_date).toISOString(),
            };
            
            await create(task);
            addToast(task_name + '. Adicionada!', {
              appearance: 'success',
              autoDismiss: true
            })
          }
          reset();
        } catch (err) {
          console.error(err);
          addToast('Não conseguimos concluir a opreação. ', {
            appearance: 'error',
            autoDismiss: true
          })
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
      <input type="submit" value={editMode.open ? "Atualizar" : "Adicionar"} />
    </Form>
  );
}
