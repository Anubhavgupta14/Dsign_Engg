import React from 'react'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
// import { FaLinkedin } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io5'
import { AiFillMail } from 'react-icons/ai'
import { SiDiscord } from 'react-icons/si'
import Link from 'next/link';
import PlainButton from '../PlainButton/plainbutton'



const Footer = () => {
    const icons = [
        {
            svg: <RiInstagramFill />,
        },
        {
            svg: <IoLogoLinkedin />,
        },
        {
            svg: <BsYoutube />,
        }
    ]
    return (
        <>
            <div className="footer-cont">
                <div className="footer-title">
                    <div className="ha-inner footer-inner">Join The Design Engg Community</div>
                    
                </div>
                <div className="footer-p">Gain exclusive access to offers and updates</div>
                <div className="email-cont">

                    <div className="flex-all footer-email-cont email-anime">
                        <input placeholder='example@gmail.com' />
                        <div className="input-anime">
                            <AiFillMail /> <div className="email-text"> Email Address</div>
                        </div>
                        <div className="white-btn" >
                            {/* <div className="subscribe flex-all">Subscribe</div> */}
                            {/* <Button text='Subscribe' /> */}
                            <button className='footer_btn'>Subscribe</button>
                        </div>

                    </div>
                </div>
                <div className="h-box-cont">
                    <div className="h-box">
                        <div className="footer-logo-cont">
                            <Link href={"/"}><h2>The Design Engg</h2></Link>
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

                    <div className='footer_subline'>
                        <div>
                            <p className="p_sign">
                                © <span data-year>2023</span> The Design Engg. All rights reserved.
                            </p>
                        </div>
                        <div className="terms-cont">
                            <div className="terms">Terms Of Use</div>
                            <div className="terms">Privacy Policy</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer