import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/careers">Careers</Link>
  </nav>
)

export default Nav
