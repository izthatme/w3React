import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <div>
      <ul>
        <li>
            <Link to="/">Homes</Link>
        </li>
        <li>
            <Link to="/Abouts">Abouts</Link>
        </li>
        <li>
            <Link to="/Dashboards">Dashboards</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
