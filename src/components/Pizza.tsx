import "../index.css";

type TypePizzaProps = {
  name: string;
  photoName: string;
  ingredients: string;
  price: number;
  soldOut: boolean;
};

const Pizza = ({
  name,
  ingredients,
  photoName,
  price,
  soldOut,
}: TypePizzaProps) => {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
    <img src={photoName} alt={name} />
    <div>
      <h3>{name}</h3>
      <p>{ingredients}</p>

      {/* {pizzaObj.soldOut ? (
        <span>SOLD OUT</span>
      ) : (
        <span>{pizzaObj.price}</span>
      )} */}

      <span>{soldOut ? "SOLD OUT" : price}</span>
    </div>
  </li>
  );
};

export default Pizza;
