import React from "react"
import "./layout.css"

import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
