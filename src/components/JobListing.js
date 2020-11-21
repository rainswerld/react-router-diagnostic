import React from 'react'
import { Link } from 'react-router-dom'

const JobListing = props => (
  <React.Fragment>
    <h2>{props.job}</h2>
    <p>This position is the best one. - Former Employee</p>
    <Link to='/careers'>Back to Careers</Link>
  </React.Fragment>
)

export default JobListing
