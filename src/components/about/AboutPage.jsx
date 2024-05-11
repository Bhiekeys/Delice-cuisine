import { FaUtensils } from 'react-icons/fa';
import Delice from '../../assets/delice4.jpg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Delice})` }}>
      <div className="flex flex-col items-center justify-center text-center h-full text-white">
        <h2 className="sm:text-6xl text-2xl font-bold">
          Welcome to Delice Cuisine
        </h2>

        <p className="sm:text-2xl text-lg mt-4 max-w-[600px] ">
          At Delice Cuisine, we take pride in serving delectable dishes made
          with love and passion.
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="/gallery"
            className="mt-8 md:px-7 md:py-3 px-4 py-2 hover:border hover:border-[#f737a7] hover:bg-transparent hover:text-[#f737a7] bg-[#f737a7] hover:bg-[#e968b3] text-base md:text-xl text-white rounded-full transition-colors duration-300">
            View Gallery
          </Link>
          <Link
            to="/order"
            className="mt-8 md:px-8 md:py-3 px-4 py-2 border border-[#f737a7] text-[#f737a7] hover:bg-[#e968b3] text-base md:text-xl hover:text-[#fff] rounded-full transition-colors duration-300">
            Order Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
