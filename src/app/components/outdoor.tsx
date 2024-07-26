import React from "react";
import SectionHeading from "./section-heading";
import MultiImageSlider from "./multi-image-slider";
import { outdoor, Room } from "@/lib/data";

type OutdoorWithImages = Room & { images: { src: string }[] };

export default function Outdoor({ outdoorImages }: { outdoorImages: OutdoorWithImages[] }) {
	const allImages = outdoorImages.flatMap((image) => image.images);
	return (
		<section className="flex flex-col w-[48rem] mx-auto mt-20">
			<SectionHeading>Mein Außenbereich</SectionHeading>
			<p className="text-1xl leading-loose mb-8"></p>
			<MultiImageSlider images={allImages} />
		</section>
	);
}
