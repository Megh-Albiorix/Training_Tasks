import CompanyInfo from "./CompanyInfo";
import Contact from "../../ui/Contact";

function Footer() {
	const date = new Date();

	return (
		<footer className="footer">
			<div className="footer__container">
				<CompanyInfo className="footer__company-info" />

				<div className="footer__lists">
					<div className="footer__list-container">
						<h1 className="footer__list-heading">Product</h1>
						<ul className="footer__list">
							<li className="footer__list-item">Pricing</li>
							<li className="footer__list-item">Case Studies</li>
							<li className="footer__list-item">Features</li>
							<li className="footer__list-item">Reviews</li>
							<li className="footer__list-item">Updates</li>
						</ul>
					</div>
					<div className="footer__list-container">
						<h1 className="footer__list-heading">Company</h1>
						<ul className="footer__list">
							<li className="footer__list-item">About</li>
							<li className="footer__list-item">Careers</li>
							<li className="footer__list-item">News</li>
							<li className="footer__list-item">Blog</li>
							<li className="footer__list-item">Contact</li>
						</ul>
					</div>
					<div className="footer__list-container">
						<h1 className="footer__list-heading">Support</h1>
						<ul className="footer__list">
							<li className="footer__list-item">Help Center</li>
							<li className="footer__list-item">Status</li>
							<li className="footer__list-item">Report a Bug</li>
							<li className="footer__list-item">Chat Support</li>
						</ul>
					</div>
					<Contact className="footer__contact" />
				</div>
			</div>
			<div className="footer__copyright">
				<h4 className="footer__copyright-text">{`©️ ${date.getFullYear()} White Space UI - All Rights Reserved`}</h4>
				<div className="footer__copyright-tc">
					<a href="" className="footer__copyright-tc-link">
						Term of Service
					</a>
					<div className="footer__copyright-tc-line"></div>
					<a href="" className="footer__copyright-tc-link">
						Privacy Policy
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
