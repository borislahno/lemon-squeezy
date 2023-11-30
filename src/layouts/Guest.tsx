import { Outlet } from 'react-router-dom';

const Guest: React.FC = () => {

  return (
    <main className="flex flex-col w-full flex-auto">
      <Outlet/>
    </main>
  );
}

export default Guest;