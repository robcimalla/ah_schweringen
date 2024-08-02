import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import "swiper/css";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Andrea Hellmann | Vermietung in Schweringen",
	description: "Vermietung von Appartments in Schweringen",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="!scroll-smooth" lang="en">
			<body className={`${inter.className} bg-gray-50 text-gray-950 relative `}>
				{children}
				<Toaster position="top-right" />
				<Footer />
			</body>
		</html>
	);
}
