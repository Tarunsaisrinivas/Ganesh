import About from "./About";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Portfolio from "./Portfolio";
import Services from "./Services";
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000});

  },[]);
  return (
    <div className="p-10 w-full h-screen home " data-aos="fade-in">
      <div className="bg-hero-pattern bg-no-repeat  h-screen">
        <h3 className="text-zinc-600 font-bold text-5xl mx-auto">I'm a</h3>
        <br />
        <h3 className="text-gray-200 font-bold text-7xl font-[poppins] mx-auto ">
          FULL STACK <br />
          SOFTWARE <br />
          DEVELOPER
        </h3>
        <button className="p-3 m-10 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-md">
          Previous Projects
        </button>
      </div>
      <About  />
      <Portfolio />
      <Services />
    </div>
  );
};

export default Home;
