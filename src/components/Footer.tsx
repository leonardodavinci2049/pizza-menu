import "../index.css";
import Order from "./Order";

const OPEN_HOUR: number = 12;
const CLOSE_HOUR: number = 22;

// Função helper com tipo de retorno explícito
const checkIsOpen = (currentHour: number): boolean => {
  return currentHour >= OPEN_HOUR && currentHour <= CLOSE_HOUR;
};

const Footer = () => {
  const hour: number = new Date().getHours();
  const isOpen: boolean = checkIsOpen(hour);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={CLOSE_HOUR} openHour={OPEN_HOUR} />
      ) : (
        <p>
          We're happy to welcome you between {OPEN_HOUR}:00 and {CLOSE_HOUR}:00.
        </p>
      )}
    </footer>
  );
};

export default Footer;
