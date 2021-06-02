import React from 'react'
import { Link } from 'react-router-dom'

import { withRouter } from 'react-router'

function Menu() {

  return <div className="menuNav">

    <ul className="menuList">

      <li>
        <Link to={'/'} className="menuListLink">Home</Link>
      </li>

      <li>
        <Link to={'/about-me'} className="menuListLink">About Me</Link>
      </li>

      <li>
        <Link to={'/experience'} className="menuListLink">Experience</Link>
      </li>

      <li>
        <Link to={'/projects'} className="menuListLink">Projects</Link>
      </li>

    </ul>


  </div>
}

export default withRouter(Menu)

