import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productAction';
import axios from 'axios';

const ProductListing = () => {
	const products = useSelector((state) => state);
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const res = await axios
			.get('https://fakestoreapi.com/products')
			.catch((err) => console.log(err));
		dispatch(setProducts(res.data));
	};

	useEffect(() => {
		fetchProducts();
	});

	console.log(products);
	return (
		<div className="ui grid container whole" style={{ marginTop: '3rem' }}>
			<ProductComponent />
		</div>
	);
};

export default ProductListing;
