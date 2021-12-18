import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Illustration from "./components/Illustration";
import Workexperiences from "./components/Workexperiences";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Illustration />
      <Projects />
      <Workexperiences />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
