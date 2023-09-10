import React from 'react'
import Product from "../product/page"

const page = () => {
  return (
    <div>
      <h2 className='heading'
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
      data-aos-offset="0"
      data-aos="fade-up"
      >Our Products</h2>
    <div className='body_card'
    data-aos-easing="ease-in-out" id='faq'
    data-aos-duration="800"
    data-aos-offset="0"
    data-aos="fade-up"
    >
      <Product text={"CCM Solutions"} para={"CCM Solutions presents an innovative CCM Calculator designed to simplify your customer communication management."} route={"/components/CC_machine"} price={"FREE"}/>
      <Product text={"Ladle Calculator"} para={"Introducing Ladle Calculator, your go-to solution for precise ladle and pouring calculations."} route={"/components/Ladle"} price={"PAID"}/>
      <Product text={"AOD Calculator"} para={"Presenting AOD Calculator, your essential partner for accurate AOD (Argon Oxygen Decarburization) calculations."} route={"/"} price={"PAID"}/>
    </div>
    </div>
  )
}

export default page
