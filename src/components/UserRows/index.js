import React from "react";
import "./style.css";

function UserRows(props) {
    console.log(props.data.employees);
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
                <tr></tr>
            </tbody>
        </table>
    )
};

export default UserRows;