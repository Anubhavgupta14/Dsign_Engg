
import React,{useState} from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/footer";


const page = () => {
  return (
    <div>
      <Navbar />
      <div className="body_pricing">
        <section className="pricing-plans">
          <div className="pricing-card basic">
            <div className="heading">
              <h4>BASIC</h4>
              <p>CCM Solutions</p>
            </div>
            <p className="price">
              FREE
            </p>
            <ul className="features">
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >CCM Solutions</strong> Full Access
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Login</strong> Dashboard
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Free</strong> Downloads
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Unlimited</strong> Time
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >24/7</strong> support
              </li>
            </ul>
            <button className="cta-btn">SELECT</button>
          </div>
          <div className="pricing-card standard">
            <div className="heading">
              <h4>STANDARD</h4>
              <p>CCM Solutions & Ladle Calulator</p>
            </div>
            <p className="price">
            &#8377; 500
              <sub>/month</sub>
            </p>
            <ul className="features">
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >CCM Solutions</strong> Full Access
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Ladle Calculator</strong> Full Access
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Free </strong>Downloads
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Unlimited</strong> Time
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Login</strong> Dashboard
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >24/7</strong> support
              </li>
            </ul>
            <button className="cta-btn">SELECT</button>
          </div>
          <div className="pricing-card premium">
            <div className="heading">
              <h4>PREMIUM</h4>
              <p>CCM Solutions, Ladle Calculator & AOD Calculator</p>
            </div>
            <p className="price">
            &#8377;1000
              <sub>/month</sub>
            </p>
            <ul className="features">
            <li>
                <i className="fa-solid fa-check"></i>
                <strong >CCM Solutions</strong> Full Access
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Ladle Calculator</strong> Full Access
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >AOD Calculator</strong> Full Access
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Free </strong>Downloads
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Unlimited</strong> Time
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >Login</strong> Dashboard
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <strong >24/7</strong> support
              </li>
            </ul>
            <button className="cta-btn">SELECT</button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default page;
