import {
	CLEAR_CART,
	DECREASE,
	GET_ITEM_TOTAL,
	GET_TOTAL_AMOUNT,
	INCREASE,
	REMOVE,
} from "./actionTypes";
import cartItems from "../cartItems";

const initialState = {
	cart: cartItems,
	itemTotal: 0,
	totalAmount: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CLEAR_CART:
			return {
				...state,
				cart: [],
			};
		case REMOVE:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};
		case INCREASE:
			return {
				...state,
				cart: state.cart.map((item) => {
					if (item.id === action.payload.id) {
						item = { ...item, qty: item.qty + 1 };
					}
					return item;
				}),
			};
		case DECREASE:
			let tempCart = state.cart.map((item) => {
				if (item.id === action.payload.id) {
					item = { ...item, qty: item.qty - 1 };
				}
				return item;
			});

			return {
				...state,
				cart: tempCart,
			};
		case GET_ITEM_TOTAL:
			return {
				...state,
				itemTotal: state.cart.reduce((acc, cv) => {
					return acc + cv.qty;
				}, 0),
			};
		case GET_TOTAL_AMOUNT:
			return {
				...state,
				totalAmount: state.cart.reduce((acc, cv) => {
					return acc + cv.price * cv.qty;
				}, 0),
			};
		default:
			return state;
	}
};

export default reducer;

// optional COMBINED TOTALS (item and amount)

// case GET_TOTALS:
// 	let {total, amount} = state.cart.reduce((cartTotal,cartItem) => {
// 		const {price,amount} = cartItem;
// 		const itemTotal = price * amount;

// 		cartTotal.total += itemTotal;
// 		cartTotal.amount += amount;

// 		return cartTotal
// 	},
// 	{
// 		total: 0,
// 		amount: 0
// 	})
// 	total = parseFloat(total.toFixed(2))
// 	return {
// 		...state,total, amount
// 	}
