import Pizza from "./Pizza";
import "../index.css";
import pizzaData from "../data/pizzaData";
const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="flex flex-col items-center gap-16">
      <h2 className="inline-block py-4 border-t-2 border-b-2 border-current text-[2.4rem] uppercase tracking-[3px] font-medium">
        Our Menu
      </h2>
      {numPizzas > 0 ? (
        <>
          <p className="text-[1.5rem] text-center leading-[1.6] w-4/5">
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="list-none grid grid-cols-2 gap-[4.8rem]">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p className="text-[1.5rem] text-center leading-[1.6] w-4/5">
          We're still working on our menu. Please come back later :)
        </p>
      )}
    </main>
  );
};

export default Menu;
