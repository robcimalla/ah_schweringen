import React, { useState } from "react";
import { Room } from "../../../lib/data";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowLeft } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";

type ImageSliderProps = {
	images: Room["images"];
};

export default function ImageSlider({ images }: ImageSliderProps) {
	const [currentIndex, setCurrenIndex] = useState(0);

	const nextImage = () => {
		setCurrenIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	};

	const prevImage = () => {
		setCurrenIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex - 1));
	};

	return (
		<div className="max-w-4xl mx-auto">
			<div className="relative">
				<div className="overflow-hidden">
					<div className="flex transition-transform duration-500" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
						{images.map((image, index) => (
							<img key={index} src={image.src} className="flex-shrink-0 w-full rounded-xl" alt={`Slide ${index}`} />
						))}
					</div>
				</div>
				<div className="flex justify-center items-center p-4 gap-4">
					<button onClick={prevImage} className={`text-gray-500 hover:text-amber-400 ${images.length === 1 ? "hidden" : ""}`}>
						<FaArrowLeftLong />
					</button>
					{images.map((_, index) => (
						<button onClick={() => setCurrenIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-amber-400" : "bg-gray-300"}`} key={index} />
					))}
					<button onClick={nextImage} className={`text-gray-500 hover:text-amber-400 ${images.length === 1 ? "hidden" : ""}`}>
						<FaArrowRightLong />
					</button>
				</div>
			</div>
		</div>
	);
}
