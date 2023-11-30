import { twMerge } from 'tailwind-merge';

type FormFieldProps = {
  className?: string,
}

const FormField: React.FC<React.PropsWithChildren<FormFieldProps>> = ({children, className}) => {

  return (
    <div className={twMerge('py-[24px] border-b-[1px] border-grey-100', className)}>
      {children}
    </div>
  );
}

export default FormField;