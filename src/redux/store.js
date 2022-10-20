import {createStore} from "redux";
import shortid from "shortid";

const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, {...action.payload, id: shortid()}],
      };
    default:
      return state;
  }
};

const initialState = {
  books: [
    {id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
    {id: 2, title: "Don Quixote", author: "Miguel de Cervantes"},
    {id: 3, title: "Mrs. Dalloway", author: "Virginia Woolf"},
  ],
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
