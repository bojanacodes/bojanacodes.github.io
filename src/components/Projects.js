import React, { useState } from 'react'
import projectData from './ProjectData.js'
import { Link } from 'react-router-dom'
import { HiExternalLink } from 'react-icons/hi'


export default function Projects() {

  const [projectSelected, updateProjectSelected] = useState(projectData[0])

  function handleProjects(e) {
    updateProjectSelected(projectData[e.target.id])
  }


  return <main className="section-container">

    {projectSelected.map((item, i) => {
      return <div key={i} className="main-container">

        <div className="proj-row-container">

          <div className="projCol">
            <img src={item.image} id="projImageCol" width="500" />
          </div>

          <div className="projCol" id="projTextCol">

            {/* <div className="header-container">
          <h2 className="section-header">Projects</h2>
        </div> */}

            {/* <div className="proj-subhead-container"> */}
            <h3 className="proj-subhead">
              <span> Projects </span>
            </h3>
            <h3 className="proj-subhead" id="projNumbers">
              <span className="projects" onClick={handleProjects} id="0"> 1 </span> |   <span className="projects" onClick={handleProjects} id="1"> 2 </span> | <span className="projects" onClick={handleProjects} id="2"> 3 </span> | <span className="projects" onClick={handleProjects} id="3"> 4 </span>
            </h3>
            {/* </div> */}

            <h3 className="proj-subhead">{item.name}</h3>

            <div className="iconsContainer">
              {item.icons.map((item, i) => {

                return <div key={i} className="projIcons" >
                  <i className={item} id="icon"></i>

                </div>
              })}
            </div>

            <p className="proj">{item.description}</p>

            <div className="iconsContainer">
              <Link to={{ pathname: item.github }} target="_blank" className="iconLink"> <i className=" devicon-github-original" id="githubLinkIcon"></i></Link>

              <Link to={{ pathname: item.link }} target="_blank " className="iconLink"><HiExternalLink className="reactIcon" /></Link>
            </div>

          </div>
        </div>

      </div >
    })}

  </main >

}