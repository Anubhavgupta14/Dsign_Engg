"use client";
import React from 'react'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
// import { FaLinkedin } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'
import { AiFillMail } from 'react-icons/ai'
import { SiDiscord } from 'react-icons/si'
import Link from 'next/link';
import PlainButton from '../PlainButton/page'



const Footer = () => {
    const icons = [
        {
            svg: <BsTwitter />,
        },
        {
            svg: <RiInstagramFill />,
        },
        {
            svg: <IoLogoLinkedin />,
        },
        {
            svg: <BsYoutube />,
        },
        {
            svg: <SiDiscord />,
        },

    ]
    return (
        <>
            <div className="footer-cont">
                <div className="footer-title">
                    <div className="ha-inner footer-inner">Join Dsign Engg</div>
                    <div className="ha-inner footer-inner">Community</div>
                </div>
                <div className="footer-p">Gain exclusive access to the hottest
                    news, drops and collectibles</div>
                <div className="email-cont">

                    <div className="flex-all footer-email-cont email-anime">
                        <input placeholder='example@gmail.com' />
                        <div className="input-anime">
                            <AiFillMail /> <div className="email-text"> Email Address</div>
                        </div>
                        <div className="white-btn" >
                            {/* <div className="subscribe flex-all">Subscribe</div> */}
                            {/* <Button text='Subscribe' /> */}
                            <PlainButton text="Subscribe" />                            
                        </div>

                    </div>
                </div>
                <div className="h-box-cont">
                    <div className="h-box">
                        <div className="footer-logo-cont">
                        <Link href={"/"}><h2>Dsign Engg</h2></Link>
                        </div>

                        <div className="icons-cont">

                            {
                                icons.map((icon, index) => {
                                    return (
                                            <div className="icons" key={index}>{icon.svg}</div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="terms-cont">
                        <div className="terms">Terms Of Use</div>
                        <div className="terms">Privacy Policy</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer