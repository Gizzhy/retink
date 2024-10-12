import React from "react";
import "../styles/hero.css";
import search from "../../../assets/icons/search.svg";
import dp from "../../../assets/images/dp.svg";
import toggle from "../../../assets/icons/toggle.svg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-section1">
          <p>Hey James !</p>
          <p>Lets create something awesome today ✨💫</p>
          <button>Start Creating</button>
        </div>
        <div className="hero-section2">
          <select id="cars" name="cars">
            <option value="zara ventures">Zara ventures</option>
            <option value="nike">Nike</option>
            <option value="nike">Adidas</option>
          </select>
          <div>
            <p className="">
              You should have more engagement by 6pm today, try posting then. 📆
            </p>
            <p className="">
              Try our SEO optimization tool to increase engagement by 40% 🔥
            </p>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="hero-mobile">
        <div className="hero-nobile-1">
          <img src={toggle} alt="toggle" />
          <select id="cars" name="cars">
            <option value="zara ventures">Zara ventures</option>
            <option value="nike">Nike</option>
            <option value="nike">Adidas</option>
          </select>
          <img src={dp} alt="dp" />
        </div>
        <div className="hero-mobile-2">
          <p>Hey James !</p>
          <p>Lets create something awesome today ✨💫</p>
        </div>
        <div className="mobile-search-a">
          <img src={search} alt="coin" className="input-icon4" />
          <input
            type="text"
            placeholder="Search for templates, projects, etc"
            className="mobile-search"
            name="form"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
