"use client";

import React from "react";
import { links } from "../../../lib/data";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
	return (
		<header className="z-[999] absolute">
			<div className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-amber-400 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full">
				<nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 sm:-translate-y-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
					<ul className="flex w-[22rem] gap-2 flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-100 sm:w-[initial] sm:flex-nowrap sm:gap-5">
						{links.map((link) => (
							<li className="h-3/4 flex items-center justify-center relative" key={link.hash}>
								<Link href={link.hash} className="hover:text-amber-200">
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
