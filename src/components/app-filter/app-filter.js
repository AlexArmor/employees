import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = ["All employees", "Ascending", "Salary over 1000$"];

  const onFilter = (e) => {
    const value = e.target.textContent;
    props.onFilterSelect(value);
  };

  return (
    <div className="btn-group">
      {buttonsData.map((name) => (
        <button
          key={name}
          className={`btn ${
            props.filter === name ? "btn-light" : "btn-outline-light"
          }`}
          type="button"
          onClick={onFilter}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default AppFilter;
