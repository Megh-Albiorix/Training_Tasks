const Header = () => {
	return (
		<div className="header">
			<div className="logo-box">
				<img
					src="https://cdn3.f-cdn.com//files/download/144571748/professional%20logo.jpg?fit=crop"
					alt="Logo"
					className="logo-img"
				/>
			</div>
			<nav className="nav-container">
				<ul className="nav-list">
					<li className="nav-item">Home</li>
					<li className="nav-item">Services</li>
					<li className="nav-item">About</li>
					<li className="nav-item">Contact</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
