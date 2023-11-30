import { Outlet } from 'react-router-dom';
import SideMenu from './SideMenu/SideMenu';

const Logged: React.FC = () => {

  return (
    <main className="relative">
      <div className="fixed top-0 left-0 w-full h-[2px] bg-orange"/>
      <SideMenu/>
      <Outlet/>
    </main>
  );
}

export default Logged;