import React from 'react'
import Product from "../product/product"
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const page = () => {
  return (
    <div style={{ backgroundColor: "#f9fbfc" }}>
      <h2 className='card_heading'>Our Products</h2>
      <div className='body_card'>
        <div className="card_data">
          <div className="card_datas">
            <div className='card_space'>
              <h2>CCM Solutions</h2>
              <p style={{textAlign:'justify'}}>It presents an innovative Continuous Casting Machine Calculator designed to simplify your problem.</p>
              <Link style={{ width: "120px" }} href="/ccm"><div className='card_p'>Explore <ArrowForwardIcon style={{height:"14px", width:"15px", margin:"0 0 -2px -4px", transform:"translateX(0)", transition:"transform 0.3s ease-in-out" }} /></div></Link>

            </div>
          </div>

          <div className="card_datas">
            <div className='card_space'>
              <h2>Ladle Calculator</h2>
              <p style={{textAlign:'justify'}}>Introducing Ladle Calculator, your go-to solution for precise ladle and pouring calculations.</p>
              <Link style={{ width: "120px" }} href="/ladle"><span className='card_p'>Explore <ArrowForwardIcon style={{height:"14px", width:"15px", margin:"0 0 -2px -4px", transform:"translateX(0)", transition:"transform 0.3s ease-in-out" }}/></span></Link>
            </div>
          </div>

          <div className="card_datas">
            <div className='card_space'>
              <h2>AOD Calculator</h2>
              <p style={{textAlign:'justify'}}>Its your essential partner for accurate AOD (Argon Oxygen Decarburization) calculations.</p>
              <Link style={{ width: "120px" }} href="/"><span className='card_p'>Explore <ArrowForwardIcon className="arrow_new" style={{height:"14px", width:"15px", margin:"0 0 -2px -4px", transform:"translateX(0)", transition:"transform 0.3s ease-in-out" }} /></span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
