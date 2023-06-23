import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginFormValues, loginSchema } from "./LoginSchema";
import { useContext } from "react";
import { LoginContext } from "../../../contexts/loginContext";
import { StyledParagraph } from "../../../styles/typography";
import Loading from "../../Loading/Loading";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const { userLogin, isLoading } = useContext(LoginContext);

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        id="login"
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
        id="senha"
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
      <StyledButton
        $buttonSize="default"
        $buttonStyle="green"
        disabled={isLoading}
      >
        {isLoading ? <Loading /> : "Entrar"}
      </StyledButton>
    </StyledForm>
  );
}
