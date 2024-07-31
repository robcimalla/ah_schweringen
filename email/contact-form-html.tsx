import React from "react";
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
	message: string;
	email: string;
	fromDate: string;
	toDate: string;
};

export default function ContactFormEmail({ message, email, fromDate, toDate }: ContactFormEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>
				Anfrage: Reservierung für den Zeitraum {fromDate} bis {toDate}
			</Preview>
			<Tailwind>
				<Body className="bg-gray-100 text-black">
					<Container>
						<Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
							<Heading className="leading-tight">Du hast eine neue Anfrage für die Reservierung einer deiner Zimmer erhalten.</Heading>
							<Text className="mb-2">
								Zeitraum: {fromDate} - {toDate}
							</Text>
							<Text>{message}</Text>
							<Hr />
							<Text>Die Mail der anfrangenden Person ist {email}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
