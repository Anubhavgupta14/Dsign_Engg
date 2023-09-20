
import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";
import Link from "next/link";
import $ from "jquery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PlainButton from "../PlainButton/plainbutton";
import DropdownButton from "../Dropdown/dropdown";
import Profile from "../profile/Profile"



// import '../styles/navbar.css'

const Navbar = ({authtoken}) => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);
  const [drop_ham, setdrop_ham] = useState(false);
  
  
  const handleClick = () => {
    setClick(!click);
  };
  const handleClick2 = () => {
    setClick(!click2);
  };

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleClickdrop = () => {
    setdrop_ham(!drop_ham);
    setOpen(!open);
  };

  const excludedDivRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        !event.target.closest('.body') &&
        !excludedDivRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, []);

  const open_menu = () => {
    event.stopPropagation();
    setOpen(!open);
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("scroll", changeColor);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <nav className="body">
      <div className={color ? (open ? "navbar" : "navbar scrolled-navbar") : "navbar"} id="navbar">
        <div className="navbar-left normal">
          <div><Link href={"/"}>
            <h2 className="logo">The Design Engg</h2>
          </Link>
          </div>

          <div className="navrel pos-rel">
            <Link href={"/"}>
              <div className="nav nav1">Home</div>
            </Link>

            <div className="nav nav4" onClick={open_menu}>
              Product
              <div className={open ? "arrow-cont2 null flex-all down" : "arrow-cont2 null flex-all"}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path></svg></div>
            </div>


            <Link href={"/components/Pricing/pricing"}>
              <div className="nav nav3">Pricing</div>
            </Link>

            <Link href={"/components/contact_us/contact"}>
              <div className="nav nav2">Contact</div>
            </Link>
          </div>
          
          <div className="navbar_button">
            <div className="menu-btn">
              <Link href="/components/CC_machine/cc_machine">
                <button className="nav_login2">
                  Get Started Its - Free
                </button>
              </Link>
            </div>
            <div className={authtoken!='' ? "menu-btn dis_none":"menu-btn"}>
              <Link href="/components/LoginPage/login">
                <button className="nav_login">
                  Login / Signup
                </button>
              </Link>
            </div>
            <div className={authtoken!='' ? "menu-btn":"menu-btn dis_none"}>
              <Profile/>
            </div>
          </div>
        </div>





        <div className={click ? "navbar-right" : "navbar-right display-none"}>
          <div className="navrel pos-rel res">
            <Link href={"/"}>
              <div className="nav nav1">Home</div>
            </Link>

            <div className="nav nav4" onClick={open_menu}>
              Product
              <div className={open ? "arrow-cont2 null flex-all down" : "arrow-cont2 null flex-all"}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path></svg></div>
            </div>


            <Link href={"/components/Pricing/pricing"}>
              <div className="nav nav3">Pricing</div>
            </Link>

            <Link href={"/components/contact_us/contact"}>
              <div className="nav nav2">Contact</div>
            </Link>

            {/* <Link href={"/components/LoginPage/login"}>
              <div className="nav nav3">Login</div>
            </Link> */}

            <div className="menu-btn res-btn">
              <Link href="/components/CC_machine/cc_machine">
                <PlainButton text="Get Started- Its free" />
              </Link>
            </div>
            <div className="menu-btn res-btn">
              <Link href="/components/contact_us/contact">
                <PlainButton text="Login" />
              </Link>
            </div>



          </div>

          <div className="navrel pos-rel normal flex-all">
            {/* <Link href="/components/LoginPage/login" className="nav">
              Login
            </Link> */}
            {/* <div className="menu-btn">
              <Link href="/components/CC_machine/cc_machine">
              <button className="nav_login2">
                  Get Started Its - Free
                </button>
              </Link>
            </div>
            <div className="menu-btn">
              <Link href="/components/LoginPage/login">
                <button className="nav_login">
                  Login / Signup
                </button>
              </Link>
            </div> */}
          </div>
        </div>
        <div className="hamburger">
          <div>
            <Link href={"/"}>
              <h2 className="logo">The Design Engg</h2>
            </Link>
          </div>
          <div onClick={handleClick} className={open ? "ham-pos res-nav" : "ham-pos"}>
            {click ? (
              <CloseIcon size={20} style={{ color: "black" }} />
            ) : (
              <MenuIcon size={20} style={{ color: "black" }} />
            )}
          </div>
        </div>
      </div>

      <div
        className={
          open
            ? "drop-menu drop-display-none"
            : "drop-menu"
        }
      >

        <div onClick={handleClickdrop} className="ham-pos d_none ham_2">
          {click ? (
            <CloseIcon size={20} style={{ color: "black" }} />
          ) : (
            <MenuIcon size={20} style={{ color: "black" }} />
          )}
        </div>

        <div ref={excludedDivRef} className="drop-details">
          <h2>CCM Solution</h2>
          <p>Welcome to our realm of Metallurgical Excellence! Embrace the
            art and science of Ladle Calculations and Continuous Casting
            Machine (CCM) Solutions with us. Dive into the fascinating world
            of metallurgy, where innovation and precision forge the future.
            Explore our expertise, resources, and insights that power the
            heart of industries. Your journey into the realm of metallurgy
            begins here.</p>
          <Link href="/components/CC_machine/cc_machine"><button className="button">Try Now</button></Link>
        </div>
        <div className="drop-details">
          <h2>Ladle Calculator</h2>
          <p>Welcome to our realm of Metallurgical Excellence! Embrace the
            art and science of Ladle Calculations and Continuous Casting
            Machine (CCM) Solutions with us. Dive into the fascinating world
            of metallurgy, where innovation and precision forge the future.
            Explore our expertise, resources, and insights that power the
            heart of industries. Your journey into the realm of metallurgy
            begins here.</p>
          <Link href="/components/Ladle/ladle"><button className="button">Try Now</button></Link>
        </div>
        <div className="drop-details">
          <h2>AOD Vessel Calculator</h2>
          <p>Welcome to our realm of Metallurgical Excellence! Embrace the
            art and science of Ladle Calculations and Continuous Casting
            Machine (CCM) Solutions with us. Dive into the fascinating world
            of metallurgy, where innovation and precision forge the future.
            Explore our expertise, resources, and insights that power the
            heart of industries. Your journey into the realm of metallurgy
            begins here.</p>
          <Link href="/"><button className="button">Try Now</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}
