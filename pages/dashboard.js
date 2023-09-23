import React from 'react'
import Dashboard from "../components/Dashboard/dashboard"

const dashboard = ({token}) => {
  return (
    <>
      <Dashboard authtoken={token}/>
    </>
  )
}

export default dashboard

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}