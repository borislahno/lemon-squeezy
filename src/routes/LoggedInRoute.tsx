import ConditionalRoute from './ConditionalRoute';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext/userContext';


const LoggedInRoute:React.FC<React.PropsWithChildren> = ({children})=>{
  const {isLoggedIn}=useContext(UserContext);

  return(
    <ConditionalRoute condition={isLoggedIn} redirectTo="/login">
      {children}
    </ConditionalRoute>
  );
}

export default LoggedInRoute;