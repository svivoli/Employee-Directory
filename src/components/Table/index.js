import React from "react";
import SearchArea from "../SearchArea";
import UserRows from "../UserRows";
import "./style.css";
import API from "../../utils/API";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchedUsers: [],
      handleSearch: event => {
        const filter = event.target.value;
        const searchResults = this.state.users.filter(item => {
          let values = Object.values(item)
          .join("")
          .toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ searchedUser: searchResults });
      }
    }
  }

  componentDidMount() {
    API.search().then(res => {
      const employees = res.data.results;
      this.setState({ users: employees, searchedUsers: employees });
    })
  }

  render() {
  return (
    <div>
      <SearchArea handleSearch={this.state.handleSearch} />
      <table>
          <thead>
              <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>DOB</th>
              </tr>
          </thead>
          <UserRows users={this.state.searchedUsers} /> 
      </table>
    </div>
  )
  }
};

export default Table;