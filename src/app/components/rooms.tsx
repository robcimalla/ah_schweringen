"use client";

import React, { useRef } from "react";
import { rooms } from "../../../lib/data";
import ImageSlider from "./image-slider";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import Room from "./room";

export default function Rooms() {
	return (
		<section className="flex flex-col mx-auto mt-20 px-2">
			<SectionHeading>Gästezimmer</SectionHeading>
			<p className="text-1xl leading-loose">Ich biete drei gemütliche Gästezimmer im Dachgeschoss meines Hauses an. Es handelt sich um eine große Wohnung, die allen Gästen zur Verfügung steht. Die Zimmer sind hell und freundlich, da sie Tageslicht bieten, und verfügen über einen wunderschönen Blick ins Grüne. Der Zugang zu allen Zimmern ist gewährleistet, wobei der Eingang zum Haus gemeinsam genutzt wird. Diese Unterkunft bietet somit eine ideale Kombination aus Komfort, Ruhe und naturnaher Umgebung.</p>
			<>
				{rooms.map((room, index) => (
					<React.Fragment key={index}>
						<Room {...room} />
					</React.Fragment>
				))}
			</>
		</section>
	);
}
