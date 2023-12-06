import Navbar from "../../components/navbar/Navbar";
// import MainContent from "./mainContent";
import ProfileLeft from "./profileLeft";
import Footer from "../../components/Footer/footer";
import { useEffect } from "react";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>
                <div className="profile-container">
                    <ProfileLeft scroll={1450}/>
                    <div className="profile-content">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;