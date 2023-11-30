import ConditionalRoute from './ConditionalRoute';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext/userContext';


const LoggedOutRoute:React.FC<React.PropsWithChildren> = ({children})=>{
  const {isLoggedIn}=useContext(UserContext);

  return(
    <ConditionalRoute condition={!isLoggedIn} redirectTo="/">
      {children}
    </ConditionalRoute>
  );
}

export default LoggedOutRoute;