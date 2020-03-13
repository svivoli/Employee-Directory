import React from "react";
import Heading from "../Heading";
import "./style.css";

function Table(props) {
    return (
        <table>
            <tr>
                <th><Heading /></th>
            </tr>
            <tr>
                <td>{!props.image}</td>
                <td>{!props.name}</td>
                <td>{!props.email}</td>
                <td>{!props.birthday}</td>
            </tr>
        </table>
    );
};

export default Table;