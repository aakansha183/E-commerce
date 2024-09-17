import { toast } from "react-toastify";
import useAuth from "../../../Hooks/UseAuth";
import { useHomeNavigate } from "../../../Routes/Navigation";
import { LoginFormValues } from "../Types/LoginInterfaces";

export const useLoginHandler = () => {
  const { login } = useAuth();
  const { navigateToHome } = useHomeNavigate();

  const onSubmit = async (values: LoginFormValues, setError: (error: string) => void) => {
    try {
      const success = await login(values.username, values.password);
      if (success) {
        navigateToHome();
        toast.success("Successfully Logged In", { theme: "dark" });
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Invalid username or password.");
    }
  };

  return { onSubmit };
};
