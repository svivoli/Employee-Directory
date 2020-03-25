import React from "react";
import "./style.css";

function UserRows(props) {
    console.log(props.employees);
    return (
        <tbody>
            {Object.keys(props.employees).map(index => {
                return (
                    <tr key={index} >
                        <td><img src={props.employees[index].picture.thumbnail} alt="thumbnail"></img></td>
                        <td>{props.employees[index].name.first} {props.employees[index].name.last}</td>
                        <td>{props.employees[index].phone}</td>
                        <td>{props.employees[index].email}</td>
                        <td>{props.employees[index].dob.date.split('T')[0]}</td>
                    </tr>
                )
            })}
        </tbody>
    )
};

export default UserRows;