import React from "react";
import { Carousel } from "react-daisyui";
import CarouselBanner from "../CarouselBanner/CarouselBanner";
import Card from "../Card/Card";

const Home = () => {
  const Collection = [{
    id:1,
    image: "../../../image/collection1.jpg",
    title: "North star cuted",
    description: 
    "Here goes the trendiest lifestyle selection to redefine all your moves! Ensuring a look unlike any other, brimming with coolness."
  },
  {
    id:2,
    image: "../../../image/collection2.jpg",
    title: "Your Go-to Accessories",
    description: 
    "Shop the most stylish accessories! Find everything from belts, shoe care kits to classy bags from fabulously sought after brands!"
  },
  {
    id:3,
    image: "../../../image/collection3.jpg",
    title: "RUNTASTIC SPIRIT",
    description: 
    "Find the perfect athletic shoes with endless energy to fit your performances &amp; show the world that 'Impossible is Nothing'!"
  },
  
]
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
      <div className="mx-3 flex justify-between">
      {
        Collection.map(item => {
          return (
            <Card img={item.image} title={item.title} description={item.description}></Card>
          )
        })
      }
      </div>
      
    </div>
  );
};

export default Home;
