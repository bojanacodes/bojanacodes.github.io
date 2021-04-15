import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Menu from './components/Menu'
import AboutMe from './components/AboutMe'


import './styles/style.scss'

const App = () => (
  <BrowserRouter>

    <Menu />

    <Switch>
      <Route exact path="/portfolio" component={Home}/>
      <Route exact path="/about-me" component={AboutMe}/>

    </Switch>

  </BrowserRouter>
)

// const Home = () => {
//   return <h1>Hello world</h1>
// }

export default App