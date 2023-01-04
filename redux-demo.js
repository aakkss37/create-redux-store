//import redux from 'redux';
import { legacy_createStore as createStore } from 'redux'; // ****AS "createStore"FNCTION IS DEPRICIATED.. WE CAN NOT USE createStore FUNCTION... INDTED I FOUND AN ALTERNATE SOLUTION ON STACKOVERFLOW.. TO USE ***** //


 
const counterReducer = (previousState = {count: 0}, action)=> { // --> 2. reducer function.. having 2 parameter.. 1) previous state 2) action... 
																//		  and reducer function always return a new updated state.
	if (action.type === "increment") {
		return {  
			count: previousState.count + 1
		};
	}								
	if (action.type === "decrement") {
		return {
			count: previousState.count - 1
		};
	}								 
	return previousState;
};

const store = createStore(counterReducer);  //--> 1. creating redux store using createStore() function... which takes a reducer function as a parameter.
console.log(store.getState());


const counterSubscriber = ()=> {	// --> 4. subscriber function is the subscriber of the redux store.... 
									//		  which wil use the component state which is stored. by using getStore() function.
	const latestState = store.getState();
	console.log(latestState);
}
store.subscribe(counterSubscriber);



store.dispatch({type: "increment"}) // --> 3. this function dispatch the action of reducer function...
store.dispatch({type: "decrement"}) // --> 3. this function dispatch the action of reducer function...