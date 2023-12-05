function Features() {
	return (
		<section className="features">
			<div className="features-header">
				<h3 className="section-highlight">Our Features</h3>
				<h2 className="features-heading">Our Key Benefits</h2>
				<p className="features-text">
					Our services are designed to cater to your specific needs and goals
				</p>
			</div>
			<div className="features-left">
				<div className="features-item">
					<img
						src="./assets/tick-icon.png"
						alt="feature icon"
						className="features-item-icon"
					/>
					<h3 className="features-item-heading">Project Structure</h3>
					<p className="features-item-text">
						Check out our proven methods, guides, and exercises that help make
						work better, and people happier.
					</p>
				</div>
				<div className="features-item">
					<img
						src="./assets/mobile-icon.png"
						alt="feature icon"
						className="features-item-icon"
					/>
					<h3 className="features-item-heading">Responsive</h3>
					<p className="features-item-text">
						This Design System and UI kit is coming with full-responsive screens
						for tablet and mobile devices.
					</p>
				</div>
				<div className="features-item">
					<img
						src="./assets/email-icon.png"
						alt="feature icon"
						className="features-item-icon"
					/>
					<h3 className="features-item-heading">Messaging</h3>
					<p className="features-item-text">
						On mobile, customers can send text, or audio messages to agents,
						like using any messaging app
					</p>
				</div>
			</div>
			<div className="features-right">
				<div className="features-right-image-box">
					<img
						src="./assets/Gallery.png"
						alt=""
						className="features-right-image"
					/>
				</div>
			</div>
		</section>
	);
}

export default Features;
