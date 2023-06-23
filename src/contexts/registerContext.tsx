import React, { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { TRegisterFormValues } from "../components/Form/RegisterForm/RegisterSchema";
import { useNavigate } from "react-router-dom";

interface IChildrenTwo {
  children: React.ReactNode;
}

interface IContextRegister {
  registerUser(formData: TRegisterFormValues): Promise<void>;
  isLoading: boolean;
}

export const RegisterContext = createContext({} as IContextRegister);

export const RegisterProvider = ({ children }: IChildrenTwo) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  async function registerUser(formData: TRegisterFormValues) {
    try {
      setIsLoading(true);
      const response = await api.post("/users", formData);

      toast.success("Conta criada com sucesso!", {
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error: any) {
      toast.error(error.response.data, {
        autoClose: 2000,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <RegisterContext.Provider value={{ registerUser, isLoading }}>
      {children}
    </RegisterContext.Provider>
  );
};
