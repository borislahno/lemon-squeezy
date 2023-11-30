import { FieldErrors, useFieldArray } from 'react-hook-form';
import Input from '../../../../../components/Input';
import { MonthlyReportData, MonthlyReportForm } from '../CreateMonthlyReportForm';
import { ReactComponent as Plus } from '../../../../../assets/svg/plus.svg';
import { ReactComponent as Bin } from '../../../../../assets/svg/bin.svg';
import CategoryComboBox from './CategoryComboBox';
import FormError from '../../../../../components/FormError';

type CostsFieldProps = {
  errors: FieldErrors<MonthlyReportData>,
} & Omit<MonthlyReportForm, 'setValue'>;

const CostsField: React.FC<CostsFieldProps> = ({register, control, getValues, errors, clearErrors}) => {
  const {fields, append, remove, update} = useFieldArray({
    control,
    name: 'costs'
  });

  const onAddNewCostCategoryClick = () => {
    append({cost: '', category: {id: '', name: ''}});
  }

  const onRemoveCostCategoryClick = (index: number) => () => {
    remove(index);
  }

  return (
    <div className="relative flex-[800px] grow-0">
      <div className="flex flex-col gap-[12px]">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-[10px]">
            <div>
              <CategoryComboBox
                index={index}
                control={control}
                getValues={getValues}
                clearErrors={clearErrors}
                update={update}
                isError={!!errors?.costs?.[index]?.category?.id?.message}
              />
              {!!errors?.costs?.[index]?.category?.id?.message && (
                <FormError>
                  {errors?.costs?.[index]?.category?.id?.message}
                </FormError>
              )}
            </div>
            <div className="relative flex-[800px] grow-0 ml-[20px]">
              <div className="absolute top-[10px] left-[10px] text-sm font-normal text-grey pointer-events-none">UAH</div>
              <Input<MonthlyReportData>
                className="h-[40px] pl-[60px] text-right"
                name={`costs.${index}.cost`}
                register={register}
                placeholder="Enter the costs"
                inputMode="numeric"
                isError={!!errors?.costs?.[index]?.cost?.message}
              />
              {!!errors?.costs?.[index]?.cost?.message && (
                <FormError>
                  {errors?.costs?.[index]?.cost?.message}
                </FormError>
              )}
            </div>
            <button
              className="flex items-center justify-center flex-[40px] grow-0 shrink-0 h-[40px] rounded-md text-grey-300 hover:bg-grey-50"
              aria-label="Remove cost category"
              type="button"
              onClick={onRemoveCostCategoryClick(index)}
            >
              <Bin/>
            </button>
          </div>
        ))}
      </div>
      <div>
        <button
          className="flex items-center gap-[4px] h-[40px] text-sm text-grey hover:text-purple-400"
          type="button"
          onClick={onAddNewCostCategoryClick}
        >
          <Plus/>
          Add new cost category
        </button>
        {(!!errors?.costs?.message || !!errors?.costs?.root?.message) && (
          <FormError>
            {errors?.costs?.message || errors?.costs?.root?.message}
          </FormError>
        )}
      </div>
    </div>
  );
}

export default CostsField;