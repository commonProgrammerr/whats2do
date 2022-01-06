import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

import { Input, Error, Container, Label } from "./styles";

interface Props<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register?: UseFormRegister<T>;
  name: string;
  options?: RegisterOptions<any, any>;
  error?: {
    [key: keyof T]: Error;
  };
}

export function InputForm<T>({ name, register, options, error, label, ...rest }: Props<T>) {
  return (
    <Container label={!!label}>
      <div>
        <Label>{label}</Label>
        {error?.[name] && <Error>{error[name]?.message}</Error>}
      </div>
      <Input {...rest} {...register?.(name, options || {})} />
    </Container>
  );
}
