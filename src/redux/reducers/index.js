import { combineReducers } from 'redux';
import { selectedProductReducer } from './productReducer';
import { productReducer } from './productReducer';

const rootReducer = combineReducers({
	allProducts: productReducer,
	product: selectedProductReducer
});

export default rootReducer;
