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
    <li className="flex gap-[3.2rem]">
      <img
        src={photoName}
        alt={name}
        className="w-[12rem] aspect-square self-start"
      />
      <div className="flex flex-col gap-[0.8rem] py-[0.4rem]">
        <h3 className="text-[2rem] font-normal">{name}</h3>
        <p className="text-[1.4rem] font-light italic mb-auto">{ingredients}</p>
        <span className="block text-[1.6rem]">
          {soldOut ? "SOLD OUT" : price}
        </span>
      </div>
    </li>
  );
};

export default Pizza;
