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
      filteredData: [],
      filterSet: "",
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

  onFilterSet = (filterSet) => {
    this.setState({ filterSet });
    switch (filterSet) {
      case "All employees":
        this.setState({ filteredData: this.state.data });
        break;
      case "Ascending":
        const sortedValue = [...this.state.data];
        sortedValue.sort(
          (firstEmployee, secondEmployee) =>
            firstEmployee.salary - secondEmployee.salary
        );
        this.setState({ filteredData: sortedValue });
        break;
      case "Salary over 1000$":
        const filteredData = this.state.data.filter(
          (item) => item.salary > 1000
        );
        this.setState({ filteredData });
        break;
      default:
        alert("filter not found");
    }
  };

  render() {
    const { data, term } = this.state;
    const employees = this.state.data.length;
    const increased = data.filter((item) => item.increase).length;

    let visibleData;
    if (this.state.filteredData.length) {
      visibleData = this.searchEmp(this.state.filteredData, term);
    } else {
      visibleData = this.searchEmp(data, term);
    }

    return (
      <div className="app">
        <AppInfo totalNumberOfEmployees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onSearch={this.onSearch} />
          <AppFilter onFilterSet={this.onFilterSet} />
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
