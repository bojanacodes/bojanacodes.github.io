import React, { useState } from 'react'
import projectData from './ProjectData.js'
import { Link } from 'react-router-dom'

export default function Projects() {

  const [projectSelected, updateProjectSelected] = useState(projectData[0])


  function handleProjects(e) {
    updateProjectSelected(projectData[e.target.id])
  }




  return <main className="proj-container">


    {projectSelected.map((item, i) => {
      return <div key={i} className="main-container">

        <div className="header-container">
          <h2 className="section-header">Projects</h2>
        </div>

        <div className="proj-subhead-container">
          <h3 className="proj-subhead">
            <span className="projects" onClick={handleProjects} id="0">Project 4 </span> |   <span className="projects" onClick={handleProjects} id="1">Project 3 </span> | <span className="projects" onClick={handleProjects} id="2">Project 2 </span> | <span className="projects" onClick={handleProjects} id="3">Project 1 </span>
          </h3>
        </div>

        <div className="proj-row-container">
          <div className="projCol">
            <img src={item.image} id="projImage" width="500" />
          </div>

          <div className="projCol">

            <h3 className="proj">{item.name}</h3>

            <div className="iconsContainer">
              {item.icons.map((item, i) => {

                return <div key={i} className="projIcons" >
                  <i className={item} id="icon"></i>

                </div>
              })}
            </div>


            <p className="proj">{item.description}</p>

            <div className="iconsContainer" id="secondIcons">
              <Link to={{ pathname: item.github }} target="_blank" > <i className=" devicon-github-original" id="projGithub"></i></Link>

              <Link to={{ pathname: item.link }} target="_blank "><img src="https://i.imgur.com/R9cNyG5.png" className="linkIcon" /></Link>
            </div>

          </div>
        </div>

      </div >
    })}







  </main >

}