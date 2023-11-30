import { Link } from 'react-router-dom';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import MonthlyReportsTable from './components/MonthlyReportsTable';
import ProfitBox from './components/ProfitBox';
import { currencyApi } from '../../services/currencyService';
import { useAppSelector } from '../../hooks/useAppSelector';
import { separateThousandsWithCommas } from '../../utils/separateThousandsWithCommas';

export type Currency = {
  r030: number,
  txt: string,
  rate: number,
  cc: string,
  exchangedate: string,
}

const Home: React.FC = () => {
  const {data: usdExchange, isLoading: isUsdExchangeLoading} = currencyApi.useFetchCurrencyByCodeQuery('USD');
  const {data: eurExchange, isLoading: isEurExchangeLoading} = currencyApi.useFetchCurrencyByCodeQuery('EUR');
  const {monthlyReports} = useAppSelector(state => state.monthlyReportReducer);
  const profit = monthlyReports.reduce((total, {profit}) => total + profit, 0)

  return (
    <section className="h-full ml-[264px] mt-[34px] px-[40px] pb-[130px]">
      <div className="flex justify-between gap-[40px]">
        <h1 className="heading-primary">Home</h1>
        <Link
          className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-purple-400 text-base font-medium text-white transition-opacity duration-300 hover:bg-opacity-[.9]"
          to="/monthly-report/add"
        >
          <Plus/>
        </Link>
      </div>
      <div className="flex mt-[44px]">
        <ProfitBox className="flex-[33.333%] grow-0 pl-0 border-r-[1px]" title="Profit in hryvnia">
          UAH {separateThousandsWithCommas(profit.toFixed(2))}
        </ProfitBox>
        <ProfitBox className="flex-[33.333%] grow-0 border-r-[1px]" title="Profit in dollars">
          USD
          {isUsdExchangeLoading ? (
            '--'
          ) : (
            <> {separateThousandsWithCommas((profit / (usdExchange?.[0]?.rate || 0)).toFixed(2))}</>
          )}
        </ProfitBox>
        <ProfitBox className="flex-[33.333%] grow-0 pr-0" title="Profit in euros">
          EUR
          {isEurExchangeLoading ? (
            '--'
          ) : (
            <> {separateThousandsWithCommas((profit / (eurExchange?.[0]?.rate || 0)).toFixed(2))}</>
          )}
        </ProfitBox>
      </div>
      <MonthlyReportsTable/>
    </section>
  );
}

export default Home;