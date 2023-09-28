import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="">
      
      <section className="navbar bg-primary text-primary-content rounded-lg  justify-between">
        <div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src="../../../image/logo.png" alt="" srcset="" />
        </Link>
        </div>
        <div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/about" className="btn btn-ghost normal-case text-xl">
          About
        </Link>
        <Link to="/orders" className="btn btn-ghost normal-case text-xl">
          Order
        </Link>
        <Link to="/shop" className="btn btn-ghost normal-case text-xl">
          Shop
        </Link>
        <Link to="/login" className="btn btn-ghost normal-case text-xl">
          LogIn
        </Link>
        <Link to="/signup" className="btn btn-ghost normal-case text-xl">
          SignUp
        </Link>
        </div>
      </section>
      
    </section>
  );
};

export default Header;
