import "./App.css";
import Navbar from "./Components/Navbar";
import Beranda from "./Components/Beranda";
import About from "./Components/About";
import Support from "./Components/Support";
import Platforms from "./Components/Platform";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Beranda />
      <About />
      <Support />
      <Platforms />
      <Footer />
    </>
  );
}

export default App;
