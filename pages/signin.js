import React from 'react'
import Login from "../components/LoginPage/login"

const signin = ({token}) => {
  return (
    <>
      <Login authtoken={token}/>
    </>
  )
}

export default signin

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}