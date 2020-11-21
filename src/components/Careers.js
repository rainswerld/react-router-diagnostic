import React from 'react'
import { Link } from 'react-router-dom'

const Careers = props => {
  return (
    <React.Fragment>
      <h2>Work for us!</h2>
      <ul> Here are the available positions in our company:
        {props.jobOpenings.map(job => (
          <li key={job}><Link to={'/careers/' + job}>{job}</Link></li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default Careers
