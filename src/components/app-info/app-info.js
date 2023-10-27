import './app-info.css';

const AppInfo = ({ totalNumberOfEmployees, increased }) => {
  return (
    <div className="app-info">
      <h1>Employee accounting in company N</h1>
      <h2>Total number of employees: {totalNumberOfEmployees}</h2>
      <h2>The bonus will be received: {increased}</h2>
    </div>
  )
}

export default AppInfo;