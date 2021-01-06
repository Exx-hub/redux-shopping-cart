import React from "react";

import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	// cart setup

	return (
		<Provider store={store}>
			<Navbar />
			<CartContainer />
		</Provider>
	);
}

export default App;

// reducer - function that is used to update the store
// two args - state and action
// state - old state / state before update
// action - what happened / what update happened
// return updated or old state

// dispatch - sends actions to the store
// actions (objects) - must have type property - what kind of action
// DONT MUTATE STATE - redux built on immutability (copy)
