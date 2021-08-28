import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
	const products = useSelector((state) => state.allProducts.products);

	return (
		<>
			{products.map((product) => {
				const { id, title, image, price, category } = product;
				return (
					<div key={id} style={{ marginTop: '1.8rem' }}>
						<Link to={`/product/${id}`}>
							<div className="ui link cards single">
								<div className="card">
									<div className="image" style={{ backgroundColor: '#fefefe' }}>
										<img style={{ height: '280px' }} src={image} alt={title} />
									</div>
									<div className="content">
										<div className="header">{title.substr(0, 38)}</div>
										<div className="price">$ {price}</div>
										<div className="meta">{category}</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</>
	);
};

export default ProductComponent;
