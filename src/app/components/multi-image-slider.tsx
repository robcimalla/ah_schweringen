"use client";

import Image from "next/image";
import React, { useState, useCallback } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

type MultiImageSliderProps = {
	images: { src: string; alt?: string }[];
};

export default function MultiImageSlider({ images }: MultiImageSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
	}, [images.length]);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
	}, [images.length]);

	return (
		<div className="flex flex-col items-center justify-center" aria-roledescription="carousel">
			<div className="relative  overflow-hidden" aria-live="polite">
				<div className="flex transition-transform duration-500 ease-in-out">
					<Image src={images[currentIndex].src} alt={images[currentIndex].alt || `Slide ${currentIndex + 1}`} height={600} width={1000} objectFit="contain" className="rounded shadow-sm" priority />
				</div>
			</div>
			<div className="flex mt-4 space-x-2">
				<button onClick={prevSlide} className="text-2xl px-4 focus:outline-none text-amber-400" aria-label="Previous Slide">
					<FaArrowAltCircleLeft />
				</button>
				<div className="flex space-x-2">
					{images.map((image, index) => (
						<div key={index} className={`cursor-pointer p-1 border-2 ${index === currentIndex ? "border-blue-500" : "border-transparent"}`} onClick={() => setCurrentIndex(index)} aria-label={`Go to slide ${index + 1}`} role="button" tabIndex={0}>
							<Image src={image.src} alt={image.alt || `Thumbnail ${index + 1}`} width={60} height={40} objectFit="cover" className="rounded" />
						</div>
					))}
				</div>
				<button onClick={nextSlide} className="text-2xl px-4 focus:outline-none text-amber-400" aria-label="Next Slide">
					<FaArrowAltCircleRight />
				</button>
			</div>
		</div>
	);
}
