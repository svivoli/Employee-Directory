import React from "react";
import UserRows from "../UserRows";
import "./style.css";

function Table() {
  return (
      <table>
          <thead>
              <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Phone</td>
                  <td>Email</td>
                  <td>DOB</td>
              </tr>
          </thead>
          <UserRows />
      </table>
  )
};
export default Table;