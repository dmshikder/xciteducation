import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center pt-5 gap-7 ml-20">
      <div>
        <Link to='/'><h1 className="font-aclonica text-4xl text-white">kalla kendra</h1></Link>
      </div>
      <div className="flex gap-6">
        <div><Link className="font-bold text-white" to="/discover">Discover</Link></div>
        <div><Link className="font-bold text-white" to="/livestreams">Livestreams</Link></div>
        <div><Link className="font-bold text-white" to="/jobs">Jobs</Link></div>
      </div>
      <div className="flex gap-5 ">
        <div className="w-36 h-10 rounded-3xl flex items-center justify-center border">
          <Link className="font-bold text-white" to="/login">Login</Link>
        </div>
        <div className="w-36 h-10 rounded-3xl flex items-center justify-center border">
          <Link className="font-bold text-white" to="/signup">Sign Up</Link>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
