import { austattung } from "@/lib/data";
import React from "react";
import SectionHeading from "./section-heading";

export default function Austattung() {
	return (
		<section className="flex flex-col w-[48rem] mt-20 mx-auto">
			<SectionHeading>Ausstattung</SectionHeading>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{austattung.map((item, index) => (
					<div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-100 transition-transform hover:scale-105 shadow-lg">
						<span className="text-amber-400 text-3xl mb-2">{item.icon}</span>
						<h2 className="text-2xl mb-2">{item.title}</h2>
						<p className="text-1xl text-gray-500 leading-relaxed">{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
