import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <div style={{background:"var(--black)", overflow: "hidden"}}>
        <Header/>
        </div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout