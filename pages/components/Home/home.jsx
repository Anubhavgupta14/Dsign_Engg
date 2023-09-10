"use client";
import Navbar from "../navbar/Navbar";
import "@/styles/Home.module.css"
import { useRef } from 'react';
// import { AiFillMail } from 'react-icons/ai'
// import PlainButton from '../button/PlainButton'

import About from "../About/about";
import Faqs from "../Faq/page";
import Footer from "../Footer/footer";
import Cards from "../card/page";


const page = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="drop-mar">
        <div className="drop-cont">
          <div className="drop-left">
            <div className="drop-inner">
              <div className="drop-p">Dsign Engg</div>
              <div className="drop-p2"> Fastest way to your problems</div>

              <div className="drop-info">
                Welcome to our realm of Metallurgical Excellence! Embrace the
                art and science of Ladle Calculations and Continuous Casting
                Machine (CCM) Solutions with us. Dive into the fascinating world
                of metallurgy, where innovation and precision forge the future.
                Explore our expertise, resources, and insights that power the
                heart of industries. Your journey into the realm of metallurgy
                begins here.
              </div>
            </div>
          </div>
          {/* <div className="drop-right">
            <div className="drop-img-cont ">
              <div className="inner-img">
                <img src="https://res.cloudinary.com/dhlsvwpny/image/upload/v1692183349/vertical-shot-adult-industrial-worker-uniforms-melting-metal-factory_1_bqzduy.jpg" />
              </div>
            </div>
          </div> */}
        </div>
        <div className="extra-cont flex-all">
          <div className="left-artist"></div>
        </div>
      </div>
      <About />
      <Cards/>
      <div id='faq' ref={aboutRef}><Faqs /></div>
      <Footer />
    </>
  );
};

export default page;
