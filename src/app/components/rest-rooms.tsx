"use client";

import React from "react";
import MultiImageSlider from "./multi-image-slider";
import { Room } from "@/lib/data";
import SectionHeading from "./section-heading";
import ImageSlider from "./image-slider";

type RoomWithImages = Room & { images: { src: string }[] };

export default function RestRooms({ restRooms }: { restRooms: RoomWithImages[] }) {
	const allImages = restRooms.flatMap((room) => room.images);

	return (
		<section className="flex flex-col mx-auto mt-20 max-w-[50rem] px-2">
			<SectionHeading>Wohn- und Badezimmer</SectionHeading>
			<p className="text-1xl leading-loose mb-8">In der Unterkunft steht eine gut ausgestattete Gemeinschaftsküche zur Verfügung, die alle Gäste nutzen können. Die Küche ist mit zahlreichen Kochutensilien ausgestattet, sodass alle gängigen Kochbedürfnisse abgedeckt sind. Zusätzlich gibt es einen kleinen Getränkevorrat, aus dem sich die Gäste bedienen können. Die Wohnung bietet ein eigenes Bad. Das Bad bieten ausreichend Platz und ist modern ausgestattet, um den Komfort der Gäste zu gewährleisten.</p>
			<ImageSlider images={allImages} />
		</section>
	);
}
