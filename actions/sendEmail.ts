"use server";

import ContactFormEmail from "@/email/contact-form-html";
import { formatDate, getErrorMessage } from "@/lib/util";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const email = formData.get("email");
	const fromDate = formData.get("fromDate");
	const toDate = formData.get("toDate");
	const message = formData.get("message");

	const formattedFromDate = formatDate(fromDate);
	const formattedToDate = formatDate(toDate);

	let data;

	try {
		data = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>",
			to: "robert.cimalla@googlemail.com",
			subject: `Neue Buchungsanfrage für den Zeitraum von ${formattedFromDate} bis ${formattedToDate}`,
			reply_to: email as string,
			react: React.createElement(ContactFormEmail, { message: message as string, email: email as string, fromDate: formattedFromDate as string, toDate: formattedToDate as string }),
		});
		console.log(data);
	} catch (error: unknown) {
		return { error: getErrorMessage(error) };
	}

	return {
		data,
	};
};
