import Delice from '../../assets/delice4.jpg';
const Landingpage = () => {
  return (
    <div
      className=" bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${Delice})` }}>
      <div className="flex flex-col items-center justify-center text-center h-full text-white">
        <h1 className="text-6xl font-bold ">Welcome to Delice Cuisine</h1>
        <p className="text-2xl mt-4 w-[600px] ">
          Discover the finest flavors, we are here to put smile on your
          beautiful face with our tasty food.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="/order"
            className="mt-8 px-7 py-3 hover:border hover:border-[#f737a7] hover:bg-transparent hover:text-[#f737a7] bg-[#f737a7] hover:bg-[#e968b3] text-xl text-white rounded-full transition-colors duration-300">
            View Menu
          </a>
          <a
            href="/about"
            className="mt-8 px-8 py-3 border border-[#f737a7] text-[#f737a7] hover:bg-[#e968b3] text-xl hover:text-[#fff] rounded-full transition-colors duration-300">
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
