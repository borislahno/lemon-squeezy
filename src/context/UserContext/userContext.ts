import { createContext } from 'react';

type UserContextType = {
  isLoggedIn: boolean,
  logout: () => void,
  login: () => void,
  userLogin: string,
}

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  logout: () => {
  },
  login: () => {
  },
  userLogin: '',
});