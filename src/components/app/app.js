import { Component } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import EmployeesList from "../employees-list/employees-list"
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John C.', salary: 800, increase: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, id: 3 }
      ],
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(element => element.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = { name, salary, id: this.maxId, increase: false, };
    this.maxId = this.maxId + 1;
    this.setState(({ data }) => {
      return {
        data: [...data, newItem],
      }
    })
  }

  render() {
    const { data } = this.state;

    return <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} deleteItem={this.deleteItem} />
      <EmployeesAddForm addItem={this.addItem} />
    </div>;
  }
}

export default App;
