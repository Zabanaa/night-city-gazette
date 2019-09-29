import React from 'react'
import '../styles/header.sass'
import { Link } from 'react-router-dom'

const Header = () => (
    <header className="logo-header">
      <h1> 
        <Link to="/">ハッカーニュース</Link>
      </h1>
    </header>
)
export default Header
