import React from "react";
import Image from "next/image";
import Link from "next/link";

const hero = () => {
  return (
    <div className="hero_main">
      <div className="hero_left">
        <div className="left_content">
          <h2 className="hero_heading">The Design Engg</h2>
          <p className="hero_sub">Precise Your <span style={{ color: "#1081fc" }}>Calculations</span></p>
          <p className="hero_para">
            Elevate your metallurgical calculations with our cutting-edge
            scientific calculator. Experience accelerated precision in <span style={{ color: "#1081fc" }}>Continuous Casting Machine (CCM)</span>
            , <span style={{ color: "#1081fc" }}>Ladle</span>, and <span style={{ color: "#1081fc" }}>AOD</span> calculations.
            Streamline your processes and enhance efficiency in metallurgy like
            never before
          </p>
          <div className="hero_btn">
          <Link href="/ccm">
            <button className="hero_btn2">Get Started Its - Free</button>
          </Link>
          <Link href="/country">
            <button className="hero_btn1">Pricing</button>
          </Link>
          </div>
        </div>
      </div>

      <div className="hero_right">
        <div className="right_content">
          <Image
            className="hero_img"
            src="/hero2.png"
            width={650}
            height={700}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default hero;
