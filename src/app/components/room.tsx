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
		<motion.div className="flex flex-col py-4 mb-8 rounded-lg overflow-hidden" ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }}>
			<h3 className="text-xl font-semibold mb-4">{type}</h3>
			<div className="flex flex-col mt-4 mb-4">
				<ImageSlider images={images} />
				<p className="leading-relaxed mb-2">{description}</p>
				<ul className="flex flex-wrap gap-2">
					{tags.map((tag, index) => (
						<li className="bg-yellow-400 px-3 text-white py-1 text-xs uppercase tracking-wider rounded-full shadow-lg" key={index}>
							{tag}
						</li>
					))}
				</ul>
				<p className="text-center bg-slate-50 font-semibold shadow-lg w-16 border p-1 text-sm rounded-full mt-2">{price} €</p>
			</div>
		</motion.div>
	);
}
