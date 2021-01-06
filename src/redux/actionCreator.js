import {
	CLEAR_CART,
	DECREASE,
	GET_ITEM_TOTAL,
	GET_TOTAL_AMOUNT,
	INCREASE,
	REMOVE,
} from "./actionTypes";

export const increase = (id) => {
	return {
		type: INCREASE,
		payload: {
			id,
		},
	};
};
export const decrease = (id) => {
	return {
		type: DECREASE,
		payload: {
			id,
		},
	};
};

export const clearCart = () => {
	return {
		type: CLEAR_CART,
	};
};

export const remove = (id) => {
	return {
		type: REMOVE,
		payload: {
			id,
		},
	};
};

export const getTotalAmount = () => {
	return {
		type: GET_TOTAL_AMOUNT,
	};
};
export const getItemTotal = () => {
	return {
		type: GET_ITEM_TOTAL,
	};
};
