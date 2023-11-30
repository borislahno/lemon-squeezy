import { Navigate } from 'react-router-dom';

type ConditionalRouteProps = {
  condition:boolean,
  redirectTo:string,
}

const ConditionalRoute: React.FC<React.PropsWithChildren<ConditionalRouteProps>> = ({children,condition,redirectTo}) => {

  return condition ? <>{children}</> : <Navigate to={redirectTo} replace/>
}

export default ConditionalRoute;