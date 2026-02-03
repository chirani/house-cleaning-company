import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const cleaningSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email"),
	phone: z.string().min(6, "Phone number is too short"),
	bedrooms: z.number().min(1).max(10),
	bathrooms: z.number().min(1).max(10),
	cleaningType: z.enum(["standard", "deep", "move-out"]),
});

export type CleaningFormData = z.infer<typeof cleaningSchema>;

export function CleaningQuoteForm() {
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm<CleaningFormData>({
		resolver: zodResolver(cleaningSchema),
		defaultValues: {
			bedrooms: 1,
			bathrooms: 1,
			cleaningType: "standard",
		},
	});

	const bedrooms = watch("bedrooms");
	const bathrooms = watch("bathrooms");

	const onSubmit = (data: CleaningFormData) => {
		console.log(data);
	};

	return (
		<form
			className="flex flex-col gap-4 max-w-120"
			onSubmit={handleSubmit(onSubmit)}
		>
			{/* Name */}
			<div className="flex flex-row gap-4">
				<section className="flex flex-col gap-3 flex-1">
					<div>
						<input className="input" placeholder="Name" {...register("name")} />
						{errors.name && <p>{errors.name.message}</p>}
					</div>

					{/* Email */}
					<div>
						<input
							className="input"
							placeholder="Email"
							{...register("email")}
						/>
						{errors.email && <p>{errors.email.message}</p>}
					</div>

					{/* Phone */}
					<div>
						<input
							className="input"
							placeholder="Phone number"
							{...register("phone")}
						/>
						{errors.phone && <p>{errors.phone.message}</p>}
					</div>
				</section>

				<section className="flex flex-col gap-3 flex-1">
					{/* Cleaning type dropdown */}
					<div>
						<select {...register("cleaningType")} className="select">
							<option value="standard">Standard</option>
							<option value="deep">Deep</option>
							<option value="move-out">Move-out</option>
						</select>
						{errors.cleaningType && <p>{errors.cleaningType.message}</p>}
					</div>
					{/* Bedrooms slider */}
					<div>
						<label className="block" htmlFor="bedrooms">
							Bedrooms: {bedrooms}
						</label>
						<input
							className="range range-xs range-neutral"
							name="bedroons"
							type="range"
							min={1}
							max={10}
							value={bedrooms}
							onChange={(e) => setValue("bedrooms", Number(e.target.value))}
						/>
					</div>
					{/* Bathrooms slider */}
					<div>
						<label className="block" htmlFor="bathrooms">
							Bathrooms: {bathrooms}
						</label>
						<input
							className="range range-xs range-neutral"
							name="bathrooms"
							type="range"
							min={1}
							max={10}
							value={bathrooms}
							onChange={(e) => setValue("bathrooms", Number(e.target.value))}
						/>
					</div>
				</section>
			</div>
			<button type="submit" className="btn btn-neutral">
				Get Your Quote
			</button>
		</form>
	);
}
