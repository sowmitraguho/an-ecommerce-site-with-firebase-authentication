import React from "react";
import { Carousel } from "react-daisyui";
import CarouselBanner from "../CarouselBanner/CarouselBanner";

const Home = () => {
  return (
    <div>
      <CarouselBanner></CarouselBanner>
      <div id="classification" className="flex justify-between my-6">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-3 rounded-none">
          <figure>
            <img className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:grayscale"
              src="../../../image/card1.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-3 rounded-none">
          <figure>
            <img className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
              src="../../../image/card2.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-3 rounded-none">
          <figure>
            <img className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
              src="../../../image/card3.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-3 rounded-none">
          <figure>
            <img className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
              src="../../../image/card4.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
      <div id="voucher" className="mx-3 my-6">
        <img src="../../../image/voucher.jpg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Home;
