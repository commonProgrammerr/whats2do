import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { date_api } from "../../../services/api";
import Button from "../../Button";
import { InputForm } from "../../Form/Input";

import { Container } from "./styles";

export function DateCheck() {
  const [value, setValue] = useState("");
  const { addToast } = useToasts();

  async function handleCheckDate() {
    try {
      const { data } = await date_api.get("/");
      const dates = [...data[0].date]
        .map(item => item.data.split('-'))
        .map(date => new Date(`${date[2]}-${date[0]}-${date[1]}`).getTime())
        .sort();
      const requested_date = new Date(value).getTime();

      for (let date of dates) {
        if (date === requested_date) {
          addToast(`${value} não é uma data válida.`, {
            appearance: "warning",
            autoDismiss: true,
          });
          return;
        }
      }
      addToast(`${value} é uma data válida.`, {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (error) {
      addToast(`Não foi possivel avaliar ${value}!`, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  }

  return (
    <Container>
      <InputForm
        label="Checar data"
        type="date"
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      />
      <Button onClick={handleCheckDate} bgColor="background_high_emphasis">
        Checar
      </Button>
    </Container>
  );
}
