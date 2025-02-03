import "../index.css";

const Order = ({
  closeHour,
  openHour,
}: {
  closeHour: number;
  openHour: number;
}) => {
  return (
    <div className="flex flex-col items-center gap-[2.4rem]">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="text-inherit font-inherit border-none text-[1.4rem] font-medium bg-[#edc84b] hover:bg-[#e9bb24] py-[1.4rem] px-[3.2rem] cursor-pointer transition-all duration-200">
        Order
      </button>
    </div>
  );
};

export default Order;
