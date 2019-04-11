import React from "react"
import "./style.css"

function Searchbar(props) {
    return(
        <div className="input-group mb-3 searchBar">
            <input type="text" className="form-control" placeholder="Search a Book" aria-describedby="button-addon2" onChange={props.handleInputChange}/>
            <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={props.handleSearch} id="searchBtn">Search</button>
            </div>
        </div>
    )
}

export default Searchbar