import React from "react"
import "./style.css"

function Searchbar({children}) {
    return(
        <div className="input-group mb-3 searchBar">
            <input type="text" class="form-control" placeholder="Search a Book" aria-describedby="button-addon2"/>
            <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="searchBtn">Search</button>
            </div>
        </div>
    )
}

export default Searchbar