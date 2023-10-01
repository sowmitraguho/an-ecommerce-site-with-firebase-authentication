import React from "react";

const Card = ({img, title, description}) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-none">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary uppercase">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
