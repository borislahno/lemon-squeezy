import { FieldErrors, SubmitHandler, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { addMonthlyReport, editMonthlyReport } from '../../../../../store/reducers/CostsSlice';
import { compose } from '../../../../../utils/compose';
import { calculateProfit } from '../../../../../utils/calculateProfit';
import { calculateTotalCosts } from '../../../../../utils/calculateTotalCosts';
import { Costs, MonthlyReport, MonthlyReportData, MonthlyReportForm } from '../CreateMonthlyReportForm';
import * as yup from 'yup';
import { NUMBER_REGEXP } from '../../../../../constants/regExp/numberRegExp';

type UseCreateMonthlyReportType = (report?: MonthlyReport) => {
  errors: FieldErrors<MonthlyReportData>,
  handleSubmit: UseFormHandleSubmit<MonthlyReportData>,
  onSubmit: SubmitHandler<MonthlyReportData>,
} & MonthlyReportForm;

const schema = yup.object().shape({
  income: yup.string().required('This field is required').matches(NUMBER_REGEXP, "Only numbers 0-9 and the '.' character that separates them are valid"),
  month: yup.date().required('This field is required'),
  costs: yup.array()
    .of(yup.object().shape({
      category: yup.object().shape({
        id: yup.string().required('This field is required'),
        name: yup.string().required('This field is required'),
      }).required('This field is required'),
      cost: yup.string().required('This field is required').matches(NUMBER_REGEXP, "Only numbers 0-9 and the '.' character that separates them are valid"),
    }))
    .min(1, 'You must select at least one costs category').required('This field is required'),
});

export const useCreateMonthlyReport: UseCreateMonthlyReportType = (report) => {
  const {register, control, setValue, getValues, clearErrors, handleSubmit, formState: {errors}} = useForm<MonthlyReportData>({
    defaultValues: report ? {
      month: new Date(report.month),
      income: report.income,
      costs: report.costs,
    } : {
      income: '',
      costs: [],
    },
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<MonthlyReportData> = (formData) => {
    if (report) {
      dispatch(editMonthlyReport({
        id: report.id,
        profit: compose<Costs[], number>(calculateProfit(+formData.income || 0), calculateTotalCosts)(formData.costs),
        ...formData,
      }));
    } else {
      dispatch(addMonthlyReport({
        id: crypto.randomUUID(),
        profit: compose<Costs[], number>(calculateProfit(+formData.income || 0), calculateTotalCosts)(formData.costs),
        ...formData,
      }));
    }
    navigate('/');
  }

  return {
    setValue,
    getValues,
    register,
    control,
    clearErrors,
    errors,
    handleSubmit,
    onSubmit,
  }
}