import React from "react";
import SearchArea from "../SearchArea";
import UserRows from "../UserRows";
import "./style.css";
import API from "../../utils/API";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      searchedEmployees: [],
      handleSearch: event => {
        const filter = event.target.value;
        const searchResults = this.state.employees.filter(item => {
          let values = Object.values(item)
          .join("")
          .toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ searchedEmployees: searchResults });
      },
      handleSort: (key, employees) => {
        this.setState({
          employees: employees.sort((a, b) => { 
            if (key === 'name') {
              if (this.state.sortOrder === "desc") {
                return b.name.last.localeCompare(a.name.last);
              } else {
                return a.name.last.localeCompare(b.name.last);
              }
            }
            if (key === 'phone') {
              if (this.state.sortOrder === "desc") {
                return b.phone.localeCompare(a.phone);
              } else {
                return a.phone.localeCompare(b.phone);
              }
            }
            if (key === 'email') {
              if (this.state.sortOrder === "desc") {
                return b.email.localeCompare(a.email);
              } else {
                return a.email.localeCompare(b.email);
              }
            }
            if (key === 'dob') {
              if (this.state.sortOrder === "desc") {
                return b.dob.date.localeCompare(a.dob.date);
              } else {
                return a.dob.date.localeCompare(b.dob.date);
              }
            }
            return 0;
          })
        });
        this.setState({ 
          sortOrder: this.state.sortOrder === "asc" ? "desc" : "asc"
         });
      }
    }
  }

  componentDidMount() {
    API.search().then(res => {
      const employees = res.data.results;
      this.setState({ employees: employees, searchedEmployees: employees });
    })
  }

  render() {
  return (
    <div className="container">
      <SearchArea handleSearch={this.state.handleSearch} />
      <div className="table">
      <table>
          <thead>
              <tr>
                  <th>Image</th>
                  <th onClick={() => this.state.handleSort("name", this.state.searchedEmployees)}>Name</th>
                  <th onClick={() => this.state.handleSort("phone", this.state.searchedEmployees)}>Phone</th>
                  <th onClick={() => this.state.handleSort("email", this.state.searchedEmployees)}>Email</th>
                  <th onClick={() => this.state.handleSort("dob", this.state.searchedEmployees)}>DOB</th>
              </tr>
          </thead>
          <UserRows employees={this.state.searchedEmployees} /> 
      </table>
      </div>
    </div>
  )
  }
};

export default Table;