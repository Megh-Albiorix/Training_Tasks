function Contact({ className }) {
	return (
		<div className={"contact " + className}>
			<h3 className="contact__heading">Contact Us</h3>
			<p className="contact__detail">
				<span className="contact__icon-span">
					<img src="./assets/Email-dark.png" alt="" className="contact__icon" />
				</span>
				<span className="contact__text">hello@whitespaceui.design</span>
			</p>
			<p className="contact__detail">
				<span className="contact__icon-span">
					<img src="./assets/Phone.png" alt="" className="contact__icon" />
				</span>
				<span className="contact__text">+1 (500) 300 250</span>
			</p>
			<p className="contact__detail	">
				<span className="contact__icon-span">
					<img
						src="./assets/Location Point.png"
						alt=""
						className="contact__icon"
					/>
				</span>
				<span className="contact__text">
					3891 Ranchview <br /> Dr. Richardson, CA 62639
				</span>
			</p>
		</div>
	);
}

export default Contact;
