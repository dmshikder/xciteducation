import React from "react";
import bghome from "../../Assets/bghome.png";
import homeBannerP1 from "../../Assets/homeBannerP1.png";
import homeBannerP2 from "../../Assets/homeBannerP2.png";
import speaker1 from "../../Assets/speaker1.png";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="top-0 absolute bg-cover">
        <img className="w-screen h-screen" src={bghome} alt="" />
      </div>
     <div className="flex">
     <div className="relative z-10">
        <img src={homeBannerP1} alt="" />
      </div>
      <div className="relative flex ml-auto">
        <img src={homeBannerP2} alt="" />
      </div>
     </div>
     <div className="relative -mt-96">
        <div>Welcome! to kalla kendra</div>
        <div><button>start</button></div>
     </div>
     <div className="relative">
        <img src={speaker1} alt="" />

     </div>

    </>
  );
};

export default Home;
