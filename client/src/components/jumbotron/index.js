import React from "react";
import "./style.css"

function Jumbotron({ children }) {
	return (
		<div
			style={{
				height: 300,
				clear: "both",
				paddingTop: 120,
				textAlign: "center"
			}}
			className="jumbotron"
		>
        <h1>Google Books Search (with React)</h1>
        <h2>Search for and Save books you like!</h2>
			{children}
		</div>
	);
}

export default Jumbotron;