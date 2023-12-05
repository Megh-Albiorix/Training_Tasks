import { useState } from "react";

function AccordianItem({ title, answer, number }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="accordian-item">
			<div className="accordian-title-box">
				<h3 className="accordian-title">{`${number}. ${title}`}</h3>
				<button
					className="accordian-btn"
					onClick={() => {
						setIsOpen((isOpen) => !isOpen);
					}}
				>
					{isOpen ? "➖" : "➕"}
				</button>
			</div>
			{isOpen && <p className="accordian-answer">{answer}</p>}
		</div>
	);
}

export default AccordianItem;
