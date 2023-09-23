import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/footer'
const Failure = () =>{
    return(
        <>
            <Navbar />
                <div className="failure-cont">
                    <div className="failed">
                        <h1>Payment Failed</h1>
                        
                </div>
                <p className = 'donation-success__contact' > Sorry, your payment was not successful.Please
                    try again. </p>
                <p className='donation-success__contact' > If you have any questions, please contact us at <a href='mailto:hello@zerrorstudios.com'>hello@zerrorstudios.com</a>
                </p>

                {/* <video width="640" height="360" loop autoplay muted style={{backgroundColor:'#f9fbfc'}}>
                    <source src="/fail.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                </video> */}
                <img src='/failure.gif' className='fail_img'></img>
            </div>
            <Footer />
        </>
    )
}
export default Failure