import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../Footer/footer'

const dashboard = () => {
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
                <button>
                    Logout
                </button>
            </div>
        </div>

      <Footer/>
    </div>
  )
}

export default dashboard
