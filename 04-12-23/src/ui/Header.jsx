import { useEffect, useState } from "react";
import CompanyLogo from "./CompanyLogo";

function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	function handleResize() {
		setWindowWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header className="header">
			<CompanyLogo className="header__logo" />
			<div className="nav">
				<nav
					style={
						windowWidth < 768
							? isNavOpen
								? { width: "40rem", visibility: "visible" }
								: { width: "0" }
							: { width: "max-content" }
					}
					className={`nav-container`}
				>
					<ul className="nav-list">
						<li className="nav-item">
							<a href="" className="nav-link">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">
								About Us
							</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">
								New
							</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<button className="primary-btn">Start Now</button>
				<button
					className="nav-btn"
					style={
						isNavOpen ? { position: "fixed", zIndex: "100", right: "9%" } : {}
					}
					onClick={() => {
						setIsNavOpen((isNavOpen) => !isNavOpen);
					}}
				>
					<div className="nav-icon-box">
						<div className="nav-icon"></div>
					</div>
				</button>
			</div>
		</header>
	);
}

export default Header;
