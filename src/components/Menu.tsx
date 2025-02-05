import pizzaData from "../data/pizzaData";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-center text-3xl lg:text-4xl font-semibold mb-12 border-t border-b py-6">
        OUR MENU
      </h2>

      <p className="text-center mb-16 text-gray-700 text-lg lg:text-xl max-w-3xl mx-auto">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      {/* Grid com altura ajustada para telas grandes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
        {pizzaData.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            description={item.ingredients}
            price={item.price}
            image={item.photoName}
            soldOut={item.soldOut}
            className="animate-fade-in"
          />
        ))}
      </div>

      <p className="text-center mt-12 mb-8 text-gray-700 text-lg">
        We're open from 12:00 to 22:00. Come visit us or order online.
      </p>

      <div className="text-center">
        <button
          className="bg-[#f8c245] text-black px-12 py-4 text-lg rounded-md 
          hover:bg-[#e5b340] hover:scale-105 
          active:scale-95 
          transition-all duration-300"
        >
          Order
        </button>
      </div>
    </main>
  );
}
