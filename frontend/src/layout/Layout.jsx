import React from 'react'
import Header from './header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header/>
      <main className="min-h-screen grow">
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
