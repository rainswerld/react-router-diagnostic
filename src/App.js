import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Contact from './components/Contact'
import Careers from './components/Careers'
import JobListing from './components/JobListing'
import Nav from './components/Nav'

const jobOpenings = [
  'Full Stack Developer',
  'UX Designer',
  'QA Analyst'
]

const App = () => (
  <React.Fragment>
    <Nav />
    <h1>Welcome to a React App!</h1>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="/contact" component={Contact}/>
    <Route exact path="/careers" render={() => (
      <Careers jobOpenings={jobOpenings} />)}
    />
    <Route path="/careers/:listing" component={JobListing}/>
  </React.Fragment>
)

export default App
