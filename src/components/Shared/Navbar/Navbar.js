import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-evenly">
      <div>
        <Link to='/'><h1>kalla kendra</h1></Link>
      </div>
      <div className="flex gap-5 ">
        <div className="w-36 h-10 rounded-3xl flex items-center justify-center border">
          <Link to="/login">Login</Link>
        </div>
        <div className="w-36 h-10 rounded-3xl flex items-center justify-center border">
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
