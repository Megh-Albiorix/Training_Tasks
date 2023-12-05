function Cta() {
	return (
		<section className="cta">
			<div className="cta-header">
				<h1 className="cta-heading">
					Streamline your workflow with SaaS: Get started now
				</h1>
				<p className="cta-text">
					Stay uptodate with the most relevant information
				</p>
			</div>
			<div className="cta-features-list">
				<div className="cta-features-item">
					<img
						src="./assets/tick-icon.png"
						alt="cta icon"
						className="cta-icon"
					/>
					<p className="cta-features-text">Unlimited Pages</p>
				</div>
				<div className="cta-features-item">
					<img
						src="./assets/tick-icon.png"
						alt="cta icon"
						className="cta-icon"
					/>
					<p className="cta-features-text">Easy access</p>
				</div>
				<div className="cta-features-item">
					<img
						src="./assets/tick-icon.png"
						alt="cta icon"
						className="cta-icon"
					/>
					<p className="cta-features-text">14-day free trial</p>
				</div>
			</div>
			<div className="cta-btns">
				<button className="primary-btn">Get Started</button>
				<button className="secondary-btn">
					<span className="btn-span">
						<img src="./assets/Play.png" alt="icon" className="btn-icon" />
						<p className="btn-text">Watch demo</p>
					</span>
				</button>
			</div>
		</section>
	);
}

export default Cta;
