import React, { createContext } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import bookStore from "./stores/BookStore";
import ListBooks from "./components/ListBooks";

const BookStore = new createContext(bookStore);

function App() {
  return (
    <BookStore.Provider>
      <div className="App">
        <AddBook />
        <ListBooks />
      </div>
    </BookStore.Provider>
  );
}

export default App;
