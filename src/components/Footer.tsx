export default function Footer() {
	return (
		<footer className="p-4 border-t-zinc-800 border-t">
			<div className="main flex flex-col md:flex-row justify-between gap-5">
				<div>
					<h3 className="text-lg font-bold mb-2">SERVICES</h3>
					<p>Service 1</p>
					<p>Service 2</p>
					<p>Service 3</p>
					<p>Service 4</p>
					<p>Service 5</p>
				</div>
				<div>
					<h3 className="text-lg font-bold mb-2">COMPANY </h3>
					<p>About Company 1</p>
					<p>About Company 2</p>
					<p>About Company 3</p>
				</div>
				<div>
					<h3 className="text-lg font-bold mb-2">HELPFUL LINKS </h3>
					<p>Helpful Link 1</p>
					<p>Helpful Link 2</p>
					<p>Helpful Link 3</p>
					<p>Helpful Link 4</p>
				</div>
			</div>
		</footer>
	);
}
