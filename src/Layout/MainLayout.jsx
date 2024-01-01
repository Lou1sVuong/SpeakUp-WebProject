import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function MainLayout({children}) {
  return (
     <div>
        <Header light />
       <div>{children}</div>
        <Footer dark/>
     </div>
  )
}

export default MainLayout
