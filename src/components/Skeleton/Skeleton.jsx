import ContentLoader from "react-content-loader";

const Skeleton = ({ children, ...rest }) => (
	<ContentLoader
		speed="1"
		backgroundColor="#F4F4F4"
		foregroundColor="#ECECEC"
		{...rest}
	>
		{children}
	</ContentLoader>
);

export default Skeleton;
