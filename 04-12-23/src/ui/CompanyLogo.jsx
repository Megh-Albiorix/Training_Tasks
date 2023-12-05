function CompanyLogo({ className }) {
	return (
		<div className={"logo " + className}>
			<img
				src="./assets/white-space-logo.png"
				alt="logo"
				className="logo-img"
			/>
			<h2 className="logo-text">White Space UI</h2>
		</div>
	);
}

export default CompanyLogo;
