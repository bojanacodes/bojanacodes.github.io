import React, { useState } from 'react'
import projectData from './ProjectData.js'
import { Link } from 'react-router-dom'
import { HiExternalLink } from 'react-icons/hi'


export default function Projects() {

  const [projectSelected, updateProjectSelected] = useState(projectData[0])

  function handleProjects(e) {
    updateProjectSelected(projectData[e.target.id])
  }


  return <main className="sectionContainer">

    {projectSelected.map((item, i) => {
      return <div key={i} className="mainContainer">

        <div className="projHeadContainer">
          <h3 className="projSubhead">
            Projects
          </h3>
          <h3 className="projSubhead" id="projNumbers">
            <span className="projects" onClick={handleProjects} id="0"> 1 </span> |   <span className="projects" onClick={handleProjects} id="1"> 2 </span> | <span className="projects" onClick={handleProjects} id="2"> 3 </span> | <span className="projects" onClick={handleProjects} id="3"> 4 </span>
          </h3>

        </div>

        <div className="projRowContainer">


          <div className="projCol">
            <img src={item.image} className="projImageCol"  id={item.cssId} alt={`${item.name} screenshot.`} />
          </div>

          <div className="projCol" id="projTextCol">

            <h3 className="projSubhead">{item.name}</h3>

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