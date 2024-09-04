export interface LoginFormValues {
    username: string;
    password: string;
  };
  export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  export interface UserState {
    users: User[];
    currentUser: User | null;
  };