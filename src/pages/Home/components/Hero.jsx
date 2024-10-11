import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
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
  );
};

export default Hero;
