import React from "react";
import "./style.css";

function Results(props) {
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
            <button className = "btn-warning saveBook" onClick={props.saveBook}>Save Book</button>
            <div className= "bookTxt">
                <p>Title: {result.volumeInfo.title}</p>
                <p>Author: {result.volumeInfo.authors}</p>
                <p>Description: {result.volumeInfo.description}</p>
                <p>Link <a href={result.selfLink}>{result.selfLink}</a></p>
            </div>
          <img alt="book" src={result.volumeInfo.imageLinks.thumbnail} className="img-fluid bookImg" />
        </li>
      ))}
    </ul>
  );
}

export default Results;
