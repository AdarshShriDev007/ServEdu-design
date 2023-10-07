import Banner from "./cmp/Banner";
import BusinessCart from "./cmp/BusinessCart";
import Footer from "./cmp/Footer";
import FreeTrial from "./cmp/FreeTrial";
import Header from "./cmp/Header";
import InvestInTheWorld from "./cmp/InvestInTheWorld";
import Quate from "./cmp/Quate";
import TrustedWorldwide from "./cmp/TrustedWorldwide";
import WorkWithTools from "./cmp/WorkWithTools";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <WorkWithTools />
      <InvestInTheWorld />
      <TrustedWorldwide />
      <Quate />
      <BusinessCart />
      <FreeTrial />
      <Footer />
    </div>
  );
}

export default App;
