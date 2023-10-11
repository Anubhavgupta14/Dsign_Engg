import React from 'react'
import AOD from "../components/Aod/Aod"

const Aod = ({token}) => {
  return (
    <>
     <AOD authtoken={token}/> 
    </>
  )
}

export default Aod
export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}
