import Header from "./ui/Header";
import HeroSection from "./sections/hero/HeroSection";
import Features from "./sections/features/Features";
import Cta from "./sections/cta/Cta";
import Faq from "./sections/faq/Faq";
import Blog from "./sections/blog/Blog";
import NewsLetter from "./sections/newsletter/NewsLetter";
import Clients from "./sections/clients/Clients";
import Footer from "./sections/footer/Footer";

function App() {
	return (
		<div>
			<main className="main-container">
				<Header />
				<HeroSection />
				<Features />
				<Cta />
				<Faq />
				<Blog />
				<NewsLetter />
				<Clients />
				<Footer />
			</main>
		</div>
	);
}

export default App;
