import BlogPost from "./BlogPost";

function Blog() {
	return (
		<section className="blog">
			<div className="blog-header">
				<h3 className="section-highlight">Blog</h3>
				<h1 className="blog-heading">Our Fresh News</h1>
				<p className="blog-text">
					Our blog is more than just a collection of articles - it's a hub of
					ideas, inspiration, and thought-provoking discussions.
				</p>
			</div>
			<div className="blog-posts">
				<BlogPost
					imgSrc="./assets/blog-img-1.png"
					blogHeading="Meet an web designer in his studio in Amsterdam"
					blogText="We'll get to know the designer and their design philosophy, as well as take a look..."
				/>
				<BlogPost
					imgSrc="./assets/blog-img-2.png"
					blogHeading="The Evolution of UI/UX Design: From Skeuomorphism to Flat Design"
					blogText="Discussing the shift from realistic designs to minimalistic, flat designs."
				/>
				<BlogPost
					imgSrc="./assets/blog-img-3.png"
					blogHeading="The Importance of User-Centered Design in IT Projects"
					blogText="Exploring the significance of putting the user first in IT projects"
				/>
			</div>
			<button className="primary-btn">Load More</button>
		</section>
	);
}

export default Blog;
