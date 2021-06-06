import React, { useState } from 'react'
import projectData from './ProjectData.js'
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
          <h2 className="sectionHeader">
            Projects
          </h2>
          <h3 className="projSubhead" id="projNumbers">
            <span className="projects" onClick={handleProjects} id="0"> 1 </span> |   <span className="projects" onClick={handleProjects} id="1"> 2 </span> | <span className="projects" onClick={handleProjects} id="2"> 3 </span> | <span className="projects" onClick={handleProjects} id="3"> 4 </span>
          </h3>

        </div>

        <div className="projRowContainer">


          <div className="projCol">
            <img src={item.image} className="projImageCol" id={item.cssId} alt={`${item.name} screenshot.`} />
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

            {item.description.map((item, i) => {
              return <div key={i}>
                <p>{item}</p>
              </div>
            })}

            <div className="iconsContainer">
              <a href={item.github} rel="noreferrer" target="_blank" className="iconLink"> <i className=" devicon-github-original" id="githubLinkIcon"></i></a>

              <a href={item.link} rel="noreferrer" target="_blank" className="iconLink"><HiExternalLink className="reactIcon" /></a>
            </div>

          </div>
        </div>

      </div >
    })}

  </main >

}