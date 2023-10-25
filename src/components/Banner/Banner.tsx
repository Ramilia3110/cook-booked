import React from "react";
import "./styles.scss";
import glass from "../../assets/glass.png";
import cup from "../../assets/cup.png";
import bottle from "../../assets/bottle.png";
import Logo from "../Logo/Logo";

const Banner = () => {
  return (
    <div className="banner">
      <div className="logo-container">
        {" "}
        <Logo />
      </div>

      <div className="banner-container">
        <h1 className="banner-title">enjoy</h1>
        <div className="banner-img cup">
          <img src={cup} alt="" />
        </div>
        <div className="banner-img bottle">
          <img src={bottle} alt="" />
        </div>
        <div className="banner-img glass">
          <img src={glass} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
