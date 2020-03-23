import React from "react";
import "./style.css";

function SearchArea({ handleSearch }) {
    return(
        <div className="input-group">
                <input 
                className="form-control"
                type="text"
                onChange={event => handleSearch(event)}
                placeholder="Search by Employee Name"
                />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">Search</button>
                </span>
        </div>
    )
}

export default SearchArea;