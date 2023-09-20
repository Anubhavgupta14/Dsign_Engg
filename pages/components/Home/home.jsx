
import Navbar from "../navbar/Navbar";
import "@/styles/Home.module.css"
import { useRef } from 'react';
// import { AiFillMail } from 'react-icons/ai'
// import PlainButton from '../button/PlainButton'

import About from "../About/about";
import Faqs from "../Faq/Faq";
import Footer from "../Footer/footer";
import Cards from "../card/card";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const page = ({authtoken}) => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: "#f9fbfc" }}>
      <Navbar authtoken={authtoken||""} />
      <div className="drop-mar" >
        <div className="drop-cont">
          <div className="drop-left">
            <div className="drop-inner">
              <div className="drop-p">The Design Engg</div>
              <div className="drop-p2"> Fastest way to smart <span style={{ color: "#1081fc" }}>solutions</span></div>
              <div className="home_free">
                <div className="home_btn_div"><Link href="/components/CC_machine/cc_machine"><button className="home_btn">
                  Free Trail
                </button></Link></div>
                <div className="arrow_home"><ArrowForwardIcon className="arrow_home"/></div>
              </div>
              <div style={{ height: "372px" }}>
                <Image
                  src="/image.svg"
                  width={500}
                  height={350}
                  alt="Picture of the author"
                />
              </div>

              <div className="drop-info">
                Welcome to our realm of Metallurgical Excellence! Embrace the
                art and science of <span style={{ color: "#1081fc" }}>Continuous Casting Machine (CCM) Solutions</span> , <span style={{ color: "#1081fc" }}>Ladle Calculation</span> & <span style={{ color: "#1081fc" }}>AOD Calculation</span> with us. Dive into the fascinating world
                of metallurgy, where innovation and precision forge the future.
                Explore our expertise, resources, and insights that power the
                heart of industries. Your journey into the realm of metallurgy
                begins here.
              </div>

            </div>
          </div>
        </div>

      </div>

      <div className="home_data">
        <div className="home_datas">
          <h2>1M+</h2>
          <p>community members</p>
        </div>

        <div className="home_datas">
          <h2>150+</h2>
          <p>community groups</p>
        </div>

        <div className="home_datas">
          <h2>50+</h2>
          <p>countries represented</p>
        </div>
      </div>

      <About />
      <Cards />
      <div id='faq' ref={aboutRef}><Faqs /></div>
      <Footer />
    </div>
  );
};

export default page;
