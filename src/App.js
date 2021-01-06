import React, { Component } from 'react'
import {books} from './components/books';
import Header from './components/Header';
import BookList from './components/BookList';
import Cart from './components/Cart';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      cart: [],
      cartTotal: 0
    };
    this.searchChange = this.searchChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
  }

  searchChange(e){
    this.setState({
      keyword: e.target.value.toLowerCase()
    });
  }

  searchSubmit(e){
    e.preventDefault();
  }

  addToCart(book){
    let cartItems = this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    let isBookInCart = cartItems.filter(item => item.id === book.id).length > 0;
    if(!isBookInCart){
      cartItems.push({...book, qty: 1});
      this.setState({
        cart: cartItems,
        cartTotal: cartTotal += book.price
      });
    }
  }

  removeFromCart(book){
    let cartItems = this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    cartItems = cartItems.filter(cartItem => cartItem.id !== book.id);
    this.setState({
      cart: cartItems,
      cartTotal: cartTotal -= (book.price * book.qty)
    });
  }

  increaseQty(book){
    let cartItems = this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    let bookIndex = cartItems.findIndex(item => item.id === book.id);
    cartItems[bookIndex].qty += 1;
    this.setState({
      cart: cartItems,
      cartTotal: cartTotal += book.price,
    });
  }

  decreaseQty(book){
    let cartItems = this.state.cart.slice();
    let cartTotal = this.state.cartTotal;
    let bookIndex = cartItems.findIndex(item => item.id === book.id);
    let currentQty = cartItems[bookIndex].qty;
    if(currentQty > 1){
      cartItems[bookIndex].qty -= 1;
      this.setState({
        cart: cartItems,
        cartTotal: cartTotal -= book.price,
      });
    }else{
      this.removeFromCart(book);
    }
  }

  render(){
    let {keyword, cart, cartTotal} = this.state;
    const actualBooks = books.filter((book) => {
      let title = book.title.toLowerCase();
      return title.indexOf(keyword) > -1;
    });
    return(
    <div>
      <Header 
        keyword={keyword}
        searchChange = {this.searchChange}
        searchSubmit = {this.searchSubmit}
      />
      <div className="row">
        <BookList
          books = {actualBooks}
          addToCart = {this.addToCart}
          cartItems = {cart}
        />
        <Cart
          cartItems = {cart}
          cartTotal = {cartTotal}
          removeFromCart = {this.removeFromCart}
          increaseQty = {this.increaseQty}
          decreaseQty = {this.decreaseQty} 
        />
      </div>
    </div>
    );
  }
}

export default App;
