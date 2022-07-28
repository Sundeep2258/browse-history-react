import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <div className="first-three">
        <div className="container">
          <p className="time"> {timeAccessed} </p>
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="domain-title">
            <p className="title"> {title} </p>
            <p className="domain"> {domainUrl} </p>
          </div>
        </div>
        <div className="last-one">
          <div className="btn-container">
            <button className="button" type="button" onClick={onDeleteHistory}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                className="delete-img"
                testid="delete"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
