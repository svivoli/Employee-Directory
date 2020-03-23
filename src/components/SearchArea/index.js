import React from "react";
import "./style.css";

function SearchArea({ handleSearch }) {
    return(
        <div class="input-group">
                <input 
                class="form-control"
                type="text"
                onChange={event => handleSearch(event)}
                placeholder="Search by Employee Name"
                />
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">Search</button>
                </span>
        </div>
    )
}

export default SearchArea;