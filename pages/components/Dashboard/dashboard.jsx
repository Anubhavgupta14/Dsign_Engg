import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/footer'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const dashboard = () => {
  const router = useRouter();

  const handlelogout = async()=>{
    const ok = await fetch('/api/users/signout/route');
    console.log(ok)
    toast.success("Successfully Logged Out")
    router.push("/components/LoginPage/login")
    window.location.reload();
  }


  return (
    <div>
      <Navbar/>
        <div className='body_dash'>
            <div className='heading_dash'>
            <h2 className='head_dash'>Dashboard</h2>
            <h2 className='head_dash2'>Welcome User</h2>
            </div>
            <div className='photo'>
                
            </div>
            <div className='details'>
                <div className='p_detail'>
                    <p><span className='head_p'>Name:</span> Anubhav</p>
                </div>
                <div className='p_detail'>
                    <p><span className='head_p'>Email:</span> test@gmail.com</p>
                </div>
                <button onClick={handlelogout}>
                    Logout
                </button>
            </div>
        </div>

      <Footer/>
    </div>
  )
}

export default dashboard
