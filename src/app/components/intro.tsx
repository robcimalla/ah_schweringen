"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Intro() {
	return (
		<section id="intro" className="relative w-full h-screen overflow-hidden px-2">
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 px-4 sm:px-8 lg:px-16 text-center">
				<h1 className="text-white text-3xl sm:text-4xl font-bold drop-shadow-lg leading-tight sm:leading-relaxed px-2 sm:px-4">
					Gemütliche Gästezimmer in Schweringen <br /> - Ideal für Urlaub oder Geschäftsreisen
				</h1>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-12 sm:mt-24">
					<Link className="bg-amber-400 text-white font-semibold rounded-lg px-6 py-3 hover:bg-amber-600" href="#contact">
						Reservieren
					</Link>
					<Link className="bg-white text-amber-400 font-semibold rounded-lg px-6 py-3 hover:bg-amber-600 mt-4 sm:mt-0" href="#contact">
						Gästezimmer
					</Link>
				</div>
			</motion.div>
			<Image layout="fill" objectFit="cover" quality={100} className="z-[-1]" alt="house" src="/house2.jpeg" />
		</section>
	);
}
