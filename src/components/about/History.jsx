import Histry from "../../assets/history.jpeg"
const History = () => {
  return (
    <section id="about" className="bg-gray-100 py-32">
      <div className=" flex justify-around items-center ">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4">Our History</h2>
          <div className="max-w-lg mx-auto">
            <p className="text-lg text-gray-700 text-center">
              Delice Cuisine has been proudly serving the community since 20XX.
              Founded by passionate food enthusiasts, our journey began with a
              small food truck and a vision to share our love for delicious and
              authentic dishes.
            </p>
            <p className="mt-4 text-lg text-gray-700 text-center">
              Over the years, we have grown into a beloved food destination,
              renowned for our quality ingredients, exceptional flavors, and
              warm hospitality. Our commitment to culinary excellence and
              customer satisfaction has earned us a loyal customer base and
              numerous accolades.
            </p>
            <p className="mt-4 text-lg text-gray-700 text-center">
              Today, Delice Cuisine stands as a testament to our passion and
              dedication. We continue to innovate and expand our menu, offering
              an extensive selection of mouthwatering dishes that cater to
              diverse tastes and preferences.
            </p>
            <p className="mt-4 text-lg text-gray-700 text-center">
              We are grateful for the continued support of our customers and
              look forward to serving you for many more years to come. Join us
              on this gastronomic journey as we create lasting memories and
              moments of culinary delight.
            </p>
          </div>
        </div>
        <div>
          <img
            src={Histry}
            alt="history"
            className="rounded-br-[100px] rounded-tl-[100px] h-[700px] "
          />
        </div>
      </div>
    </section>
  );
}

export default History