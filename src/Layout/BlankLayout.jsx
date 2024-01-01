import React from 'react'
import Header from '../Components/Header/Header'

function BlankLayout({children}) {
  return (
    <div>
      <Header light/>
      {children}
    </div>
  )
}

export default BlankLayout
