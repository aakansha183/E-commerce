import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import { FormData } from "../PageSignup/Interfaces/SignupInterfaces";
import { User } from "../PageLogin/Types/LoginInterfaces";

export const useHandleRegister = () => {
  const { register: registerUser } = useAuth();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    try {
      const newUser: User = {
        id: Date.now().toString(),
        username: values.username,
        password: values.password,
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
      };
      await registerUser(newUser);
      toast.success("Successfully Registered", {
        theme: "dark",
      });
      navigate("/Home");
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      } else {
        return "An unknown error occurred";
      }
    }
  };

  return { onSubmit };
};
