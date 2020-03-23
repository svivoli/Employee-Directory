import React from "react";
import "./style.css";

function UserRows(props) {
    console.log(props.rowData);
    return (
        <tbody>
            {Object.keys(props.rowData).map(index => {
                return (
                    <tr key={index} >
                        <td><img src={props.rowData[index].picture.thumbnail} alt="thumbnail"></img></td>
                        <td>{props.rowData[index].name.first} {props.rowData[index].name.last}</td>
                        <td>{props.rowData[index].phone}</td>
                        <td>{props.rowData[index].email}</td>
                        <td>{props.rowData[index].dob.date.split('T')[0]}</td>
                    </tr>
                )
            })}
        </tbody>
    )
};

export default UserRows;