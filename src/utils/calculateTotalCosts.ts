import { Costs } from '../pages/MonthlyReport/components/CreateMonthlyReportForm/CreateMonthlyReportForm';

export const calculateTotalCosts = (categoryCosts: Costs[]): number =>
  categoryCosts.reduce((total, {cost}) => total + +cost, 0)