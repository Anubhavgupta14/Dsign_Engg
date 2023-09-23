import Link from 'next/link'
import React, { useState, useEffect,useRef } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { TiTick } from 'react-icons/ti';


const DonationSuccess = (props) => {
    const { order_id, amount } = props.props;
    const router = useRouter();
    const [time, setTime] = useState(10);

    useEffect(() => {
        let a = 10;
        setInterval(() => {
            if (a >= 0) {
                setTime(a);
                a--;
            }
        }, 1000);
        setTimeout(() => {
            router.push('/');
        }, 10000);
    }, [])

    

    return (
        <div className='thank-cont'>
            {/* <div className="tlc">
                <div className="t-logo">
                    <Image src={"/check.gif"} fill />
                    <div className="t-tick flex-all">
                        <TiTick />
                    </div>
                </div>
            </div> */}
            <div className="tlc t-logo-check">
            <Image src={"/check.gif"} fill  loading='lazy' loop='false'/>
            </div>

            <div className="trc">
                <div className="t-text">
                    <h1>Thanks for  donation</h1>
                    <p>Your donation of <span>₹{amount}</span> has been successfully processed.</p>
                    <p>Your order id is <span>{order_id}</span></p>
                    <p>You will be redirected to the home page in <span>{time}</span> seconds</p>
                    <Link href="/">
                        <p className="donation-success__btn">Go to home page</p></Link>
                    <p className='donation-success__contact'>For any queries, please contact us at <span>
                        <a href="mailto:contact@rss.org">contact@rss.org</a>
                    </span>
                    </p>
                </div>
                </div>
                
        </div>
    )
}

export default DonationSuccess