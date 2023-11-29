import { useState } from "react";

function TopSection() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		console.log(name, email);
	}

	return (
		<div className="section-container">
			<div className="section-left">
				<h1 className="section-heading">Subscribe to our Services!</h1>
				<p className="section-text">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
					rem autem officiis enim, exercitationem facere, quibusdam consectetur
					eos quia distinctio id. Totam aliquam sit ipsam obcaecati tenetur
					possimus saepe itaque?
				</p>
				<form className="section-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<input
							type="text"
							placeholder="Enter Your Name"
							className="form-input"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							placeholder="Enter Your Email"
							className="form-input"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<button className="section-btn" type="submit">
						Submit
					</button>
				</form>
			</div>
			<div className="section-right">
				<img
					src="https://img.freepik.com/free-vector/happy-united-business-team_74855-6520.jpg"
					alt="section-img"
					className="section-img"
				/>
			</div>
		</div>
	);
}

export default TopSection;
