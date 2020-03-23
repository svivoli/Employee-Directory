import React from "react";
import UserRows from "../UserRows";
import "./style.css";

function Table(props) {
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
          <UserRows rowData={props.data.employees} /> 
      </table>
  )
};
export default Table;