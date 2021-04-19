import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {

  return <div className="menu-nav">

    <ul className="menu-list">

      <li>
        <Link to={'/portfolio'} className="menu-list-link">Home</Link>
      </li>

      <li>
        <Link to={'/about-me'} className="menu-list-link">About Me</Link>
      </li>

      <li>
        <Link to={'/experience'} className="menu-list-link">Experience</Link>
      </li>

      <li>
        <Link to={'/projects'} className="menu-list-link">Projects</Link>
      </li>

      <li>
        <Link to={'/interests'} className="menu-list-link">Interests</Link>
      </li>

      <li>
        <Link to={'/contact'} className="menu-list-link">Contact</Link>
      </li>


    </ul>


  </div>
}

// return <div className="nav-bar">
//     <header>
//       <h1>Islamic Art in the Cleveland Museum of Art</h1>
//     </header>
//     <ul className="nav-bar-links">
//       <li>
//         <Link to={'/project-2/'}>Home</Link>
//       </li>
//       <li>
//         <Link to={'/project-2/textiles'}>Textiles</Link>
//       </li>
//       <li>
//         <Link to={url === '/project-2/decorativearts' ? '/project-2/decorativeart2' : '/project-2/decorativearts'  }>Decorative Arts</Link>
//       </li>
//       <li>
//         <Link to={url === '/project-2/books' ? '/project-2/book2' : '/project-2/books'  }>Books</Link>
//       </li>
//     </ul>

//   </div>