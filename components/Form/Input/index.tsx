import React from "react";

import { Input, Error, Container, Label } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: {
    [key: string]: Error;
  };
}

export function InputForm({ name, error, label, ...rest }: Props) {
  return (
    <Container>
      <div>
        <Label>{label}</Label>
        {error?.[name] && <Error>{error[name]?.message}</Error>}
      </div>
      <Input {...rest} />
    </Container>
  );
}
