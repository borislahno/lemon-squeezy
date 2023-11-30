import { Link, NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Home } from '../../assets/svg/home.svg';
import { ReactComponent as File } from '../../assets/svg/file.svg';
import DropDownMenu from './components/DropDownMenu';

const SideMenu: React.FC = () => {

  const linkClassName = ({isActive}: { isActive: boolean }) =>
    twMerge(
      'flex items-center gap-[12px] px-[12px] w-full h-[40px] rounded-md text-sm font-medium text-black-500 [&>svg]:text-grey-300',
      'hover:bg-grey-50',
      isActive && 'text-purple-400 bg-grey-50 [&>svg]:text-purple-400'
    )

  return (
    <div className="fixed flex flex-col h-full w-[264px] p-[24px]">
      <Link className="inline-block w-fit ml-[16px]" to="/">
        <Logo/>
      </Link>
      <nav className="mt-[50px] mb-[40px]">
        <ul>
          <li>
            <NavLink className={linkClassName} to="/">
              <Home/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClassName} to="/monthly-report/add">
              <File className="mr-[2px]"/>
              Report
            </NavLink>
          </li>
        </ul>
      </nav>
      <DropDownMenu/>
      <hr className="w-full h-[1px] mb-[50px]"/>
    </div>
  );
}

export default SideMenu;