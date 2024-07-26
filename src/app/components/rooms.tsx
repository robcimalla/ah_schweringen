"use client";

import React from "react";
import { rooms } from "../../../lib/data";
import ImageSlider from "./image-slider";
import SectionHeading from "./section-heading";

export default function Rooms() {
	return (
		<section className="flex flex-col mx-auto w-[48rem] mt-20">
			<SectionHeading>Gästezimmer</SectionHeading>
			<p className="text-1xl leading-loose">Ich biete drei gemütliche Gästezimmer im Dachgeschoss meines Hauses an. Es handelt sich um eine große Wohnung, die allen Gästen zur Verfügung steht. Die Zimmer sind hell und freundlich, da sie Tageslicht bieten, und verfügen über einen wunderschönen Blick ins Grüne. Der Zugang zu allen Zimmern ist gewährleistet, wobei der Eingang zum Haus gemeinsam genutzt wird. Diese Unterkunft bietet somit eine ideale Kombination aus Komfort, Ruhe und naturnaher Umgebung.</p>

			<div>
				{rooms.map((room) => (
					<div className="flex flex-col px-1 py-4 mb-8 rounded-lg" key={room.type}>
						<h3 className="text-1xl mb-2 font-semibold mb-4">{room.type}</h3>

						<ImageSlider images={room.images} />
						<div className="flex flex-col mt-4 mb-4">
							<p className="leading-relaxed mb-2">{room.description}</p>
							<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
								{room.tags.map((tag, index) => (
									<li className="bg-yellow-400 px-3 text-white py-1 text-[0.7rem] uppercase tracking-wider rounded-full shadow-lg" key={index}>
										{tag}
									</li>
								))}
								<p className="text-center bg-slate-50 font-semibold w-[4rem] shadow-lg border py-0.5 px-0.5 text-sm rounded-full">{room.price} €</p>
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
