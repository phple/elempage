import {createStore , combineReducers} from 'redux'

var reducer = combineReducers({
	price : priceReducer,
	countAll : countReducer,
	lowPrice : fPriceReducer

})
function countReducer(state=0,action){
	if(action.type === "CHANGECOUNT"){
		state += action.payload
		return state
	}else{
		return state;
	}
}
function priceReducer(state=[],action){
	if(action.type === "CHPRICE"){
		state = state.concat(action.payload);
		return state
	}else{
		return state;
	}
}

function fPriceReducer(state=[], action){
	if(action.type === 'PPRICE'){
		state = state.concat(action.payload);
		return state
	}else{
		return state
	}
}

var store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;