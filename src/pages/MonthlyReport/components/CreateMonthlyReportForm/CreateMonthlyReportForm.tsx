import { Control, UseFormClearErrors, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import FiledCaption from '../../../../components/FiledCaption';
import FormField from '../../../../components/FormField';
import PageCaption from '../../../../components/PageCaption';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import CostsField from './components/CostsField';
import MonthPicker from './components/MonthPicker';
import FormError from '../../../../components/FormError';
import { useCreateMonthlyReport } from './hooks/useCreateMonthlyReport';

export type Category = {
  id: string,
  name: string,
}

export type Costs = {
  category: Category,
  cost: string,
}

export type MonthlyReportData = {
  month: Date,
  income: string,
  costs: Costs[],
}

export type MonthlyReport = {
  id: string,
  profit: number,
} & MonthlyReportData;

export type MonthlyReportForm = {
  register: UseFormRegister<MonthlyReportData>,
  control: Control<MonthlyReportData>,
  getValues: UseFormGetValues<MonthlyReportData>,
  setValue: UseFormSetValue<MonthlyReportData>,
  clearErrors: UseFormClearErrors<MonthlyReportData>,
}

type CreateMonthlyReportFormProps = {
  report?: MonthlyReport,
}

const CreateMonthlyReportForm: React.FC<CreateMonthlyReportFormProps> = ({report}) => {
  const {control,register,setValue,getValues,clearErrors,errors,handleSubmit,onSubmit}=useCreateMonthlyReport(report);
  return (
    <div className="mt-[40px]">
      <FormField className="flex items-end justify-between gap-[30px] pt-[0]">
        <PageCaption title="Monthly report" subtitle="Track your monthly income and expenses easily"/>
        <Button className="flex-[146px] grow-0 shrink-0 h-[40px]" form="monthly-report" type="submit">
          {report ? 'Save changes' : 'Create'}
        </Button>
      </FormField>
      <form onSubmit={handleSubmit(onSubmit)} id="monthly-report">
        <FormField className="flex justify-between">
          <FiledCaption title="Month" subtitle="The month for which you want to create a report" required/>
          <div className="flex-[800px] grow-0">
            <MonthPicker control={control} setValue={setValue}/>
            {!!errors?.month?.message && (
              <FormError>
                {errors?.month?.message}
              </FormError>
            )}
          </div>
        </FormField>
        <FormField className="flex justify-between">
          <FiledCaption title="Income" subtitle="The amount you earned per month" required/>
          <div className="relative flex-[800px] grow-0">
            <div className="absolute top-[10px] left-[10px] text-sm font-normal text-grey pointer-events-none">UAH</div>
            <Input<MonthlyReportData>
              className="h-[40px] pl-[60px] text-right"
              name="income"
              register={register}
              placeholder="Enter monthly income"
              inputMode="numeric"
              isError={!!errors?.income?.message}
            />
            {!!errors?.income?.message && (
              <FormError>
                {errors?.income?.message}
              </FormError>
            )}
          </div>
        </FormField>
        <FormField className="flex justify-between">
          <FiledCaption title="Costs" subtitle="Your monthly expenses are divided into categories" required/>
          <CostsField
            register={register}
            control={control}
            getValues={getValues}
            errors={errors}
            clearErrors={clearErrors}
          />
        </FormField>
      </form>
    </div>
  );
}

export default CreateMonthlyReportForm;