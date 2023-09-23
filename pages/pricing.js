import React from 'react'
import Pricing from "../components/Pricing/pricing"

const pricing = ({token}) => {
  return (
    <>
     <Pricing authtoken={token}/> 
    </>
  )
}

export default pricing

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}