import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterFormValues, registerSchema } from "./RegisterSchema";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { RegisterContext } from "../../../contexts/registerContext";
import Loading from "../../Loading/Loading";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });
  const { isLoading, registerUser } = useContext(RegisterContext);

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    registerUser(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        id="name"
        type="text"
        label="Nome"
        {...register("name")}
        disabled={isLoading}
      />
      {errors.name ? (
        <StyledParagraph fontColor="red">{errors.name.message}</StyledParagraph>
      ) : null}
      <Input
        id="email"
        type="text"
        label="Email"
        {...register("email")}
        disabled={isLoading}
      />
      {errors.email ? (
        <StyledParagraph fontColor="red">
          {errors.email.message}
        </StyledParagraph>
      ) : null}
      <Input
        id="password"
        type="password"
        label="Senha"
        {...register("password")}
        disabled={isLoading}
      />
      {errors.password ? (
        <StyledParagraph fontColor="red">
          {errors.password.message}
        </StyledParagraph>
      ) : null}
      <Input
        id="confirmPassword"
        type="password"
        label="Confirme a senha"
        {...register("confirm")}
        disabled={isLoading}
      />
      {errors.confirm ? (
        <StyledParagraph fontColor="red">
          {errors.confirm.message}
        </StyledParagraph>
      ) : null}
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        disabled={isLoading}
      >
        {isLoading ? <Loading /> : "Cadastrar"}
      </StyledButton>
    </StyledForm>
  );
}
