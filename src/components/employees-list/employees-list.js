import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

const EmployeesList = ({ data, deleteItem }) => {
    return (
        <ul className="app-list list-group">
            {data.map(item => {
                return (<EmployeesListItem key={item.id} {...item} deleteItem={() => deleteItem(item.id)} />)
            })}
        </ul>
    )
}

export default EmployeesList;