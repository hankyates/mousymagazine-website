import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <span className="image avatar">
        <a href="/"><img src={avatar} width={100} height={100} alt="Mousy Magazine Logo" /></a>
      </span>
      <h1>
        My name is <strong>Hank</strong>, and I compose Ambient and Post-Classical music as <strong>Mousy Magazine</strong>
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
