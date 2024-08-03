import React from "react";

export default function Imprint() {
	return (
		<section className="bg-gray-50 max-w-[30rem] mx-auto rounded-lg px-4 py-8 mb-26">
			<div className="text-lg text-left font-medium mb-16 mx-auto max-w-xl">
				<h2 className="text-2xl mb-8 text-left">Impressum</h2>
				<div className="mb-4">
					<p>Anbieter:</p>
					<p>
						Andrea Hellmann
						<br /> Kirchstraße 10
						<br /> 27333 Schweringen
						<br /> Deutschland
					</p>
				</div>
				<div>
					<p>Kontakt:</p>
					<p>Email: andrea.hellmann@gmail.com</p>
				</div>
			</div>
		</section>
	);
}
