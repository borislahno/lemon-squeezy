type FiledCaptionProps = {
  title: string,
  subtitle?: string,
  required?: boolean,
}

const FiledCaption: React.FC<FiledCaptionProps> = ({title, subtitle, required}) => {

  return (
    <div>
      <div className="text-sm font-medium text-black-5000">
        {title}
        {required && (
          <sup className="text-pink ml-[2px]">*</sup>
        )}
      </div>
      {subtitle && (
        <div className="text-sm font-normal text-grey-500">{subtitle}</div>
      )}
    </div>
  );
}

export default FiledCaption;