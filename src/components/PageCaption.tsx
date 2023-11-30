type PageCaptionProps = {
  title: string,
  subtitle?: string,
}

const PageCaption: React.FC<PageCaptionProps> = ({title, subtitle}) => {

  return (
    <div>
      <div className="text-[1.25rem] leading-[1.875rem] font-medium text-black-500">
        {title}
      </div>
      {subtitle && (
        <div className="text-sm font-normal text-grey-500">{subtitle}</div>
      )}
    </div>
  );
}

export default PageCaption;