import "./App.css";
import Books from "./components/Books";
import Background from "./components/Background";
import { useState } from "react";
import Book from "./components/Book";

function App() {
  const [book, setBook] = useState<Book | undefined>();

  return (
    <>
      <Background />
      {book ? (
        <Book book={book} setBook={setBook} />
      ) : (
        <Books setBook={setBook} />
      )}
    </>
  );
}

export default App;
