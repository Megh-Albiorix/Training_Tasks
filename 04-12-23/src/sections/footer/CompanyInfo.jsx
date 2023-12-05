import CompanyLogo from "../../ui/CompanyLogo";
import SocialMedia from "../../ui/SocialMedia";

function CompanyInfo({ className }) {
	return (
		<div className={className}>
			<CompanyLogo />
			<p className="text-small">
				We love working with ambitious people.
				<br /> Let's build something great together now.
			</p>
			<SocialMedia />
		</div>
	);
}

export default CompanyInfo;
