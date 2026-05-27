import Footer from "./components/Footer";
import Navbar from "./components/layout/navbar";
import Amenities from "./components/sections/Amenities";
import Contact from "./components/sections/Contact";
import Department from "./components/sections/Departmen";
import Gallery from "./components/sections/Galery";
import Hero from "./components/sections/Hero";
import Location from "./components/sections/Location";
import WhatsappButton from "./components/whatsappButton";
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
        <Location />
        <Contact />
        <Footer />
      </main>
      <WhatsappButton />
    </>
  );
}

export default App;
