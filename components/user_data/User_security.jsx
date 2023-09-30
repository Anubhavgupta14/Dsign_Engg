import Navbar from "../../components/navbar/Navbar";
// import MainContent from "./mainContent";
import ProfileLeft from "./profileLeft";
import Footer from "../../components/Footer/footer";
import { useEffect } from "react";

const Layout = ({ children }) => {
    // useEffect(() => {
    //     const userLoggedIn = localStorage.getItem("JWT");
    //     if (!userLoggedIn) {
    //         window.location.href = "/login";
    //     }
    // }, [])


    return (
        <>
            <Navbar />
            <div>
                <div className="profile-container">
                    <ProfileLeft scroll={150} />
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