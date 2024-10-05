import { atom } from "recoil";

export interface User {
  email: string;
  password: string;
  firstName: string | null;
  lastName: string | null;
  id: string;
  username: string;
  profilePicture: string | null;
  createdAt: string;
}

const initialState = {
  isAuthenticated: false,
  user: null as User | null,
};

export const userAtom = atom({
  key: "global/user/atom/key",
  default: initialState,
});
