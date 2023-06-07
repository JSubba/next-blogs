import Link from "next/link"

const Navbar = () => {
	return (
		<nav className="h-[10vh] flex justify-between items-center px-2 md:px-0">
			<Link href={"/"}>
				<h1 className="text-2xl">BLOGS</h1>
			</Link>
			<div className="flex gap-2">
				<Link href={"/about"}>About</Link>
				<Link href={"/portfolio"}>Portfolio</Link>
				<Link href={"/blog"}>Blog</Link>				
				<Link href={"/contact"}>Contact</Link>
				<Link href={"/dashboard"}>Dashboard</Link>
			</div>
		</nav>
	)
}
export default Navbar