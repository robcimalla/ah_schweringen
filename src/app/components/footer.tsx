import React from "react";

export default function Footer() {
	return (
		<footer className="mb-10 px-4 text-center text-gray-500 mt-20">
			<small className="mb-2 block text-xs">&copy; 2024 Andrea Hellmann. Alle Rechte reserviert</small>
			<p className="text-xs">
				<span className="font-semibold">Über diese Webseite: </span> sie wurde mithilfe von React & Next.js gebaut
			</p>
			<ul className="flex flex-row gap-2 mt-2 text-xs items-center justify-center">
				<li>
					<a href="/">Startseite</a>
				</li>
				<li>
					<a href="/impressum">Impressum</a>
				</li>
			</ul>
		</footer>
	);
}
