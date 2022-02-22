import React from 'react'

import NavBar from '../components/Custom/NavBar/NavBar'

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar/>
      {children}
    </>
  )
}

export default MainLayout