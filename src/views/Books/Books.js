import React from 'react';
import { useEffect, useState } from 'react';
import fetchBooks from '../../services/books';
import BookList from '../../components/BooksList/BooksList';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    fetchData();
  }, []);
  console.log(books);
  return (
    <div>
      {books.map((book) => {
        return <BookList key={book.id} {...book} />;
      })}
    </div>
  );
}
