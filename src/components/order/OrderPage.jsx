const foodItems = [
  {
    id: 1,
    name: 'Shawarma',
    description: 'Delicious shawarma filled with flavorful ingredients.',
    price: '$8.99',
  },
  {
    id: 2,
    name: 'Fried Rice',
    description: 'Aromatic fried rice with a mix of vegetables and spices.',
    price: '$9.99',
  },
  {
    id: 3,
    name: 'Jollof Rice',
    description: 'Authentic jollof rice cooked to perfection.',
    price: '$10.99',
  },
  {
    id: 4,
    name: 'Small Chops',
    description: 'Assorted small chops for a delightful snacking experience.',
    price: '$6.99',
  },
  {
    id: 5,
    name: 'Burger',
    description: 'Assorted small chops for a delightful snacking experience.',
    price: '$6.99',
  },
  {
    id: 6,
    name: 'Fruit Parfait',
    description: 'Assorted small chops for a delightful snacking experience.',
    price: '$6.99',
  },
  {
    id: 7,
    name: 'Cocktail',
    description: 'Assorted small chops for a delightful snacking experience.',
    price: '$7.99',
  },
  {
    id: 8,
    name: 'BabieQ',
    description: 'Assorted small chops for a delightful snacking experience.',
    price: '$7.99',
  },
  {
    id: 9,
    name: 'Chin chin',
    description: 'Assorted small chops for a delightful snacking experience.',
    price: '$7.99',
  },
  {
    id: 10,
    name: 'Cake Parfait',
    description: 'Assorted small chops for a delightful snacking experience.',
    price: '$7.99',
  },
  {
    id: 11,
    name: 'Cake',
    description: 'Assorted small chops for a delightful snacking experience.',
    price: '$97.99',
  },
];
const OrderPage = () => {
  return (
    <div className="px-10 py-8  my-20">
      <h2 className="text-5xl font-bold mb-4 text-center ">Our Menu</h2>
      <p className="text-center text-2xl font-medium">
        Try any with no regrets!
      </p>
      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foodItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-bold">{item.price}</span>
              <button className="bg-[#f737a7] text-white px-4 py-2 rounded ">
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
