import React from 'react'
import Signup from "../components/signup/Signup"

const signup = ({token}) => {
  return (
    <>
      <Signup authtoken={token}/>
    </>
  )
}

export default signup

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}
