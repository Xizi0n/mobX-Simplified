import React, { createContext } from "react";
import "./App.css";
import AddBook from "./components/AddBook";
import bookStore from "./stores/BookStore";
import ListBooks from "./components/ListBooks";

/**
 * ContextAPI segítségével elérhetővé tesszük a Provider scope-jában lévő komponenseknek a storeunkat
 */

const BookStore = new createContext(bookStore);

function App() {
  return (
    // A Provider scope-on belül el fogjuk tudni érni a storeunkat
    <BookStore.Provider>
      <div className="App">
        <AddBook />
        <ListBooks />
      </div>
    </BookStore.Provider>
  );
}

export default App;
