import Analytics from "./Components/Analytics";
import Blog from "./Components/Blog";
import Faq from "./Components/Faq";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Freetrial from "./Components/Freetrial";
import { Header } from "./Components/Header";
import Hero from "./Components/Hero";
import Partners from "./Components/Partners";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Partners />
      <Features />
      <Project />
      <Analytics />
      <Faq />
      <Blog />
      <Freetrial />
      <Footer />
    </div>
  );
}

export default App;
