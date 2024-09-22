import { Outlet } from 'react-router-dom';

const Page = () => {
  return (
    <>
      Home page
      <Outlet />
    </>
  );
};

export default Page;
