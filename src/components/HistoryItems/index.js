import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <div className="container">
        <p className="time"> {timeAccessed} </p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="domain-title">
          <p className="title"> {title} </p>
          <p className="domain"> {domainUrl} </p>
        </div>
        <div className="btn-container">
          <button className="button" type="button" onClick={onDeleteHistory}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete-img"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
