import React from 'react';
import formatCurrency from '../util'

const CartItem = ({item, removeFromCart, increaseQty, decreaseQty}) =>{
	return(
		<aside className="block col-2 cart-list-item">
            <img src={item.thumbnail} alt={item.title} />
			<div className="cart-item-content">
				<p>{item.title}</p>
				<p className="cart-item-price"> {formatCurrency(item.price * item.qty)}</p>
				<div className="cart-quantity">
					<button onClick={()=> decreaseQty(item)}>-</button>
					<div>{item.qty}</div>
					<button onClick={()=> increaseQty(item)}>+</button>
				</div>
			</div>
			<div className="cart-remove-btn" onClick={()=> removeFromCart(item)}>
				<i className="far fa-trash-alt"></i>
			</div>
		</aside>
	);
}

export default CartItem;