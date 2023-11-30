import { ClassNameValue, twMerge } from 'tailwind-merge';
import { ReactElement } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputProps<FormType extends FieldValues> {
  className?: ClassNameValue
  name: Path<FormType>,
  register: UseFormRegister<FormType>
  type?: 'text' | 'password',
  placeholder: string,
  inputMode: 'numeric' | 'text',
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  isError: boolean,
}

const Input = <FormType extends FieldValues>(
  {
    placeholder,
    isError,
    onChange,
    inputMode,
    type='text',
    className,
    name,
    register
  }: InputProps<FormType>): ReactElement => {

  return (
    <input
      className={
        twMerge(
          'form-input',
          isError && 'form-input-error',
          className
        )
      }
      {...register(name, {onChange})}
      placeholder={placeholder}
      inputMode={inputMode}
      type={type}
    />
  );
}

export default Input;