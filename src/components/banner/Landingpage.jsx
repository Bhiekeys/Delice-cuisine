import { Link } from 'react-router-dom';
import Delice from '../../assets/delice4.jpg';
const Landingpage = () => {
  return (
    <div
      className=" bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${Delice})` }}>
      <div className="flex flex-col items-center justify-center text-center h-full text-white px-2">
        <h1 className="sm:text-6xl text-2xl font-bold ">
          Welcome to Delice Cuisine
        </h1>
        <p className="sm:text-2xl text-lg mt-4 max-w-[600px] ">
          Discover the finest flavors, we are here to put smile on your
          beautiful face with our tasty food.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/order"
            className="mt-8 md:px-7 md:py-3 px-4 py-2 hover:border hover:border-[#f737a7] hover:bg-transparent hover:text-[#f737a7] bg-[#f737a7] hover:bg-[#e968b3] text-base md:text-xl text-white rounded-full transition-colors duration-300">
            View Menu
          </Link>
          <Link
            href="/about"
            className="mt-8 md:px-8 md:py-3 px-4 py-2 border border-[#f737a7] text-[#f737a7] hover:bg-[#e968b3] text-base md:text-xl hover:text-[#fff] rounded-full transition-colors duration-300">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
