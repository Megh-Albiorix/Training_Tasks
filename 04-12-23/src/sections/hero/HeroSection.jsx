function HeroSection() {
	return (
		<section className="hero">
			<div className="hero-left">
				<div className="hero-text">
					<h1 className="hero-heading">
						Everything you need to scale a global team
					</h1>
					<p className="hero-para">
						Check out our proven methods, guides, and exercises that help make
						work better, and people happier.
					</p>
				</div>
				<div className="hero-btn">
					<button className="primary-btn">Learn more</button>
					<button className="secondary-btn">
						<span className="btn-span">
							<img src="./assets/Play.png" alt="icon" className="btn-icon" />
							<p className="btn-text">Watch demo</p>
						</span>
					</button>
				</div>
				<div className="hero-review">
					<p className="hero-para">Trusted by over than 1M customers</p>
					<div className="star-box">
						<img src="./assets/star.png" alt="icon" className="star-icon" />
						<img src="./assets/star.png" alt="icon" className="star-icon" />
						<img src="./assets/star.png" alt="icon" className="star-icon" />
						<img src="./assets/star.png" alt="icon" className="star-icon" />
						<img src="./assets/star.png" alt="icon" className="star-icon" />
					</div>
				</div>
			</div>
			<div className="hero-right">
				<div className="hero-right-img-box">
					<img
						src="./assets/hero-right.png"
						alt="person image"
						className="hero-right-img"
					/>
					<img
						src="./assets/credit-card.png"
						alt="credit card image"
						className="hero-right-card"
					/>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
