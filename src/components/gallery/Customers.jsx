import Consumer from '../../assets/consumer.webp';
import Consumer1 from '../../assets/consumer1.webp';
const Customers = () => {
  return (
    <div className="my-32">
      <h2 className="text-3xl text-center mb-10 text-[#000] font-semibold underline underline-offset-8 decoration-[#000]">
        Consumers of the week
      </h2>
      <div className="flex gap-10 justify-center ">
        <div className="relative">
          <img src={Consumer1} alt="" className="h-[450px] " />
          <div className="absolute w-full h-full bg-cover bg-no-repeat  left-0 bottom-10  hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
            <p className="font-bold text-[#f737a7] bg-[#000] italic mt-16 px-6">
              This cozy restaurant has left the best impressions! Hospitable
              hosts, delicious dishes, beautiful presentation, wide wine list
              and wonderful dessert. I recommend to everyone! I would like to
              come back here again and again.
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={Consumer} alt="" className="h-[450px] " />
          <div className="absolute w-full h-full bg-cover bg-no-repeat  left-0 bottom-10  hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
            <p className="font-bold text-[#f737a7] bg-[#000] italic mt-16 px-6 ">
              This cozy restaurant has left the best impressions! Hospitable
              hosts, delicious dishes, beautiful presentation, wide wine list
              and wonderful dessert. I recommend to everyone! I would like to
              come back here again and again.
            </p>
          </div>
        </div>
        <div className="relative">
          <img src={Consumer1} alt="" className="h-[450px] " />
          <div className="absolute w-full h-full bg-cover bg-no-repeat left-0 bottom-10  hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
            <p className="font-bold text-[#f737a7] italic mt-16 px-6 bg-[#000]">
              This cozy restaurant has left the best impressions! Hospitable
              hosts, delicious dishes, beautiful presentation, wide wine list
              and wonderful dessert. I recommend to everyone! I would like to
              come back here again and again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
