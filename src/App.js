import BookForm from "./components/BookForm/BookForm";
import BooksList from "./components/BooksList/BooksList";
import {useState} from "react";
import shortid from "shortid";

const App = () => {
  const [books, setBooks] = useState([
    {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
    {id: 2, title: "Don Quixote", author: "Miguel de Cervantes"},
    {id: 3, title: "Mrs. Dalloway", author: "Virginia Woolf"},
  ]);

  const removeBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const addBook = (newBook) => {
    setBooks([
      ...books,
      {id: shortid(), title: newBook.title, author: newBook.author},
    ]);
  };

  return (
    <div className="App">
      <h1>Books List</h1>
      <BooksList books={books} remove={removeBook} />
      <BookForm books={books} add={addBook} />
    </div>
  );
};

export default App;
