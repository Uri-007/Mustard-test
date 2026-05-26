import Navbar from "./components/layout/navbar";
import Amenities from "./components/sections/Amenities";
import Department from "./components/sections/Departmen";
import Gallery from "./components/sections/Galery";
import Hero from "./components/sections/Hero";
import "./styles/tabs.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Amenities />
        <Department />
        <Gallery />
      </main>
    </>
  );
}

export default App;
