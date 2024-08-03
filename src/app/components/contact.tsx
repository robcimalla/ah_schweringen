"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import useSectionInView from "@/lib/hooks";

export default function Contact() {
	const [fromDate, setFromDate] = useState("");
	const [toDate, setToDate] = useState("");
	useEffect(() => {
		const getCurrentDate = () => {
			const fromFormattedDate = new Date().toISOString().split("T")[0];
			setFromDate(fromFormattedDate);

			const toDate = new Date();
			toDate.setDate(toDate.getDate() + 1);
			const toFormattedDate = toDate.toISOString().split("T")[0];
			setToDate(toFormattedDate);
		};
		getCurrentDate();
	}, []);

	const { ref } = useSectionInView("Anfrage");

	return (
		<section id="anfrage" ref={ref} className="mt-20 text-center sm:mt-28 w-[min(100%,48rem)] mx-auto px-2 max-w-[50rem]">
			<SectionHeading>Anfrage</SectionHeading>
			<p className="">Bei Fragen, schreibe mir gerne direkt an </p>
			<a className="underline" href="mailto:andrea.hellmann@gmail.com">
				andrea.hellmann@gmail.com
			</a>
			<form
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success("Anfrage wurde erfolgreich gestellt");
				}}
				className="flex flex-col gap-2 mt-8"
			>
				<input className="h-14 px-4 rounded-lg borderBlack" placeholder="Deine E-Mail" name="email" type="email" maxLength={500} required />
				<div className="flex flex-row w-full items-center space-x-4">
					<div className="flex flex-col flex-1">
						<span className="text-left text-gray-400 px-1">Von</span>
						<input className="h-14 px-4 rounded-lg borderBlack" type="date" name="fromDate" value={fromDate} onChange={(e) => setFromDate(e.target.value)} required />
					</div>
					<div className="flex flex-col flex-1">
						<span className="text-left text-gray-400 px-1">Bis</span>
						<input className="h-14 px-4 rounded-lg borderBlack" type="date" name="toDate" value={toDate} onChange={(e) => setToDate(e.target.value)} required />
					</div>
				</div>
				<textarea className="h-52 my-3 rounded-lg borderBlack p-4" placeholder="Deine Nachricht" name="message" maxLength={5000} required />
				<SubmitBtn />
			</form>
		</section>
	);
}
