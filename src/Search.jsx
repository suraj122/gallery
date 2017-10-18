import React, { Component } from 'react';

class Search extends Component {
	render() {
		return(
			<div className="container">
				<div className="col-md-8 col-md-offset-2">
					<div className="search">
						<input type="search" className="form-control" placeholder="Search" />
						<span className="search__icon">&#9906;</span>
					</div>
				</div>
				<div className="clearfix" />
			</div>
		)
	};
}

export default Search;