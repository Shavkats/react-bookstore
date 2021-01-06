import React from 'react';
import Book from './Book';

const BookList = ({books, addToCart, cartItems}) =>(
	<main className="row block col-1 book-list">
        {books.length > 0 &&
			<React.Fragment>
				{books.map(book => 
					<Book 
						key={`book-${book.id}`}
						book={book}
						addToCart={addToCart}
						cartItems={cartItems}
					/>
				)}
			</React.Fragment>
		}
		{books.length === 0 && <h3>No results found</h3>}
	</main>
)

export default BookList;