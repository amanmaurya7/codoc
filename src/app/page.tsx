import ButtonGradient from "../components/ui/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import Header from "../components/HeaderHero";
import Footer from "../components/Footer";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>

      <ButtonGradient />
      
    </>
  );
};

export default App;
