import React from 'react'
import Ladle from "../components/Ladle/ladle"

const ladle = ({token}) => {
  return (
    <>
     <Ladle authtoken={token}/> 
    </>
  )
}

export default ladle
export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}
