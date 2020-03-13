import React from "react";
import SearchArea from "../SearchArea";
import Table from "../Table";
import DataArea from "../DataArea";
import "./style.css";

function Main() {
    return (
        <div>
        <SearchArea />
        <Table>
            <ul>
                <li><DataArea /></li>
            </ul>
        </Table>
        </div>
    );
};

export default Main;