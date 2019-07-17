import { observable, action, decorate, computed } from "mobx";
import uuid from "uuid/v1";

/*
 * Ez a Store-unk ahol a state-et tároljuk
 * Csak egy sima osztály a varázslat lent a decorate függvényben történik.
 */

class BookStore {
  // @observable
  books = [
    { id: 1, title: "Best Book Ever", author: "Mr Mobx" },
    { id: 2, title: "Awesomeness of React", author: " React fanboy" }
  ];
  // @computed
  get bookCount() {
    return this.books.length;
  }
  // @action
  addBook(book) {
    const preparedBook = { ...book, id: uuid() };
    this.books.push(preparedBook);
  }
  // @action
  removeBook(id) {
    this.books = this.books.filter(book => book.id !== id);
  }
}
/*
 * Mivel a @decorator csak ES2016+ban érhető el ezért itt a decorate függvény segítségével érjük el a kívánt hatást
 * (Megjegyzés tsconfig ill jsconfigban beállítható az experimental decrators opció ebben az esetben lehet dekorátorokkal dolgozni.)
 * Az első paramétere a dekorálni kívánt osztály azaz a Store-unk.
 * A második paraméterében meg kell adnunk minden osztályváltozó / metódusra, hogy miként szeretnénk használni:
 *      * observable: A state-et leíró adatok, amiknek a változására figyelni szeretnénk
 *      * computed: A state állapotából kiszámolható adatok (ha változik a state akkor automatikusan változnak)
 *      * action: Olyan metódusok amik a state-et megváltoztatják
 */
decorate(BookStore, {
  books: observable,
  bookCount: computed,
  addBook: action,
  removeBook: action
});

const bookStore = new BookStore();

// A pédányosított store-t exportáljuk!
export default bookStore;
