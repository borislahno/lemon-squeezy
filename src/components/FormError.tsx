import { ClassNameValue, twMerge } from 'tailwind-merge';

type FormErrorProps = {
  className?: ClassNameValue,
}

const FormError: React.FC<React.PropsWithChildren<FormErrorProps>> = ({children, className}) => {

  return (
    <div
      className={
        twMerge(
          'mt-[10px] text-sm font-normal text-pink',
          className
        )
      }
    >
      {children}
    </div>
  );
}

export default FormError;