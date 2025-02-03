import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Header from "../components/Header";

function App() {
  return (
    <div className="max-w-[80rem] mx-auto flex flex-col items-center gap-[4.8rem]">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

export default App;
