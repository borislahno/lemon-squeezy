import CreateMonthlyReportForm from './components/CreateMonthlyReportForm/CreateMonthlyReportForm';

const MonthlyReport: React.FC = () => {

  return (
    <section className="h-full ml-[264px] mt-[34px] px-[40px] pb-[130px]">
      <h1 className="heading-primary">Report</h1>
      <CreateMonthlyReportForm/>
    </section>
  );
}

export default MonthlyReport;