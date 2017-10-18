import React, { Component } from 'react';

class Header extends Component {
	render() {
		return(
			<header className="header">
				<div className="container">
					<div className="header__container">
						<a href="#"><h2 className="logo">Gallery</h2></a>
						<button className="primary-btn">Post</button>
					</div>
				</div>
			</header>
		)
	};
}

export default Header;