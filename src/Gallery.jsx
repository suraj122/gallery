import React, { Component } from 'react';

class Gallery extends Component {
	render() {
		return(
			<div className="container">
				<div className="gallery">
					<div className="col-md-8 gallery__content">
						<figure>
							<div className="gallery__img">
								<img src="images/image01.jpg" className="img-responsive" />
								<span className="heart-icon">&#9825;</span>
							</div>
							<figcaption className="fig-caption">
								Mountains
							</figcaption>
						</figure>
					</div>
					<div className="col-md-4 gallery__content">
						<figure>
							<div className="gallery__img">
								<img src="images/image02.jpg" className="img-responsive" />
								<span className="heart-icon">&#9825;</span>
							</div>
							<figcaption className="fig-caption">
								Mountains
							</figcaption>
						</figure>
					</div>
					<div className="col-md-4 gallery__content">
						<figure>
							<div className="gallery__img">
								<img src="images/image03.jpg" className="img-responsive" />
								<span className="heart-icon">&#9825;</span>
							</div>
							<figcaption className="fig-caption">
								Mountains
							</figcaption>
						</figure>
					</div>
					<div className="col-md-4 gallery__content">
						<figure>
							<div className="gallery__img">
								<img src="images/image04.jpg" className="img-responsive" />
								<span className="heart-icon">&#9825;</span>
							</div>
							<figcaption className="fig-caption">
								Mountains
							</figcaption>
						</figure>
					</div>
					<div className="col-md-4 gallery__content">
						<figure>
							<div className="gallery__img">
								<img src="images/image06.jpg" className="img-responsive" />
								<span className="heart-icon">&#9825;</span>
							</div>
							<figcaption className="fig-caption">
								Mountains
							</figcaption>
						</figure>
					</div>
					<div className="clearfix" />
				</div>
			</div>
		)
	};
}

export default Gallery;