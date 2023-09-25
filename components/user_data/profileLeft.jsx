import React, { useState, useEffect } from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsInstagram, BsPeople, BsLinkedin, BsTwitter, BsDownload } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai'
import { MdOutlinePersonOutline, MdOutlineSecurity, MdOutlineAnalytics } from 'react-icons/md';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify'
import { fetchCurrentUser } from '../../libs/fetchUser'

const ProfileLeft = () => {
    const router = useRouter();
    const links = [
        {
            title: 'General',
            icon: <MdOutlinePersonOutline />,
            link: '/dashboard'
        },
        {
            title: 'Security',
            icon: <MdOutlineSecurity />,
            link: '/dashboard_security'
        },
        {
            title: 'Orders',
            icon: <BsPeople />,
            link: '/dashboard_orders'
        }
    ];

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        about: '',
        addressLine1: '',
        addressLine2: '',
        aboutMyself: '',
    });
    useEffect(() => {
        const token = localStorage.getItem('JWT');


        const getUserData = async () => {
            try {

                console.log("profileleft mai token",token)

                const data = await fetchCurrentUser(token);
                console.log(data, "data fetched");
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
            } catch (error) {

                toast.error(error.message || "Some error occurred while fetching data");
                toast.error("Try logging in again")
                router.push("/signin")
            }
        };

        getUserData();
    }, []);

    return (
        <div className="shadow h-auto w-15">
            <div className="user-details-profile">
                <div className="user-image-profile">
                    <img
                        src={userData.profilePic || "/defaultProfilePic.jpg"}
                        alt="user"
                    />
                    {/* <div className="photo-icon flex-all">
                        <AiOutlineCamera />
                    </div> */}
                </div>
                <div className="user-name-profile">
                    {userData.name}
                </div>
                
                <div className='social-icons'>
                    {userData.linkedin && <Link target="_blank" href={userData.linkedin || ""}>
                        <div className='social-icon'>

                            <BsLinkedin />
                        </div>
                    </Link>
                    }

                    {userData.linkedin && <div className='profile__line'></div>}
                    {userData.twitter &&
                        <Link target="_blank" href={userData.twitter || ""}>
                            <div className='social-icon'>
                                <BsTwitter />
                            </div>
                        </Link>
                    }
                    {userData.twitter && <div className='profile__line'></div>}
                    {userData.instagram && <Link target="_blank" href={userData.instagram || ""}>
                        <div className='social-icon '>
                            <BsInstagram />
                        </div>
                    </Link>}
                    {userData.instagram && <div className='profile__line'></div>
                    }

                    {userData.website && <Link target="_blank" href={userData.website || ""}>

                        <div className='social-icon aiicon'>
                            <AiOutlineLink />
                        </div>

                    </Link>
                    }
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