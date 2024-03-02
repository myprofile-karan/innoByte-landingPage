import Customers from "./components/Customers/Customers";
import Detail_Bar from "./components/Detail_Bar/Detail_Bar";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import GlobalSection from "./components/GlobalSection/GlobalSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import PlanSection from "./components/PlanSection/PlanSection";

const App = () => {
  return (
    <div className="app position-relative">
      <Header />
      <HeroSection />
      <div className="inner px-3">
        <Detail_Bar />
      </div>
      <Features />
      <PlanSection />
      <GlobalSection />
      <Customers />
      <Footer />
    </div>
  );
};

export default App;
