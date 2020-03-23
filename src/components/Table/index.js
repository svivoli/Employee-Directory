import React from "react";
import UserRows from "../UserRows";
import "./style.css";

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

  render() {
  return (
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
  )
  }
};

export default Table;