import { observable, action, decorate, computed } from "mobx";
import uuid from "uuid/v1";

class BookStore {
  books = [
    { id: 1, title: "Best Book Ever", author: "Mr Mobx" },
    { id: 2, title: "Awesomeness of React", author: " React fanboy" }
  ];

  get bookCount() {
    return this.books.length;
  }

  addBook(book) {
    const preparedBook = { ...book, id: uuid() };
    this.books.push(preparedBook);
  }

  removeBook(id) {
    this.books = this.books.filter(book => book.id !== id);
  }
}

decorate(BookStore, {
  books: observable,
  bookCount: computed,
  addBook: action,
  removeBook: action
});

const bookStore = new BookStore();

export default bookStore;
