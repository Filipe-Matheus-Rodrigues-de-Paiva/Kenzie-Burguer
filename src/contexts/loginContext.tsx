import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IChildren {
  children: React.ReactNode;
}

interface IFormData {
  email: string;
  password: string;
}

interface IUserContext {
  userLogin: (formData: IFormData) => Promise<void>;
  isLoading: boolean;
}

export const LoginContext = createContext({} as IUserContext);

export const LoginProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function userLogin(formData: IFormData) {
    try {
      setIsLoading(true);
      const response = await api.post("/login", formData);

      const { accessToken, user } = response.data;

      localStorage.setItem("@TOKEN", accessToken);
      localStorage.setItem("@USERID", user.id);
      setUser(user);

      toast.success("Login feito com sucesso!", {
        autoClose: 1500,
      });

      setTimeout(() => {
        navigate("/shop");
      }, 1000);
    } catch (error: any) {
      toast.error(error.response.data, {
        autoClose: 1500,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    if (token) {
      async function autoLogin() {
        try {
          const response = await api.get(`/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);

          navigate("/shop");
        } catch (error) {
          localStorage.removeItem("@TOKEN");
        }
      }
      autoLogin();
    } else {
      navigate("/");
    }
  }, []);

  return (
    <LoginContext.Provider value={{ userLogin, isLoading }}>
      {children}
    </LoginContext.Provider>
  );
};
