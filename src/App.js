import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Join } from "./components/Join";
import { Plans } from "./components/Plans";
import { Programs } from "./components/Programs";
import { Reason } from "./components/Reasons";
import { Testimonials } from "./components/Testimonials";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
