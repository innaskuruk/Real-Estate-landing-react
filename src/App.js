import "./App.css";
import Footer from "./componets/footer";
import Residence from "./componets/residence";
import Header from "./componets/header";
import Contact from "./componets/contact";
import Information from "./componets/information";
import Order from "./componets/order";

function App() {
  return (
    <div>
      <Header />
      <Information />
      <Order />
      <Residence />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
