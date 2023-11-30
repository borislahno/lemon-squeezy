import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from '../../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../components/Button';
import FormError from '../../../components/FormError';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext/userContext';

type LoginFormInformation = {
  login: string,
  password: string,
}

const schema = yup.object().shape({
  login: yup.string().required('This field is required'),
  password: yup.string().required('This field is required'),
})

const LoginForm: React.FC = () => {
  const {register, formState: {errors}, handleSubmit} = useForm<LoginFormInformation>({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });
  const {login} = useContext(UserContext);

  const onSubmit: SubmitHandler<LoginFormInformation> = (formData) => {
    login();
    localStorage.setItem('userLogin', formData.login);
  }

  return (
    <form className="flex flex-col gap-[16px] w-full mt-[40px]" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input<LoginFormInformation>
          className="h-[40px]"
          name="login"
          register={register}
          type="text"
          placeholder="Enter login"
          inputMode="text"
          isError={!!errors.login?.message}
        />
        {!!errors.login?.message && (
          <FormError>
            {errors.login?.message}
          </FormError>
        )}
      </div>
      <div>
        <Input<LoginFormInformation>
          className="h-[40px]"
          name="password"
          register={register}
          type="password"
          placeholder="Password"
          inputMode="text"
          isError={!!errors.password?.message}
        />
        {!!errors.password?.message && (
          <FormError>
            {errors.password?.message}
          </FormError>
        )}
      </div>
      <Button
        className="h-[48px] mt-[20px]"
        type="submit"
      >
        Sign in
      </Button>
    </form>
  );
}

export default LoginForm;