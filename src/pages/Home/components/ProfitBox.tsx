import { ClassNameValue, twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

type ProfitBoxProps = {
  title: string,
  className?: ClassNameValue,
}

const ProfitBox: React.FC<React.PropsWithChildren<ProfitBoxProps>> = ({title, children, className}) => {

  return (
    <div className={twMerge('px-[32px] pt-[24px] pb-[16px] border-y-[1px]', className)}>
      <div className="mb-[8px] text-sm font-normal text-black-300">{title}</div>
      <div className="mb-[100px] text-2xlg font-normal text-black-300">
        {children}
      </div>
      <hr className="h-[2px] w-full bg-purple"/>
      <div className="mt-[12px] text-sm font-normal text-grey-500">
        {format(new Date(),'d MMM')}
      </div>
    </div>
  );
}

export default ProfitBox;