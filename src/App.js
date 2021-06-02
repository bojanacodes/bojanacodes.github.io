import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'


import './styles/style.scss'

const App = () => (
  <HashRouter>

    <Menu />

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about-me" component={AboutMe}/>
      <Route path="/experience" component={Experience}/>
      <Route path="/projects" component={Projects}/>

    </Switch>

    {/* <Footer /> */}

  </HashRouter>
)

// const Home = () => {
//   return <h1>Hello world</h1>
// }

export default App