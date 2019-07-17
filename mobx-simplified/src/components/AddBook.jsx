import React, { Component } from "react";
import bookStore from "../stores/BookStore";

class AddBook extends Component {
  state = {
    title: "",
    author: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    bookStore.addBook(this.state);
    this.setState({
      title: "",
      author: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <h1 className="addBookInfo">Add books here</h1>
        <form className="inputs" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
            placeholder="Author"
          />
          <button type="submit">Add book</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
