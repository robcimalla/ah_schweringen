"use client";

import React from "react";
import SectionHeading from "./section-heading";
import MultiImageSlider from "./multi-image-slider";
import { outdoor, Room } from "@/lib/data";
import ImageSlider from "./image-slider";

type OutdoorWithImages = Room & { images: { src: string }[] };

export default function Outdoor({ outdoorImages }: { outdoorImages: OutdoorWithImages[] }) {
	const allImages = outdoorImages.flatMap((image) => image.images);
	return (
		<section className="flex flex-col mx-auto mt-20 max-w-[50rem] px-2">
			<SectionHeading>Mein Außenbereich</SectionHeading>
			<p className="text-1xl leading-loose mb-8"></p>
			<ImageSlider images={allImages} />
		</section>
	);
}
