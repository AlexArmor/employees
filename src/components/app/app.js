import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: false, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "All employees",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((element) => element.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      id: this.maxId++,
      increase: false,
      rise: false,
    };
    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(
      (item) => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  };

  onSearch = (term) => {
    this.setState({ term });
  };

  filterSet = (items, filter) => {
    switch (filter) {
      case "Ascending":
        return items.filter((item) => item.rise);
      case "Salary over 1000$":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = data.filter((item) => item.increase).length;
    const visibleData = this.filterSet(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo totalNumberOfEmployees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onSearch={this.onSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          deleteItem={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
