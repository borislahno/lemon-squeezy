import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import LoginForm from './components/LoginForm';

const Login: React.FC = () => {

  return (
    <section className="flex flex-auto">
      <div className="flex flex-col gap-[20px] items-center justify-center flex-[50%] grow-0 shrink-0 max-w-[560px] mx-auto py-[200px] px-[32px]">
        <Logo/>
        <h1 className="text-2xlg font-medium text-center">
          Sign in to Lemon Squeezy
        </h1>
        <LoginForm/>
      </div>
      <div className="flex-[50%] grow-0 shrink-0 bg-purple">

      </div>
    </section>
  );
}

export default Login;