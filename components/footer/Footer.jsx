import {FaGithub, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"

const Footer = () => {
	return (
		<footer className="h-[10vh] flex justify-between items-center">
			&copy;2023 BLOGS.Co. All rights reserved.
			<div className="flex gap-2">
				<FaGithub />
				<FaLinkedin />
				<FaFacebook />				
				<FaTwitter />
			</div>
			</footer>
	)
}
export default Footer