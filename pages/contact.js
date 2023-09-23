import React from 'react'
import Contact from "../components/contact_us/contact"

const contact = ({token}) => {
  return (
    <>
    <Contact authtoken={token}/>
    </>
  )
}

export default contact

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}
