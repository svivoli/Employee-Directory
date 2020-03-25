import React from "react";
import "./style.css";

function SearchArea({ handleSearch }) {
    return (
        <div className="container">
            <div class="row justify-content-center">
                <div className="input-group col-md-4 align-self-center">
                    <input
                        className="form-control"
                        type="text"
                        onChange={event => handleSearch(event)}
                        placeholder="Search by Employee Name"
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchArea;