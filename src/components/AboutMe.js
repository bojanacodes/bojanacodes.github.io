import React from 'react'
import { HiAtSymbol } from 'react-icons/hi'

export default function AboutMe() {

  return <main className="sectionContainer">

    <img src="https://i.imgur.com/O57q0aI.jpeg" alt="photo of me" className="smallerMe" />

    <div className="colDiv">
      <div className="headerContainer">
        <h2 className="sectionHeader">About Me</h2>
      </div>
      <p className="me">
        In my previous role, I worked on media campaigns covering topics from women’s health to employment rights, before becoming more interested in what my tech colleagues were doing: building new features and making bugs vanish. After trying out Python via Udemy, I applied to General Assembly’s Software Engineering Immersive. I am now looking for an entry-level role to channel my boundless enthusiasm for solving problems and trying out new things, and to build on the skills taught on the course.
      </p>
      <p className="me">  At work I am happiest learning and tearing up completed to-do lists. The rest of the time I am happy whenever I am reading, somewhere hot and sunny (ideally by the sea), in the steep seats at the Royal Albert Hall or dining very casually. 🍟
      </p>

      <p className="me">Contact me:</p>
      <div className="iconsContainer" id="contactIcons">
        <a href= "https://github.com/bojanacodes" rel="noreferrer" target="_blank" className="iconLink"> <i className=" devicon-github-original" id="githubLinkIcon"></i></a>

        <a href="https://www.linkedin.com/in/bojana-sarenac" rel="noreferrer"  target="_blank" className="iconLink"> <i className='devicon-linkedin-plain' id="linkedInLinkIcon"></i> </a>

        <a href="mailto: bojanacodes@gmail.com" className="iconLink"> <HiAtSymbol className="reactIcon" /> </a> 

      </div>

    </div>

  </main>


}