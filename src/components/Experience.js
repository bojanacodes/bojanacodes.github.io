import React from 'react'

export default function Experience() {

  return <main className="section-container">

    {/* <img src="https://i.imgur.com/O57q0aI.jpeg" alt="photo of me" className="smaller-me" /> */}

    <div className="col-div">

      <div className="header-container">
        <h2 className="section-header">Experience</h2>
      </div>

      <p>
        I completed General Assembly&apos;s Software Engineering Immersive: a 12-week intensive course on web development. I learned how to build full-stack applications through daily stand-ups, lectures, labs and projects.
      </p>

    </div>

    <div className="col-div">
      <div className="header-container">
        <h2 className="section-header">Skills & Technologies</h2>
      </div>


      <div className="skills-grid">


        <div className="skills-row">

          <div className="icon-pair">
            <i className="devicon-javascript-plain"></i>
            <label className="icon-label">JavaScript</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-python-plain"></i>
            <label className="icon-label">Python</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-flask-original"></i>
            <label className="icon-label">Flask</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-npm-original-wordmark"></i>
            <label className="icon-label">npm</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-postgresql-plain"></i>
            <label className="icon-label">PostgreSQL</label>
          </div>

        </div>

        <div className="skills-row">

          <div className="icon-pair">
            <i className="devicon-react-original"></i>
            <label className="icon-label">React</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-html5-plain"></i>
            <label className="icon-label">HTML</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-css3-plain"></i>
            <label className="icon-label">CSS</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-webpack-plain"></i>
            <label className="icon-label">Webpack</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-mongodb-plain"></i>
            <label className="icon-label">MongoDB</label>
          </div>

        </div>

        <div className="skills-row">

          <div className="icon-pair">
            <i className="devicon-express-original"></i>
            <label className="icon-label">Express</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-nodejs-plain"></i>
            <label className="icon-label">Node.js</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-sqlalchemy-plain"></i>
            <label className="icon-label">SQLAlchemy</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-git-plain"></i>
            <label className="icon-label">Git</label>
          </div>

          <div className="icon-pair">
            <i className="devicon-github-original"></i>
            <label className="icon-label">GitHub</label>
          </div>

        </div>
      </div>

    </div>


  </main>
}