import React from "react";
import Heading from "../Heading";
import DataArea from "../DataArea";
import "./style.css";

function Table(props) {
    return (
        <table>
            <tr>
                <th><Heading /></th>
            </tr>
            <tr>
                <td><DataArea /></td>
            </tr>
        </table>
    );
};

export default Table;