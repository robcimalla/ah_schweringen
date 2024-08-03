"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import useSectionInView from "@/lib/hooks";
import LeafletMap from "./maps";
import { IoIosArrowDown, IoIosArrowDropdown, IoIosArrowUp } from "react-icons/io";

export default function Anfahrt() {
	const { ref } = useSectionInView("Anfahrt");
	const [isTrainOpen, setIsTrainOpen] = useState(false);
	const [isCarOpen, setIsCarOpen] = useState(false);
	return (
		<div ref={ref} id="anfahrt" className="flex flex-col mt-20 w-[min(100%,48rem)] px-2">
			<SectionHeading>Anfahrt</SectionHeading>
			<p className="text-1xl text-center">Hier finden sie mich: Kirchstraße 10, 27333 Schweringen, Deutschland.</p>
			<div className="mt-4 mb-4 gap-1">
				<button onClick={() => setIsCarOpen(!isCarOpen)} className="flex w-full pr-2 p-2 justify-between items-center border rounded-lg font-semibold text-gray-600">
					Mit dem Auto <span>{isCarOpen ? <IoIosArrowUp className="w-8 h-8 p-1 rounded-full hover:bg-gray-200" /> : <IoIosArrowDown className="w-8 h-8 p-1 rounded-full hover:bg-gray-200" />}</span>
				</button>
				<div className={`transition-all duration-500 ease-in-out overflow-auto mb-2 rounded-lg ${isCarOpen ? "max-h-40" : "max-h-0"}`}>
					<ul className="mt-2 border p-2 text-gray-500">
						<li>Von der A1 (aus Richtung Norden): Nehmen Sie die Ausfahrt 55-Brinkum und folgen Sie der B6 in Richtung Nienburg. Folgen Sie dann der B215 in Richtung Schweringen und biegen Sie links ab auf die Schweringer </li>
						<li>Von der A2 (aus Richtung Süden): Nehmen Sie die Ausfahrt 42-Rehren, folgen Sie der B442 nach Wunstorf, dann der B441 nach Nienburg, und schließlich der B215 in Richtung Schweringen. Biegen Sie links ab auf die Schweringer Straße zur Kirchstraße.</li>
					</ul>
				</div>

				<button onClick={() => setIsTrainOpen(!isTrainOpen)} className="flex w-full pr-2 p-2 justify-between items-center border rounded-lg font-semibold text-gray-600">
					Mit dem Zug <span>{isTrainOpen ? <IoIosArrowUp className="w-8 h-8 p-1 rounded-full hover:bg-gray-200" /> : <IoIosArrowDown className="w-8 h-8 p-1 rounded-full hover:bg-gray-200" />}</span>
				</button>
				<div className={`transition-all duration-500 ease-in-out overflow-auto rounded-lg ${isTrainOpen ? "max-h-40" : "max-h-0"}`}>
					<ul className="mt-2 border p-2 text-gray-500">
						<li>Von Hannover: Nehmen Sie den Regionalzug (RE1 oder RE8) nach Nienburg (Weser) (ca. 30-40 Minuten), und dann den Bus (Linie 40) oder ein Taxi nach Schweringen (ca. 20-30 Minuten).</li>
						<li>Von Bremen: Nehmen Sie den Regionalzug (RE1 oder RE8) nach Nienburg (Weser) (ca. 30-40 Minuten), und dann den Bus (Linie 40) oder ein Taxi nach Schweringen (ca. 20-30 Minuten).</li>
					</ul>
				</div>
			</div>
			<div className="max-w-full">
				<LeafletMap />
			</div>
		</div>
	);
}
