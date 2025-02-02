import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Header from "../components/Header";
import "../index.css";

function App() {
  return (
    <div className="max-w-[80rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-[4.8rem]">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

export default App;
