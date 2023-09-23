import React from 'react'
import CCM from "../components/CC_machine/cc_machine"
const ccm = ({token}) => {
  return (
    <>
     <CCM authtoken={token}/> 
    </>
  )
}

export default ccm

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}