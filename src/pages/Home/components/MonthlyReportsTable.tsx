import { useAppSelector } from '../../../hooks/useAppSelector';
import { format, startOfMonth } from 'date-fns';
import { separateThousandsWithCommas } from '../../../utils/separateThousandsWithCommas';
import { currencyApi } from '../../../services/currencyService';
import MonthlyReportDropDownMenu from './MonthlyReportDropDownMenu';
import { useNavigate } from 'react-router-dom';

const MonthlyReportsTable: React.FC = () => {
  const {data: usdExchange, isLoading: isUsdExchangeLoading} = currencyApi.useFetchCurrencyByCodeQuery('USD');
  const {data: eurExchange, isLoading: isEurExchangeLoading} = currencyApi.useFetchCurrencyByCodeQuery('EUR');
  const {monthlyReports} = useAppSelector(state => state.monthlyReportReducer)
  const navigate = useNavigate();

  const sortedReportsByDesc = monthlyReports.concat([]).sort((firstReport, secondReport) =>
    startOfMonth(new Date(secondReport.month)).getTime() - startOfMonth(new Date(firstReport.month)).getTime())

  const onMonthlyReportClick = (id: string) => () => {
    navigate(`/monthly-report/${id}`);
  }

  return (
    <div className="mt-[50px]">
      <div className="mb-[12px] text-base font-medium text-black-500">Monthly reports</div>
      <table className="w-full">
        <thead>
        <tr className="flex gap-[16px] py-[12px] px-[8px] border-y-[1px] [&>th]:text-sm [&>th]:font-normal [&>th]:text-grey-500 [&>th]:text-left">
          <th className="flex-[50px] grow-[0]">№</th>
          <th className="flex-[250px] grow-[0]">Month</th>
          <th className="flex-[250px] grow-[0]">Income</th>
          <th className="flex-auto">Costs</th>
          <th className="flex-[250px] grow-[0]">Profit</th>
          <th className="flex-[50px] grow-[0]"/>
        </tr>
        </thead>
        <tbody>
        {sortedReportsByDesc?.map((report, index) => (
          <tr
            className="relative flex gap-[16px] p-[8px] border-b-[1px] text-sm font-normal text-black-500 cursor-pointer hover:before:bg-grey-50
              before:content-[''] before:absolute before:top-0 before:left-0 before:z-[-1] before:w-full before:h-full
              before:rounded-md before:scale-x-[1.03]"
            key={report.id}
            onClick={onMonthlyReportClick(report.id)}
          >
            <td className="flex-[50px] grow-[0]">{index + 1}</td>
            <td className="flex-[250px] grow-[0]">{format(new Date(report.month), 'MMMM y')}</td>
            <td className="flex-[250px] grow-[0]">UAH {separateThousandsWithCommas((+report.income).toFixed(2))}</td>
            <td className="flex flex-col gap-[4px] flex-auto">
              {report.costs.map(({cost, category}, index) => (
                <div key={index}>
                  <span className="font-medium">{category.name}</span> - UAH {separateThousandsWithCommas((+cost).toFixed(2))}
                </div>
              ))}
            </td>
            <td className="flex-[250px] grow-[0]">
              <div>
                <>UAH {separateThousandsWithCommas(report.profit.toFixed(2))}</>
              </div>
              <div>USD
                {isUsdExchangeLoading ? (
                  '--'
                ) : (
                  <> {separateThousandsWithCommas((report.profit / (usdExchange?.[0]?.rate || 0)).toFixed(2))}</>
                )}
              </div>
              <div>
                EUR
                {isEurExchangeLoading ? (
                  '--'
                ) : (
                  <> {separateThousandsWithCommas((report.profit / (eurExchange?.[0]?.rate || 0)).toFixed(2))}</>
                )}
              </div>
            </td>
            <td className="flex-[50px] grow-[0]">
              <MonthlyReportDropDownMenu id={report.id}/>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default MonthlyReportsTable;