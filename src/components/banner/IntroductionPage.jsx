import Chef from "../../assets/chef.jpg"
const IntroductionPage = () => {
  return (
    <section className="bg-[#eeebeb] py-32 flex justify-center items-center">
      <div className="container mx-auto px-4 w-[40%]">
        <p className=" text-2xl text-gray-700 mb-8">
          Delight your taste buds with our delectable menu inspired by flavors
          from around the world. Whether you're craving mouthwatering shawarma,
          savory fried rice, flavorful jollof rice, or irresistible small chops,
          we have something to satisfy every palate.
        </p>
        <div className="flex justify-center">
          <a
            href="#menu"
            className="bg-[#f737a7] hover:bg-[#ca4f97] text-xl text-white px-6 py-3 rounded-full transition-colors duration-300">
            Explore Our Menu
          </a>
        </div>
      </div>
      <div className="w-[50%]">
        <img src={Chef} className="shadow-xl rounded-lg" />
      </div>
    </section>
  );
};

export default IntroductionPage;
