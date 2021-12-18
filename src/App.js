import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Illustration from "./components/Illustration";
import Workexperiences from "./components/Workexperiences";

import { useEffect } from "react"


function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  });


  return (
    <div className="App">
      
      <Header />
      {/* <Navbar /> */}
      <Illustration />
      <Projects />
      <Workexperiences />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
