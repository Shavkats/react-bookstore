import React from 'react';
import formatCurrency from "../util";

const Book = ({book, addToCart, cartItems}) => {
    let isBookInCart = cartItems.filter(item => item.id === book.id).length > 0;
    return(
        <div className="col-2 book-list-item" >
            <img src={book.thumbnail} alt={book.title} />
            <p>{book.title}</p>
            <p className="book-price">{formatCurrency(book.price)}</p>
            <button onClick={() => addToCart(book)} className={`cart-button ${isBookInCart? 'in-cart':''}`}>
                {isBookInCart? <span><i className="fas fa-check"></i>Added to Cart</span>: <span>Add To Cart</span>}
            </button>
        </div>
    );
}

export default Book;