import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Services = () => {
   useEffect(() => {
     Aos.init({ duration: 2000 });
   }, []);
  return (
    <>
      <h1 className="text-white text-3xl text-center font-bold" id="service">SERVICES</h1>
      <div className="flex justify-between  h-fit">
        <div
          className="max-w-md p-8 m-10 text-white border-4 border-indigo-500 shadow-indigo-500 shadow-2xl rounded-lg text-center"
          data-aos="fade-down"
        >
          <ion-icon name="logo-youtube" class="text-6xl mb-4"></ion-icon>
          <h2 className="text-3xl font-bold mb-2">Video Editing Services</h2>
          <div className="text-left">
            <p className="mb-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              facere nemo perferendis illum! Totam sunt explicabo libero
              numquam. Earum quis neque vitae similique quibusdam reprehenderit.
              Praesentium consectetur sapiente aliquid? Sed?
            </p>
          </div>
        </div>
        <div
          className="max-w-md p-8 m-10 text-white border-4 border-indigo-500 shadow-indigo-500 shadow-2xl rounded-lg text-center"
          data-aos="fade-up"
        >
          <ion-icon name="desktop-outline" class="text-6xl mb-4"></ion-icon>
          <h2 className="text-3xl font-bold mb-2">WEB PAGES DEVELOPMENT</h2>
          <div className="text-left">
            <p className="mb-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              facere nemo perferendis illum! Totam sunt explicabo libero
              numquam. Earum quis neque vitae similique quibusdam reprehenderit.
              Praesentium consectetur sapiente aliquid? Sed?
            </p>
          </div>
        </div>
        <div
          className="max-w-md p-8 m-10 text-white border-4 border-indigo-500 shadow-indigo-500 shadow-2xl rounded-lg text-center"
          data-aos="fade-down"
        >
          <ion-icon name="code-slash-outline" class="text-6xl mb-4"></ion-icon>
          <h2 className="text-3xl font-bold mb-2">PROGRAMMING LANGUAGES</h2>
          <div className="text-left">
            <p className="mb-4 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
              facere nemo perferendis illum! Totam sunt explicabo libero
              numquam. Earum quis neque vitae similique quibusdam reprehenderit.
              Praesentium consectetur sapiente aliquid? Sed?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
