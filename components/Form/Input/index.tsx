import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

import { Input, Error, Container, Label } from "./styles";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  register: UseFormRegister<any>;
  options?: RegisterOptions<any, any>;
  error?: {
    [key: string]: Error;
  };
}

export function InputForm({ name, register, options, error, label, ...rest }: Props) {
  return (
    <Container>
      <div>
        <Label>{label}</Label>
        {error?.[name] && <Error>{error[name]?.message}</Error>}
      </div>
      <Input {...rest} {...register(name, options || {})} />
    </Container>
  );
}
