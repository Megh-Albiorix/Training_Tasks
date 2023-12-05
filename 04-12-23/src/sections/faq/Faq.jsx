import AccordianItem from "./AccordianItem";

const accordianContent = [
	{
		tilte: "What are properties in Figma?",
		answer:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos soluta sint sed nobis quasi, at dolores illum voluptatum inventore ipsam repellat praesentium fugit temporibus pariatur, error perferendis earum quae?",
	},
	{
		tilte: "How Whitespace UI kit and Design System can help me?",
		answer:
			"The main feature of Whitespace UI that it saves you time. If it saves you time, it automatically saves you money. You no longer have to create a new UI kit from scratch before starting each project. Use Whitespace UI on an unlimited number of projects and save hundreds of hours and thousands of dollars.",
	},
	{
		tilte: "What is your return policy?",
		answer:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos soluta sint sed nobis quasi, at dolores illum voluptatum inventore ipsam repellat praesentium fugit temporibus pariatur, error perferendis earum quae?",
	},
	{
		tilte: "How can I contact customer support?",
		answer:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos soluta sint sed nobis quasi, at dolores illum voluptatum inventore ipsam repellat praesentium fugit temporibus pariatur, error perferendis earum quae?",
	},
	{
		tilte: "What payment methods do you accept?",
		answer:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores dignissimos soluta sint sed nobis quasi, at dolores illum voluptatum inventore ipsam repellat praesentium fugit temporibus pariatur, error perferendis earum quae?",
	},
];

function Faq() {
	return (
		<section className="faq">
			<div className="faq-header">
				<h1 className="faq-heading">Frequently Asked Questions</h1>
				<p className="faq-text">
					We tried to answer most common questions, if you have any additional,
					please get in touch with our friendly team
				</p>
			</div>
			<div className="faq-accordian">
				<div className="faq-accordian-box">
					{accordianContent.map((item, i) => (
						<AccordianItem
							key={i}
							title={item.tilte}
							answer={item.answer}
							number={i + 1}
						/>
					))}
				</div>
			</div>
			<div className="faq-footer">
				<h2 className="faq-footer-heading">Still have a questions?</h2>
				<p className="faq-footer-text">
					We're sorry we couldn't provide you with the information you were
					looking for. Please contact us and we'll be happy to help.
				</p>
				<button className="primary-btn">
					<span className="btn-span">
						<img src="./assets/Email.png" alt="icon" className="btn-icon" />
						<p className="btn-text">Contact Us</p>
					</span>
				</button>
			</div>
		</section>
	);
}

export default Faq;
