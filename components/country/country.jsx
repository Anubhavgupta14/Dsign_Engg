
import Navbar from "../navbar/Navbar";
import "@/styles/Home.module.css"
import Footer from "../Footer/footer";
import { useRouter } from "next/navigation";

const page = ({authtoken}) => {
    const router = useRouter();

    const india =()=>{
        router.push("/pricing")
    }

    const outside=()=>{
        router.push("/pricing_outside")
    }

  return (
    <div style={{ backgroundColor: "#f9fbfc" }}>
      <Navbar authtoken={authtoken} />
      <div className="main country_main">
        <h2 className="heading">Select your Country</h2>
        <div className="flex-all country_btn">
            <div>
                <button className="btn_country" onClick={india}>India</button>
            </div>
            <div>
                <button className="btn_country" onClick={outside}>Outside India</button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
