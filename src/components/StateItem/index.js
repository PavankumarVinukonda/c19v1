import {Link} from 'react-router-dom'
import './index.css'

const StatesItem = props => {
  const {
    stateName,
    stateCode,
    confirmed,
    recovered,
    deceased,
    population,
  } = props

  const active = confirmed - recovered - deceased

  return (
    <li className="states_headings">
      <Link to={`/state/${stateCode}`} className="link">
        <div className="state_name">
          <h1 className="heading">{stateName}</h1>
        </div>
      </Link>

      <div className="headings_container">
        <h1 className="confirmed ">{confirmed}</h1>
      </div>

      <div className="headings_container">
        <h1 className="active">{confirmed === undefined ? null : active}</h1>
      </div>
      <div className="headings_container">
        <h1 className="recovered">{recovered}</h1>
      </div>
      <div className="headings_container">
        <h1 className="deceased">{deceased}</h1>
      </div>
      <div className="headings_container">
        <h1 className="population">{population}</h1>
      </div>
    </li>
  )
}

export default StatesItem
