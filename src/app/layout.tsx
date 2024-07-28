import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import Header from "./components/header";
import Intro from "./components/intro";
import Overview from "./components/overview";
import Rooms from "./components/rooms";
import Austattung from "./components/austattung";
import RestRooms from "./components/rest-rooms";
import { outdoor, restRooms } from "@/lib/data";
import Outdoor from "./components/outdoor";
import Contact from "./components/contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Andrea Hellmann | Vermietung in Schwertingen",
	description: "Vermietung von Appartments in Schweringen",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="!scroll-smooth" lang="en">
			<body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
				<Header />
				<Intro />
				<Overview />
				<Rooms />
				<Austattung />
				<RestRooms restRooms={restRooms} />
				<Outdoor outdoorImages={outdoor} />
				<Contact />
				{children}
			</body>
		</html>
	);
}
