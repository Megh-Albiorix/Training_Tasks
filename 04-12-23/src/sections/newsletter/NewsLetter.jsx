function NewsLetter() {
	return (
		<section className="newsletter">
			<div className="newsletter__bg-graphics">
				<img
					src="./assets/bg-graphics.png"
					className="newsletter__bg-img"
					alt="Background Image"
				/>
			</div>
			<div className="newsletter__content">
				<h1 className="newsletter__heading">
					Enter Your E-mail Address and Get Started for Free
				</h1>
				<p className="newsletter__text">
					Stay up to date with the most relevant information, our new
					collections, news and special offers!
				</p>
				<form className="newsletter__form">
					<input
						type="text"
						placeholder="Your E-mail Address"
						className="newsletter__input"
					/>
					<button className="primary-btn">Subscribe</button>
				</form>
			</div>
		</section>
	);
}

export default NewsLetter;
