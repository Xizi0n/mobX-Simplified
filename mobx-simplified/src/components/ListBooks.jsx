import React from "react";
import bookStore from "../stores/BookStore";
import { observer } from "mobx-react";

const ListBooks = () => {
  return (
    <div className="book-list">
      <h1 className="bookInfo">
        You have{" "}
        <span
          style={
            bookStore.bookCount > 0
              ? { color: "#108600" }
              : { color: "#c0392b" }
          }
        >
          {bookStore.bookCount}
        </span>{" "}
        books
      </h1>
      <ul className="book-list">
        <li>
          <div>Title</div>
          <div>Author</div>
        </li>
        <hr />
        {bookStore.books.map(book => {
          return (
            <li
              key={book.id}
              onClick={() => {
                bookStore.removeBook(book.id);
              }}
              className="list-item"
            >
              <div>{book.title}</div>
              <div>{book.author}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
// Exportálásnál figyeljünk arra, hogy observerként exportáljuk azokat a komponenseket akiknek lényeges a store- state-je
export default observer(ListBooks);
