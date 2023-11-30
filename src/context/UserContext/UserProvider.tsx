import { UserContext } from './userContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(localStorage.getItem('login') === 'true');
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem('login', 'true');
    setLoggedIn(true);
    navigate('/');
  }

  const logout = () => {
    localStorage.setItem('login', 'false');
    localStorage.setItem('userLogin', '');
    localStorage.removeItem('persist:root')
    setLoggedIn(false);
    navigate('/login');
  }

  return (
    <UserContext.Provider value={{isLoggedIn, login, logout, userLogin: localStorage.getItem('userLogin') || ''}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;