import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'


import './styles/style.scss'

const App = () => (
  <BrowserRouter>

    <Menu />

    <Switch>
      <Route exact path="/portfolio" component={Home}/>
      <Route exact path="/portfolio/about-me" component={AboutMe}/>
      <Route exact path="/portfolio/experience" component={Experience}/>
      <Route exact path="/portfolio/projects" component={Projects}/>

    </Switch>

    <Footer />

  </BrowserRouter>
)

// const Home = () => {
//   return <h1>Hello world</h1>
// }

export default App