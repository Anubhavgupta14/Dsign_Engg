import React from 'react'
import History from '../components/Dashboard_history/history'

const dashboard_history = ({token}) => {
  return (
    <>
      <History authtoken={token}/>
    </>
  )
}

export default dashboard_history

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}
