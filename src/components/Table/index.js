import React from "react";
import Heading from "../Heading";
import "./style.css";

function Table(props) {
  const test = props.data.map(user => {
    return (
    <tr>{user.name}</tr>
    <tr>{user.email}</tr>
    <tr>{user.birthday}</tr>
    )
  })
    return (
      <div>
        akhfalskd
        <table>
         {test}
        </table>
        </div>
    );
};

export default Table;

// export default class DataTable extends React.Component {
//     renderHeadingRow = () => {
      
//     };
    
//     renderRow = () => {
//     };
  
//     render() {
    
//       return (

//       );
//     }
//   }