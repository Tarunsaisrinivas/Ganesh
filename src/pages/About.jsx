import React from "react";
import hero from '/assets/hero.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="flex m-5 h-screen" id="about" data-aos="zoom-in">
      <div className="p-4 border-blue-400 rounded-xl h-fit  border-r-4  border-b-4">
        <div className="float-left grayscale hover:grayscale-0 shadow-2xl">
          {/* Placeholder image */}
          <img src={hero} alt="Hello" width={200} />
        </div>
      </div>
      <div className="text-white mx-auto float-right p-6 w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde harum
          odio blanditiis corporis ex quibusdam libero repellendus est provident
          quasi voluptatem laudantium alias delectus nemo placeat, dolore,
          facere, ipsa labore. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Repudiandae, ad exercitationem, neque quas, hic
          maiores mollitia possimus a ducimus officiis temporibus nisi
          consectetur tenetur saepe quo cumque! Eos, itaque iste?
        </p>
        <div className="flex p-10 justify-between">
          <button className="px-10 py-2 font-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-md">
            HIRE
          </button>
          <button className="px-10 py-2 font-bold border-indigo-500 border-2 text-white rounded-md">
            RESUME
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
