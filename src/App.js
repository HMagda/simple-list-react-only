import BookForm from "./components/BookForm/BookForm";
import BooksList from "./components/BooksList/BooksList";

const App = () => {
  return (
    <div className="App">
      <h1>Books List</h1>
      <BooksList />
      <BookForm />
    </div>
  );
};

export default App;
