import React, { useState, useEffect } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsInstagram, BsPeople, BsLinkedin, BsTwitter, BsDownload } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai'
import { MdOutlinePersonOutline, MdOutlineSecurity, MdOutlineAnalytics } from 'react-icons/md';
import { useRouter } from 'next/router';
import { IoMdDocument } from "react-icons/io";
import Link from 'next/link';
import { BiSolidPurchaseTag } from "react-icons/bi";
import { toast } from 'react-toastify'
import { fetchCurrentUser } from '../../libs/fetchUser'

const ProfileLeft = ({scroll}) => {
    const router = useRouter();
    const [plan,setplan] = useState("Free")
    const [show,setshow] = useState(false)

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        about: '',
        addressLine1: '',
        addressLine2: '',
        aboutMyself: '',
        role: "user",
        ladle_ticket: 0,
        aod_ticket:0
    });
    useEffect(() => {
        const token = localStorage.getItem('JWT');


        const getUserData = async () => {
            try {

                console.log("profileleft mai token",token)

                const data = await fetchCurrentUser(token);
                console.log(data, "data fetched from profile left");
                const { error } = data;
                console.log(error, "error getting user data");
                if (error) {
                    toast.error(error + "op")
                    toast.error("Try logging in again")
                    localStorage.removeItem("token");
                    router.push("/signin")
                    return;
                }
                let user = data;
                const convertedUser = {
                    ...user,
                    dob: user.dob ? user.dob.split('T')[0] : '',
                };
                setUserData(convertedUser);

                if(convertedUser.aod_ticket !=0 && convertedUser.ladle_ticket!=0){
                    setplan("Premium")
                    setshow(true)
                }
                else if(convertedUser.aod_ticket==0 && convertedUser.ladle_ticket!=0){
                    setplan("Regular")
                    setshow(true)
                }
                else if(convertedUser.ladle_ticket==0 && convertedUser.aod_ticket!=0){
                    setplan("Premium")
                    setshow(true)
                }
                
            } catch (error) {

                toast.error(error.message || "Some error occurred while fetching data");
                toast.error("Try logging in again")
                router.push("/signin")
            }
        };

        getUserData();
    }, []);

    const links = [
        {
          title: 'My Profile',
          icon: <MdOutlinePersonOutline />,
          link: '/dashboard',
        },
        {
          title: 'Settings',
          icon: <MdOutlineSecurity />,
          link: '/dashboard_security',
        },
        // Step 2: Conditionally add "My Orders" based on role
        userData.role == "admin"
          ? {
              title: 'Admin',
              icon: <BsPeople />,
              link: '/admin_dashboard',
            }
          : null,
        {
          title: 'My Orders',
          icon: <BiSolidPurchaseTag />,
          link: '/orders',
        },
        {
          title: 'My Documents',
          icon: <IoMdDocument />,
          link: '/document',
        },
      ].filter(Boolean);

    const [isSticky, setIsSticky] = useState(false);

    return (
        <div className={isSticky?"shadow h-auto w-15 fixed dis":"shadow h-auto w-15 fixed"}>
            <div className="user-details-profile">
                <div className="user-image-profile">
                    <img
                        src={userData.profilePic || "/profile.png"}
                        alt="user"
                    />
                </div>
                <div className="user-name-profile">
                    {(userData.name).toUpperCase()}

                </div>
                <div>
                    <p>Plan - {plan}</p>
                </div>
                
                <div className='profile-links'>

                    {links.map((link, index) => (
                        <Link href={link.link} key={index}>

                            <div
                                className={`user-links ${router.pathname === link.link ? 'user-link-active' : ''
                                    }`}
                                key={index}
                            >
                                <div className='user-link-icon'>{link.icon}</div>
                                <p className=''>
                                    {link.title}
                                </p>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default ProfileLeft;