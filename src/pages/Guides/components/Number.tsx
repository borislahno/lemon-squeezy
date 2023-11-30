const Number: React.FC<React.PropsWithChildren> = ({children}) => {

  return (
    <div className="flex items-center justify-center flex-[40px] grow-0 shrink-0 h-[40px] rounded-full bg-grey-100 text-sm text-black-500">
      {children}
    </div>
  );
}

export default Number;