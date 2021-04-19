import React from 'react'
import { Link } from 'react-router-dom'



export default function AboutMe() {

  // console.log('Smaller me', SmallerMe)

  return <main className="section-container">


    {/* <img src={SmallerMe} alt="photo of me" className ="smaller-me"></img> */}

    <img src="https://i.imgur.com/O57q0aI.jpeg" alt="photo of me" className="smaller-me" />

    <div className="col-div">
      <div className="header-container">
        <h2 className="section-header">About Me</h2>
      </div>
      <p>
        In my previous role, I worked on media campaigns covering topics from women’s health to employment rights, before becoming more interested in what my tech colleagues were doing: building new features and making bugs vanish. After trying out Python via Udemy, I applied to General Assembly’s Software Engineering Immersive. I am now looking for an entry-level role to channel my boundless enthusiasm for solving problems and trying out new things, and to build on the skills taught on the course. I love learning and tearing up completed to-do lists - and I might be the only person who still hasn’t had enough of office Zoom quizzes.
      </p>


      <p>Contact me:</p>
      <div className="contact-container"> 
        <Link to={{ pathname: 'https://github.com/bojanacodes' }} target="_blank" > <i className=" devicon-github-original"></i></Link>

        <Link to={{ pathname: 'https://www.linkedin.com/in/bojana-sarenac' }} target="_blank" > <i className='devicon-linkedin-plain'></i> </Link>

        <a href="mailto: bojanacodes@gmail.com"> <img src="https://i.imgur.com/5Fz7xsQ.png" id="email" /> </a>

      </div>




    </div>

  </main>


}