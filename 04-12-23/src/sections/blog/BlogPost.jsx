import Tag from "./Tag";

function BlogPost({ imgSrc, blogHeading, blogText }) {
	return (
		<div className="blog-post">
			<div className="blog__img-box">
				<img src={imgSrc} alt="Blog Image" className="blog-img" />
			</div>
			<div className="blog-box">
				<div className="blog-profile-details">
					<img
						src="./assets/Avatar.png"
						alt="Profile Pic"
						className="blog-profile-img"
					/>
					<div className="blog-profile-box">
						<h4 className="blog-profile-heading">Jenny Wilson</h4>
						<p className="blog-profile-text">May 9, 2023</p>
					</div>
				</div>
				<div className="blog-post-details">
					<h3 className="blog-post-heading">{blogHeading}</h3>
					<p className="blog-post-text">{blogText}</p>
				</div>
				<div className="blog-tags">
					<Tag bgColor="#E5EFFF" textColor="#004ECC" tagText="UI/UX" />
					<Tag
						bgColor="#E5F4FF"
						textColor="background: #0077CC"
						tagText="Studio"
					/>
					<Tag bgColor="#E5F9FF" textColor="#0099CC" tagText="Web Design" />
					<Tag bgColor="#F2F4F7" textColor="#344051" tagText="+2" />
				</div>
			</div>
		</div>
	);
}

export default BlogPost;
