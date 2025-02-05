import pizzaData from "../data/pizzaData";
import MenuItem from "./MenuItem";

export default function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-center text-3xl font-semibold mb-8 border-t border-b py-4 text-gray-800">
        OUR MENU
      </h2>

      <p className="text-center mb-12 text-gray-700 max-w-2xl mx-auto">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        {pizzas.map((item, index) => (
          <MenuItem
            key={item.name}
            name={item.name}
            description={item.ingredients}
            price={item.price}
            image={item.photoName}
            soldOut={item.soldOut}
            className={`animate-fade-in-up delay-${index * 100}`}
          />
        ))}
      </div>

      <p className="text-center mt-12 mb-8 text-gray-700">
        We're open from 12:00 to 22:00. Come visit us or order online.
      </p>

      <div className="text-center">
        <button
          className="bg-[#f8c245] text-black px-8 py-3 rounded-md 
          hover:bg-[#e5b340] hover:scale-105 
          active:scale-95 
          transition-all duration-300 
          shadow-lg hover:shadow-xl"
        >
          Order
        </button>
      </div>
    </main>
  );
}
