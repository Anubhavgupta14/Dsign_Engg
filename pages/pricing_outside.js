import React from 'react'
import Pricing_outside from "../components/Pricing/pricing_outside"

const pricing = ({token}) => {
  return (
    <>
     <Pricing_outside authtoken={token}/> 
    </>
  )
}

export default pricing

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}