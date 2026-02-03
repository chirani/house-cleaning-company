import { createFileRoute } from "@tanstack/react-router";
import { CleaningQuoteForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<main className="main ">
			{/** HERO - 1 */}
			<div className="flex flex-row sm:max-h-100">
				<div className="flex flex-col md:flex-row-reverse items-center gap-8">
					<img
						alt="hero_image"
						src="https://picsum.photos/id/603/300/300?grayscale"
						className="rounded size-75 bg-red-300"
					/>
					<div className="text-center md:text-left">
						<h1 className="text-3xl font-bold">Need Your House Cleaned?</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<button type="button" className="btn btn-lg btn-secondary">
							Get Started
						</button>
					</div>
				</div>
			</div>
			{/** HERO - 2 */}
			<div className="flex flex-row sm:max-h-100 mt-16">
				<div className="flex flex-col md:flex-row items-center gap-8">
					<img
						alt="hero_image"
						src="https://picsum.photos/id/613/300/300"
						className="rounded size-75 bg-red-300"
					/>
					<div className="text-center md:text-left">
						<h1 className="text-3xl font-bold">Wanna Work With Us?</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<div className="flex flex-row gap-3 justify-center md:justify-end-safe">
							<button type="button" className="btn btn-outline">
								As Employee
							</button>
							<button type="button" className="btn btn-secondary">
								As Company
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="size-16" />
			{/** Contact Form */}
			<div className="mt-16">
				<h2 className="text-3xl text-center md:text-left font-bold mb-8">
					Get a Quote For The Best Cleaning Service
				</h2>
				<div className="my-12 flex flex-col items-center">
					<CleaningQuoteForm />
				</div>
			</div>
			<div className="size-16" />
			{/** Column Form */}
			<div className="">
				<h2 className="text-3xl text-center md:text-left font-bold mb-8">
					Services
				</h2>
				<div className="flex flex-row">
					<div className="card"></div>
				</div>
			</div>
			{/**Services */}
			<div className="flex flex-col md:flex-row gap-4">
				<div className="p-4 border-zinc-700 border flex-1/3">
					<img
						alt="hero_image"
						src="https://picsum.photos/id/20/300/100"
						className="rounded w-75 h-25 bg-red-300"
					/>
				</div>
				<div className="p-4 border-zinc-700 border flex-1/3">
					<img
						alt="hero_image"
						src="https://picsum.photos/id/230/300/100"
						className="rounded w-75 h-25 bg-red-300"
					/>
				</div>
				<div className="p-4 border-zinc-700 border flex-1/3">
					<img
						alt="hero_image"
						src="https://picsum.photos/id/230/300/100"
						className="rounded w-75 h-25 bg-red-300"
					/>
				</div>
			</div>
			<div className="size-16" />
		</main>
	);
}
