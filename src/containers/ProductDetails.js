import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectedProduct,
	removeSelectedProduct
} from '../redux/actions/productAction';
import './cont.css';

const ProductDetails = () => {
	const product = useSelector((state) => state.product);
	const { image, title, price, category, description } = product;
	const { productId } = useParams();
	const dispatch = useDispatch();
	console.log(product);

	const fetchProductDetail = async () => {
		const res = await axios
			.get(`https://fakestoreapi.com/products/${productId}`)
			.catch((err) => console.log(err));
		dispatch(selectedProduct(res.data));
	};

	useEffect(() => {
		if (productId && productId !== '') fetchProductDetail();
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [productId]);

	return (
		<div className="ui grid container" style={{ marginTop: '3.5rem' }}>
			{Object.keys(product).length === 0 ? (
				<div className="loader"></div>
			) : (
				<div className="ui placeholder segment">
					<div className="ui two column stackable center aligned grid">
						<div className="ui vertical divider"></div>
						<div className="middle aligned row">
							<div className="column lp animate__animated animate__fadeIn animate__slow">
								<img src={image} alt="product" className="ui fluid image" />
							</div>
							<div className="column rp">
								<h1>{title}</h1>
								<h2 className="animate__animated animate__pulse">
									<p
										href="#"
										style={{ fontSize: '2rem' }}
										className="ui teal tag label"
									>
										${price}
									</p>
								</h2>
								<h3
									className="ui brown block header"
									style={{ margin: '2rem' }}
								>
									{category}
								</h3>
								<p>{description}</p>
								<div
									className="ui vertical animated orange button"
									tabIndex="0"
								>
									<div className="hidden content">
										<i className="shop icon"></i>
									</div>
									<div className="visible content">Add to Cart</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
