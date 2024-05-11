import { Link } from "react-router-dom";
import Chef from "../../assets/chef.jpg"
const IntroductionPage = () => {
  return (
    <section className="bg-[#eeebeb] py-32 flex flex-col md:flex-row justify-center items-center">
      <div className="container mx-auto px-4 w-full md:w-[40%]">
        <p className="text-lg md:text-2xl text-gray-700 mb-8">
          Delight your taste buds with our delectable menu inspired by flavors
          from around the world. Whether you're craving mouthwatering shawarma,
          savory fried rice, flavorful jollof rice, or irresistible small chops,
          we have something to satisfy every palate.
        </p>
        <div className="flex justify-center">
          <Link
            href="#menu"
            className="bg-[#f737a7] hover:bg-[#ca4f97] text-lg md:text-xl text-white px-4 py-2 md:px-6 md:py-3 rounded-full transition-colors duration-300">
            Explore Our Menu
          </Link>
        </div>
      </div>
      <div className="md:w-[50%] w-full mt-10 px-4  ">
        <img src={Chef} className="shadow-xl rounded-lg" />
      </div>
    </section>
  );
};

export default IntroductionPage;
