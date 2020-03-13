import React from "react";
import SearchArea from "../SearchArea";
import Table from "../Table";
import Heading from "../Heading";
import DataArea from "../DataArea";
import "./style.css";

function Main() {
    return (
        <div>
        <SearchArea />
        <Table>
            <tr>
                <th><Heading /></th>
            </tr>
            <tr>
                <td><DataArea /></td>
            </tr>
        </Table>
        </div>
    );
};

export default Main;