import { useDispatch, useSelector } from "react-redux";
import { validationSchemaLogin } from "../Pages/PageLogin/Utils/Validation/LoginValidation";
import { User } from "../Pages/PageLogin/Utils/Interfaces/LoginInterfaces";
import { setUser } from "../Redux/UserSlice";
import { RootState } from "../Redux/Store";
import localforage from "localforage";

interface AuthState {
  currentUser: User | null;
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  register: (newUser: User) => Promise<void>;
}

const useAuth = (): AuthState => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.users.currentUser);

  const isLoggedIn = !!currentUser;

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      await validationSchemaLogin.validate({ username, password }, { abortEarly: false });

      const storedUsers = await localforage.getItem<User[]>("users");
      const parsedUsers: User[] = storedUsers || [];

      const user = parsedUsers.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        await sessionStorage.setItem("currentUser", JSON.stringify(user));
        dispatch(setUser(user));
        return true;
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Login error:", error.message);
        throw error;
      } else {
        console.error("Unknown error during login");
        throw new Error("Unknown error during login");
      }
    }
  };

  const logout = async () => {
    await sessionStorage.removeItem("currentUser");
    await localforage.removeItem("currentUser"); // Optional, if you store it in localForage as well
    dispatch(setUser(null));
  };

  const register = async (newUser: User) => {
    const storedUsers = await localforage.getItem<User[]>("users");
    const parsedUsers: User[] = storedUsers || [];

    const usernameExists = parsedUsers.some(
      (user) => user.username === newUser.username
    );
    const emailExists = parsedUsers.some(
      (user) => user.email === newUser.email
    );

    if (usernameExists || emailExists) {
      throw new Error("Username or email already exists");
    }

    parsedUsers.push(newUser);
    await localforage.setItem("users", parsedUsers);

    console.log("Registered new user:", newUser);

    dispatch(setUser(newUser));
  };

  return { currentUser, isLoggedIn, login, logout, register };
};

export default useAuth;
