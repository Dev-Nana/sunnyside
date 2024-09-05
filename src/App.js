import { Header } from "./components/header/Header";
import { Banner } from "./components/banner/Banner";
import { Section } from "./components/section/Section";
import { Client } from "./components/client/Client";
import { Photos } from "./components/photos/Photos";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Section></Section>
      <Client></Client>
      <Photos></Photos>
      <Footer></Footer>
    </div>
  );
}

export default App;
