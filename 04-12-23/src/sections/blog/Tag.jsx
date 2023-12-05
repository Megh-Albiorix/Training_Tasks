function Tag({ bgColor, tagText, textColor }) {
	return (
		<div
			style={{
				backgroundColor: `${bgColor}`,
				color: `${textColor}`,
			}}
			className="blog-tag"
		>
			{tagText}
		</div>
	);
}

export default Tag;
