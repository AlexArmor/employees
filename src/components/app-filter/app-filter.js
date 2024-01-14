import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  onFilter = (e) => {
    const value = e.target.textContent;
    this.props.onFilterSet(value);
  };

  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-light" type="button" onClick={this.onFilter}>
          All employees
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={this.onFilter}
        >
          Ascending
        </button>
        <button
          className="btn btn-outline-light"
          type="button"
          onClick={this.onFilter}
        >
          Salary over 1000$
        </button>
      </div>
    );
  }
}

export default AppFilter;
