import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import Footer from './containers/Footer';

const App = () => {
	return (
		<div className="App">
			<HashRouter>
				<Link to="/">
					<Header />
				</Link>
				<Switch>
					<Route path="/" exact component={ProductListing} />
					<Route path="/product/:productId" exact component={ProductDetails} />
					<Route>404 Not Found!</Route>
				</Switch>
			</HashRouter>
			<Footer />
		</div>
	);
};

export default App;
