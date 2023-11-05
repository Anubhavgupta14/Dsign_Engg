import React from 'react'
import Country from "../components/country/country"

const country = ({token}) => {
  return (
    <>
     <Country authtoken={token}/> 
    </>
  )
}

export default country

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}