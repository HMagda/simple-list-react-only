const BooksList = ({books, remove}) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
          <button onClick={() => remove(book.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
