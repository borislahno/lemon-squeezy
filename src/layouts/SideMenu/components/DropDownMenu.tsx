import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext/userContext';
import { ReactComponent as Dots } from '../../../assets/svg/dots.svg';
import { ReactComponent as Plus } from '../../../assets/svg/plus.svg';
import { ReactComponent as Book } from '../../../assets/svg/book.svg';
import { ReactComponent as Help } from '../../../assets/svg/help.svg';
import { ReactComponent as SignOut } from '../../../assets/svg/sign-out.svg';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

const DropDownMenu: React.FC = () => {
  const {logout, userLogin} = useContext(UserContext);

  return (
    <Menu as="div" className="relative mb-[20px] mt-auto">
      <Menu.Button
        className="flex items-center gap-[10px] w-full h-[40px] px-[12px] rounded-md hover:bg-grey-50 text-sm font-medium text-black-300"
      >
        <div className="flex items-center justify-center flex-[24px] grow-0 shrink-0 h-[24px] bg-grey-400 font-semibold text-white rounded-full">
          {userLogin[0]?.toUpperCase() || 'U'}
        </div>
        {userLogin || "User"}
        <Dots className="ml-auto"/>
      </Menu.Button>
      <Menu.Items
        className="absolute z-[50] bottom-[50px] left-0 w-[232px] rounded-md bg-white py-[8px] dropdown-shadow"
      >
        <Menu.Item>
          <Link className={twMerge('dropdown-link text-grey-300')} to="/monthly-report/add">
            <Plus/>
            Add new report
          </Link>
        </Menu.Item>
        <hr className="w-full h-[1px] my-[8px]"/>
        <Menu.Item>
          <Link className="dropdown-link" to="/guide">
            <Book/>
            Guides
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className="dropdown-link" to="/about-us">
            <Help/>
            About Us
          </Link>
        </Menu.Item>
        <hr className="w-full h-[1px] my-[8px]"/>
        <Menu.Item>
          <button className="dropdown-link" onClick={logout} type="button">
            <SignOut/>
            Sign Out
          </button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default DropDownMenu;