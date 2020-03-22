import React from "react";
import "./style.css";

function UserRows(props) {
    console.log(props.data.employees);
    return (
        <tbody>
            {Object.keys(props.data.employees).map(index => {
                return (
                    <tr key={index} >
                        <td><img src={props.data.employees[index].picture.thumbnail} alt="thumbnail"></img></td>
                        <td>{props.data.employees[index].name.first} {props.data.employees[index].name.last}</td>
                        <td>{props.data.employees[index].phone}</td>
                        <td>{props.data.employees[index].email}</td>
                        <td>{props.data.employees[index].dob.date.split('T')[0]}</td>
                    </tr>
                )
            })}
        </tbody>
    )
};

export default UserRows;