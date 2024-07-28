"use client";

import React from "react";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
	return (
		<section className="mt-20 text-center sm:mt-28 w-[min(100%,48rem)] mx-auto">
			<SectionHeading>Anfrage</SectionHeading>
			<p className="">Bei Fragen, schreibt mir gerne direkt an </p>
			<a className="underline" href="mailto:andrea.hellmann@gmail.com">
				andrea.hellmann@gmail.com
			</a>
			<form className="flex flex-col gap-2 mt-8">
				<input className="h-14 px-4 rounded-lg borderBlack" placeholder="Deine E-Mail" name="email" type="email" maxLength={500} required />
				<input className="h-14 px-4 rounded-lg borderBlack" type="date" name="date" required />
				<textarea className="h-52 my-3 rounded-lg borderBlack p-4" placeholder="Deine Nachricht" name="message" maxLength={5000} required />
			</form>
			<SubmitBtn />
		</section>
	);
}
