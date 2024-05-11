import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

const Header = () => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div
      className={`${
        show && 'rounded-b-3xl pb-6'
      } flex flex-col md:flex-row bg-[#fff] items-center justify-around z-10 fixed  w-full px-5 md:px-0 sm:justify-between md:justify-around shadow-lg py-5`}>
      <div className="hidden md:flex items-center">
        <img src={Logo} alt="logo" className="h-[30px]" />
        <div className="flex items-center text-[#f737a7]">
          <h2 className="text-2xl font-semibold"> DeLiCeCuiSiNe</h2>
        </div>
      </div>
      <div className={`md:hidden flex justify-between items-center w-full `}>
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="h-[30px]" />
          <div className="flex items-center text-[#f737a7]">
            <h2 className="text-2xl font-semibold"> DeLiCeCuiSiNe</h2>
          </div>
        </div>
        <div className="md:hidden ml-3 md:ml-0">
          {show ? (
            <GrClose className="text-[30px]" onClick={showHandler} />
          ) : (
            <AiOutlineMenu className="text-[30px]" onClick={showHandler} />
          )}
        </div>
      </div>

      <div>
        <nav className="hidden md:flex gap-7 cursor-pointer  text-[19px] text-[#383135]">
          {nav.map((n) => {
            const { id, path, pathName } = n;
            return (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#f737a7] '
                    : 'text-[#141414]  hover:text-[#f737a7] '
                }>
                {pathName}
              </NavLink>
            );
          })}
        </nav>
      </div>
      {/* Navbar links for small screens */}
      <div
        className={`lg:hidden ease-in-out ${
          show ? 'flex flex-col space-y-5 w-full ml-5 mt-10 ' : 'hidden '
        }`}>
        {nav.map((n) => {
          const { id, path, pathName } = n;
          return (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#f737a7] underline underline-offset-4 decoration-[1px] decoration-[#f737a7] '
                  : 'text-[#141414]  hover:text-[#f737a7] '
              }>
              {pathName}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

const nav = [
  {
    id: 1,
    path: '/',
    pathName: 'Home',
  },
  {
    id: 2,
    path: '/about',
    pathName: 'About',
  },
  {
    id: 3,
    path: '/order',
    pathName: 'Order',
  },
  {
    id: 4,
    path: '/gallery',
    pathName: 'Gallery',
  },
  {
    id: 5,
    path: '/call',
    pathName: 'Contact',
  },
];

export default Header;
