"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { rooms } from "@/lib/data";
import ImageSlider from "./image-slider";

type RoomProps = (typeof rooms)[number];

export default function Room({ description, tags, images, type, price }: RoomProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div className="flex flex-col px-1 py-4 mb-8 rounded-lg" ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }}>
			<h3 className="text-1xl font-semibold mb-4">{type}</h3>
			<ImageSlider images={images} />
			<div className="flex flex-col mt-4 mb-4">
				<p className="leading-relaxed mb-2">{description}</p>
				<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
					{tags.map((tag, index) => (
						<li className="bg-yellow-400 px-3 text-white py-1 text-[0.7rem] uppercase tracking-wider rounded-full shadow-lg" key={index}>
							{tag}
						</li>
					))}
					<p className="text-center bg-slate-50 font-semibold w-[4rem] shadow-lg border py-0.5 px-0.5 text-sm rounded-full">{price} €</p>
				</ul>
			</div>
		</motion.div>
	);
}
