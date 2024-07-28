"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Intro() {
	return (
		<section className="relative w-full h-screen overflow-hidden">
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-48 text-left">
				<h1 className="text-white sm:text-4xl font-bold drop-shadow-lg leading-relaxed sm:leading-loose">
					Gemütliche Gästezimmer in Schweringen <br /> - Ideal für Urlaub oder Geschäftsreisen
				</h1>
				<div className="flex items-center justify-center gap-8 mt-24">
					<Link className="bg-amber-400 text-white font-semibold rounded-lg px-7 py-3 hover:bg-amber-600" href="#contact">
						Reservieren
					</Link>
					<Link className="bg-white text-amber-400 font-semibold rounded-lg px-7 py-3 hover:bg-amber-600" href="#contact">
						Gästezimmer ansehen
					</Link>
				</div>
			</motion.div>
			<Image layout="fill" objectFit="cover" quality={100} className="z-[-1]" alt="house" src="/house2.jpeg" />
		</section>
	);
}
