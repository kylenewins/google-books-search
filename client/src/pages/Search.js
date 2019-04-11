import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/jumbotron";
import Searchbar from "../components/searchbar";
import Results from "../components/results";

class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };


  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleSearch = event => {
    event.preventDefault();
    API.getBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.items});
        console.log("state results: \n" + this.state.results)
        // console.log(res.data)
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
          <Jumbotron />
          <Searchbar
            handleSearch={this.handleSearch}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
          <Results results={this.state.results} />
      </div>
    );
  }
}

export default Search;
