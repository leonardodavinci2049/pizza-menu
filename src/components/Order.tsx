import "../index.css";

const Order = ({ closeHour, openHour }: { closeHour: number; openHour: number }) => {
  return (
    <div >
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button >Order</button>
    </div>
  );
};

export default Order;
