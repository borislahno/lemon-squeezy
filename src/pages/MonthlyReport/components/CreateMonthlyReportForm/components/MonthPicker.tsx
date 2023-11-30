import ReactDatePicker from 'react-datepicker';
import { forwardRef } from 'react';
import { format } from 'date-fns';
import { useWatch } from 'react-hook-form';
import { ReactComponent as Calendar } from '../../../../../assets/svg/calendarIcon.svg';
import { ReactComponent as LeftArrow } from '../../../../../assets/svg/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../../../assets/svg/right-arrow.svg';
import { MonthlyReportForm } from '../CreateMonthlyReportForm';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { twMerge } from 'tailwind-merge';

type MonthPickerProps = Pick<MonthlyReportForm, 'control' | 'setValue'>

const MonthPicker: React.FC<MonthPickerProps> = ({control, setValue}) => {
  const date = useWatch({control, name: 'month'});
  const {monthlyReports} = useAppSelector(state => state.monthlyReportReducer);

  const onDateChange = (date: Date) => setValue('month', date);

  const CustomInput = forwardRef(({value, onClick}: any, ref: any) => (
    <button
      className={
        twMerge(
          'flex items-center gap-[8px] h-[40px] px-[12px] rounded-md shadow-[inset_0_0_0_1px_#0a0a2e29,0_1px_1px_0_#0a0a0b0f] text-sm font-normal',
          value ? 'text-black-300' : 'text-grey'
        )}
      onClick={onClick}
      type="button"
      ref={ref}
    >
      <Calendar className="flex-[16px] grow-0 shrink-0 h-[16px] text-grey-100"/>
      {value ? format(new Date(value), 'MMMM y') : 'Select month'}
    </button>
  ));

  return (
    <ReactDatePicker
      selected={date}
      maxDate={new Date()}
      onChange={onDateChange}
      dateFormat="MM/dd/yyyy"
      showMonthYearPicker
      customInput={<CustomInput/>}
      excludeDates={monthlyReports.map(report => new Date(report.month))}
      renderCustomHeader={({date, nextYearButtonDisabled, prevYearButtonDisabled, increaseYear, decreaseYear}) => (
        <div className="flex items-center justify-between gap-[10px] px-[16px] mb-[16px] text-sm font-medium text-black-150">
          <button
            className="flex items-center justify-center flex-[30px] grow-0 h-[30px] rounded-md hover:bg-grey-50 disabled:pointer-events-none"
            type="button"
            onClick={decreaseYear}
            disabled={prevYearButtonDisabled}
          >
            <LeftArrow/>
          </button>
          {format(date, 'y')}
          <button
            className="flex items-center justify-center flex-[30px] grow-0 h-[30px] rounded-md hover:bg-grey-50 disabled:pointer-events-none"
            type="button"
            onClick={increaseYear}
            disabled={nextYearButtonDisabled}
          >
            <RightArrow/>
          </button>
        </div>
      )}
    />
  )
};

export default MonthPicker;