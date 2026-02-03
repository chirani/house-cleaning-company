import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export default function Header() {
	return (
		<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
				<Link to="/" className="btn btn-ghost text-xl">
					MAIDFINDER
				</Link>
			</div>
			<div className="flex-1"></div>
			<div className="hidden md:flex navbar-end gap-3">
				<Link to="/signup" className="btn btn-outline">
					Applicants
				</Link>
				<Link to="/signup" className="btn btn-outline">
					Areas We Serve
				</Link>
				<Link to="/signup" className="btn btn-outline">
					Business
				</Link>
				<Link to="/signup" className="btn btn-outline">
					<Phone className="size-5" />
					Call US
				</Link>
				<div className="py-3 border-l" />
				<Link to="/signup" className="btn btn-ghost">
					Login
				</Link>
				<Link to="/signup" className="btn btn-accent">
					Signup
				</Link>
			</div>
			<div className="flex md:hidden navbar-end gap-3">
				<Link to="/signup" className="btn btn-outline">
					<Phone className="size-5" />
					Call US
				</Link>
				<Link to="/signup" className="btn btn-accent">
					Signup
				</Link>
			</div>
		</div>
	);
}
