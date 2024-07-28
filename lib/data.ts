import React from "react";

import dz1 from "@/public/2EZ1.jpeg";
import dz2 from "@/public/DZ2.jpeg";
import ez1 from "@/public/EZ1.jpeg";
import ez12 from "@/public/2EZ1.jpeg";
import bz1 from "@/public/BZ1.jpeg";
import bz2 from "@/public/BZ2.jpeg";
import bz3 from "@/public/BZ3.jpeg";
import ab1 from "@/public/AB1.jpeg";
import ab2 from "@/public/AB2.jpeg";
import ab3 from "@/public/AB3.jpeg";
import ab4 from "@/public/AB4.jpeg";

import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { BiSolidFridge } from "react-icons/bi";

export interface Room {
	type: string;
	description: string;
	price?: number;
	tags: string[];
	images: { src: string }[];
}

export const links = [
	{ name: "Startseite", hash: "#startseite" },
	{ name: "Übersicht", hash: "#uebersicht" },
	{ name: "Gästezimmer", hash: "#zimmer" },
	{ name: "Anfrage", hash: "#anfrage" },
	{ name: "Anfahrt", hash: "#anfahrt" },
] as const;

export const rooms: Room[] = [
	{
		type: "Doppelzimmer",
		description: "Ausgestattet mit einem komfortablen Doppelbett. Ab 50,-€ pro Nacht bei Belegung mit zwei Personen, ab 30,-€ bei Einzelbelegung.",
		price: 50,
		tags: ["Doppelbett", "Kleiderschrank"],
		images: [dz1, dz2],
	},
	{
		type: "Zweibettzimmer",
		description: "Ideal für Freunde oder Kollegen, die zusammen reisen. Preis wie beim Doppelzimmer.",
		price: 50,
		tags: ["Einzelbetten", "Couch"],
		images: [ez12],
	},
	{
		type: "Einzelzimmer",
		description: "Perfekt für Alleinreisende, ab 30,-€ pro Nacht. Alle Zimmer können auch als Einzelzimmer zum Einzelzimmerpreis gebucht werden",
		price: 30,
		tags: ["Einzelbett", "Dachfenster"],
		images: [ez1],
	},
] as const;

export const austattung = [
	{
		title: "Bettwäsche und Handtücher",
		description: "Bettwäsche und Handtücher sind inklusive. Frische Handtücher werden auf Anfrage zur Verfügung gestellt.",
		icon: React.createElement(IoIosBed),
	},
	{
		title: "Badezimmer",
		description: "Das Bad im Dachgeschoss gehört ausschließlich zu den 3 Gästezimmer, ein eigenes Bad im Erdgeschoss kann zeitweise zur Alleinnutzung dazu gemietet werden. Beide Bäder sind mit Dusche ausgestattet, ein Fön ist in beiden Räumen vorhanden.",
		icon: React.createElement(FaBath),
	},
	{
		title: "Kochbereich",
		description: "Die Kochecke bietet Platz zur Selbstversorgung, eine Kaffeepadmaschine, 2-Feld-Kochplatte, Mikrowelle, Minibackofen, Wasserkocher, Pads, Teebeutel sind ebenfalls vorhanden. Des weiteren gibt es einen Toaster, Geschirr und Töpfe.",
		icon: React.createElement(FaKitchenSet),
	},
	{
		title: "Getränke",
		description: "Im Kühlschrank und auf der Anrichte findet Ihr Getränke zum Selbstkostenpreis. Ihr dürft euch gerne bedienen.",
		icon: React.createElement(BiSolidFridge),
	},
] as const;

export const restRooms: Room[] = [
	{
		type: "Badezimmer",
		description: "Ausgestattet mit einem komfortablen Doppelbett. Ab 50,-€ pro Nacht bei Belegung mit zwei Personen, ab 30,-€ bei Einzelbelegung.",
		tags: ["Dusche", "Fön", "Handtücher"],
		images: [bz1, bz2, bz3],
	},
	{
		type: "Kochbereich",
		description: "Ausgestattet mit einem komfortablen Doppelbett. Ab 50,-€ pro Nacht bei Belegung mit zwei Personen, ab 30,-€ bei Einzelbelegung.",
		tags: ["Doppelbett", "Kleiderschrank"],
		images: [dz1, dz2],
	},
] as const;

export const outdoor: Room[] = [
	{
		type: "Garten",
		description: "Ausgestattet mit einem komfortablen Doppelbett. Ab 50,-€ pro Nacht bei Belegung mit zwei Personen, ab 30,-€ bei Einzelbelegung.",
		tags: ["Dusche", "Fön", "Handtücher"],
		images: [ab4, ab3, ab2, ab1],
	},
] as const;
