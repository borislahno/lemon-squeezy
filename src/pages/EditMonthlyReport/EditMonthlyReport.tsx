import CreateMonthlyReportForm from '../MonthlyReport/components/CreateMonthlyReportForm/CreateMonthlyReportForm';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';

const EditMonthlyReport: React.FC = () => {
  const {id} = useParams();
  const {monthlyReports} = useAppSelector(state => state.monthlyReportReducer);

  const report = monthlyReports.find(report => report.id === id);

  return (
    <section className="h-full ml-[264px] mt-[34px] px-[40px] pb-[130px]">
      <h1 className="heading-primary">Edit Report</h1>
      <CreateMonthlyReportForm report={report}/>
    </section>
  );
}

export default EditMonthlyReport;