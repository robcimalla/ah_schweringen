import Image from "next/image";
import Header from "./components/header";
import Intro from "./components/intro";
import Overview from "./components/overview";
import Rooms from "./components/rooms";
import Austattung from "./components/austattung";
import RestRooms from "./components/rest-rooms";
import { outdoor, restRooms } from "@/lib/data";
import Outdoor from "./components/outdoor";
import Contact from "./components/contact";
import Anfahrt from "./components/anfahrt";

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<Header />
			<Intro />
			<Overview />
			<Rooms />
			<Austattung />
			<RestRooms restRooms={restRooms} />
			<Outdoor outdoorImages={outdoor} />
			<Contact />
			<Anfahrt />
		</main>
	);
}
