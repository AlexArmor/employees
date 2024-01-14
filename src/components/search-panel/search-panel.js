import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const value = e.target.value;
        this.setState({term: value});
        this.props.onSearch(value);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Find employee" 
                onChange={this.onUpdateSearch}
                value={this.state.term}/>
        )
    }
}

export default SearchPanel;