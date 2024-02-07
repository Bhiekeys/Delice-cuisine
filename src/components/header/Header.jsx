import {  NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';

const Header = () => {
  return (
    <div className="flex justify-between px-20 items-center py-5 z-40 fixed w-full bg-[#fff] shadow-xl">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-[30px]" />
        <div className="flex items-center text-[#f737a7]">
          <h2 className="text-2xl font-semibold"> DeLiCeCuiSiNe</h2>
        </div>
      </div>
      <div>
        <nav className="flex gap-7 cursor-pointer  text-[19px] text-[#383135]">
          <NavLink to="/" className="hover:text-[#f737a7]">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-[#f737a7]">
            About
          </NavLink>
          <NavLink to="/order" className="hover:text-[#f737a7]">
            Order
          </NavLink>
          <NavLink to="/gallery" className="hover:text-[#f737a7]">
            Gallery
          </NavLink>
          <NavLink className="hover:text-[#f737a7] ">Contact</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
