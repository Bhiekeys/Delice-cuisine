import Chips from '../../assets/chips.jpg';
import Friedrice from '../../assets/friedrice.jpg';
import Jollof from '../../assets/jollof.jpg';
import Shawarma from '../../assets/shawarma.jpg';
const galleryImages = [
  {
    type: Chips,
    title: 'Chicken and chips',
  },
  {
    type: Friedrice,
    title: 'Friedrice and Chicken',
  },
  {
    type: Jollof,
    title: 'Jollof rice and chicken',
  },
  {
    type: Shawarma,
    title: 'Shawarma',
  },
  {
    type: Chips,
    title: 'Chicken and chips',
  },
  {
    type: Friedrice,
    title: 'Friedrice and Chicken',
  },
  {
    type: Chips,
    title: 'Chicken and chips',
  },
  {
    type: Friedrice,
    title: 'Friedrice and Chicken',
  },
  {
    type: Jollof,
    title: 'Jollof rice and chicken',
  },
  {
    type: Shawarma,
    title: 'Shawarma',
  },
  {
    type: Jollof,
    title: 'Jollof rice and chicken',
  },
  {
    type: Shawarma,
    title: 'Shawarma',
  },
];
const Gallerypage = () => {
  return (
    <div className="container mx-auto py-8 mt-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Food Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative">
        {galleryImages.map((data, index) => (
          <div key={index} className="h-[300px] bg-[#e968b3] rounded-s-3xl">
            <img
              src={data.type}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover rounded h-[200px]"
            />
            <h2 className="text-2xl mt-4 font-semibold text-center">
              {data.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallerypage;
