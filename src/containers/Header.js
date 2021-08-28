import React from 'react';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const Header = () => {
	return (
		<div className="ui fixed menu">
			<div className="ui container center">
				<h2>
					<LocalMallIcon /> FakeShop
				</h2>
			</div>
		</div>
	);
};

export default Header;
