import React from 'react';
import CartItem from './CartItem';
import formatCurrency from '../util';

const Cart = ({
	cartItems,
	cartTotal,
	removeFromCart,
	increaseQty,
	decreaseQty
}) =>{
	return(
		<aside className="block col-2 cart-list">
			<React.Fragment>
				<div className="cart-details">
					<p>Items: {cartItems.length}</p>
					<p className="cart-total">Total: {formatCurrency(cartTotal)}</p>
				</div>
				<hr />
				{cartItems.map(item=>(
					<CartItem
						key={`cart-${item.id}`}
						item={item}
						removeFromCart={removeFromCart}
						increaseQty={increaseQty}
						decreaseQty={decreaseQty}
					/>
				))}
				{cartItems.length === 0 && <h3>Cart is empty</h3>}
			</React.Fragment>
		</aside>
	);
}

export default Cart;