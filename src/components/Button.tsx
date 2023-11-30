import { ClassNameValue, twMerge } from 'tailwind-merge';

type ButtonVariant = 'purple';

type ButtonProps = {
  className?: ClassNameValue,
  type?: 'button' | 'submit',
  onClick?: () => void,
  variant?: ButtonVariant
  form?:string,

}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (
  {
    className,
    type = 'button',
    variant = 'purple',
    onClick,
    form,
    children,
  }) => {

  const getButtonStyle = (variant: ButtonVariant) => {
    switch (variant) {
      case 'purple':
        return 'bg-purple-400 text-white hover:bg-opacity-[.9]';
      default:
        return '';
    }
  }

  return (
    <button
      className={
        twMerge(
          'flex items-center justify-center w-full h-full rounded-md text-base font-medium transition-opacity duration-300',
          getButtonStyle(variant),
          className,
        )
      }
      type={type}
      onClick={onClick}
      form={form}
    >
      {children}
    </button>
  );
}

export default Button;