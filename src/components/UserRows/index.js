import React from "react";
import "./style.css";

function UserRows(props) {
    console.log(props.users);
    return (
        <tbody>
            {Object.keys(props.users).map(index => {
                return (
                    <tr key={index} >
                        <td><img src={props.users[index].picture.thumbnail} alt="thumbnail"></img></td>
                        <td>{props.users[index].name.first} {props.users[index].name.last}</td>
                        <td>{props.users[index].phone}</td>
                        <td>{props.users[index].email}</td>
                        <td>{props.users[index].dob.date.split('T')[0]}</td>
                    </tr>
                )
            })}
        </tbody>
    )
};

export default UserRows;