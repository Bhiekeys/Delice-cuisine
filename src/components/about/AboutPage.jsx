import { FaUtensils } from 'react-icons/fa';
import Delice from '../../assets/delice4.jpg';

const AboutPage = () => {
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Delice})` }}>
      <div className="flex flex-col items-center justify-center text-center h-full text-white">
        <h2 className="text-6xl font-semibold">Welcome to Delice Cuisine</h2>

        <p className="text-2xl mt-5 w-[600px] ">
          At Delice Cuisine, we take pride in serving delectable dishes made
          with love and passion.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#menu"
            className="mt-8 px-7 py-3 hover:border hover:border-[#f737a7] hover:bg-transparent hover:text-[#f737a7] bg-[#f737a7] hover:bg-[#e968b3] text-xl text-white rounded-full transition-colors duration-300">
            View Gallery
          </a>
          <a
            href="#menu"
            className="mt-8 px-8 py-3 border border-[#f737a7] text-[#f737a7] hover:bg-[#e968b3] text-xl hover:text-[#fff] rounded-full transition-colors duration-300">
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
