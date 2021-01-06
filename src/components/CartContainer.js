import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect, useDispatch, useSelector } from "react-redux";
import { clearCart, getTotalAmount } from "../redux/actionCreator";

const CartContainer = ({
	cart = [],
	total,
	itemTotal,
	clearCart,
	getTotalAmount,
}) => {
	// const cart = useSelector((state) => state.cart) || [];
	// const total = useSelector((state) => state.totalAmount);
	// const dispatch = useDispatch();

	useEffect(() => {
		getTotalAmount();
	}, [getTotalAmount, cart, itemTotal]);

	if (cart.length === 0) {
		return (
			<section className="cart">
				{/* cart header */}
				<header>
					<h2>your bag</h2>
					<h4 className="empty-cart">is currently empty</h4>
				</header>
			</section>
		);
	}
	return (
		<section className="cart">
			{/* cart header */}
			<header>
				<h2>your bag</h2>
			</header>
			{/* cart items */}
			<article>
				{cart.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</article>
			{/* cart footer */}
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>${total.toFixed(2)}</span>
					</h4>
				</div>
				<button className="btn clear-btn" onClick={clearCart}>
					clear cart
				</button>
			</footer>
		</section>
	);
};

const mapState = (state) => {
	return {
		cart: state.cart,
		total: state.totalAmount,
		itemTotal: state.itemTotal,
	};
};

const mapDispatch = (dispatch) => {
	return {
		clearCart: () => dispatch(clearCart()),
		getTotalAmount: () => dispatch(getTotalAmount()),
	};
};

export default connect(mapState, mapDispatch)(CartContainer);
