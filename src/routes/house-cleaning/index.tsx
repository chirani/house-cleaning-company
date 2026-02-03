import { createFileRoute } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { CleaningQuoteForm } from "@/components/ContactForm";

export const Route = createFileRoute("/house-cleaning/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="main">
			{/** Contact Form */}
			<div className="mt-8">
				<h2 className="text-3xl text-center md:text-left font-bold mb-8">
					Get a Quote For The Best Cleaning Service
				</h2>
				<div className="h-100 flex flex-col items-center justify-center">
					<CleaningQuoteForm />
				</div>
			</div>
			<div className="mt-8">
				<h2 className="text-3xl text-center md:text-left font-bold mb-8">
					Home Service Options
				</h2>
				<div className="flex flex-row items-start justify-center gap-8">
					<div className="card w-96 bg-base-100 shadow-sm">
						<div className="card-body">
							<div className="flex justify-between">
								<h2 className="text-3xl font-bold">Premium</h2>
							</div>
							<span className="badge badge-xs badge-warning">Most Popular</span>
							<ul className="mt-6 flex flex-col gap-2 text-xs">
								<li>
									<Check />
									<span>High-resolution image generation</span>
								</li>
								<li>
									<Check />
									<span>Customizable style templates</span>
								</li>
								<li>
									<Check />
									<span>Batch processing capabilities</span>
								</li>
								<li>
									<Check />
									<span>AI-driven image enhancements</span>
								</li>
								<li className="opacity-50">
									<Check />
									<span className="line-through">
										Seamless cloud integration
									</span>
								</li>
								<li className="opacity-50">
									<span className="line-through">
										Real-time collaboration tools
									</span>
								</li>
							</ul>
							<div className="mt-6">
								<button type="button" className="btn btn-primary btn-block">
									<Phone /> Call Now
								</button>
							</div>
						</div>
					</div>

					<div className="card w-96 bg-base-100 shadow-sm">
						<div className="card-body">
							<div className="flex justify-between">
								<h2 className="text-3xl font-bold">Hourly</h2>
							</div>
							<ul className="mt-6 flex flex-col gap-2 text-xs">
								<li>
									<Check />
									<span>High-resolution image generation</span>
								</li>
								<li>
									<Check />
									<span>Customizable style templates</span>
								</li>
								<li>
									<Check />
									<span>Batch processing capabilities</span>
								</li>
								<li>
									<Check />
									<span>AI-driven image enhancements</span>
								</li>
								<li className="opacity-50">
									<Check />
									<span className="line-through">
										Seamless cloud integration
									</span>
								</li>
								<li className="opacity-50">
									<span className="line-through">
										Real-time collaboration tools
									</span>
								</li>
							</ul>
							<div className="mt-6">
								<button type="button" className="btn btn-outline btn-block">
									<Phone /> Call Now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
