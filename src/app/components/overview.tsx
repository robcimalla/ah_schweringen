import React from "react";
import SectionHeading from "./section-heading";

export default function Overview() {
	return (
		<section className="flex flex-col items-center justify-center mt-20 w-[48rem] mx-auto">
			<SectionHeading>Übersicht</SectionHeading>
			<p className="text-left text-1xl mt-8 leading-loose">Willkommen in Schweringen bei Nienburg! Ich biete gemütliche Gästezimmer im Dachgeschoss meines Hauses, ideal für Seminarteilnehmer, Urlauber und Monteure. Genießen Sie die ruhige Lage, die komfortable Ausstattung und die Nähe zum idyllischen Kiessee. Schweringen bietet perfekte Erholung und zahlreiche Freizeitmöglichkeiten. Kontaktieren Sie mich für Buchungen und weitere Informationen!</p>
		</section>
	);
}
