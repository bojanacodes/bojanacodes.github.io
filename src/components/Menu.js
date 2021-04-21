import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {

  return <div className="menuNav">

    <ul className="menuList">

      <li>
        <Link to={'/portfolio'} className="menuListLink">Home</Link>
      </li>

      <li>
        <Link to={'/portfolio/about-me'} className="menuListLink">About Me</Link>
      </li>

      <li>
        <Link to={'/portfolio/experience'} className="menuListLink">Experience</Link>
      </li>

      <li>
        <Link to={'/portfolio/projects'} className="menuListLink">Projects</Link>
      </li>

    </ul>


  </div>
}

